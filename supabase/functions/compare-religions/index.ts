import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { question, traditions } = await req.json();

    if (!question || !traditions || !Array.isArray(traditions) || traditions.length === 0) {
      return new Response(JSON.stringify({ error: "Pergunta e tradições são obrigatórias." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
    if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is not configured");

    const traditionNames: Record<string, string> = {
      catolico: "Católica",
      evangelico: "Evangélica",
      islamico: "Islâmica",
      judaismo: "Judaica",
      espirita: "Espírita",
      umbanda: "Umbandista",
      budismo: "Budista",
      hinduismo: "Hindu",
      explorar: "Filosófica/Acadêmica",
    };

    const selectedNames = traditions.map((t: string) => traditionNames[t] || t).join(", ");

    const systemPrompt = `Você é um especialista em religiões comparadas e filosofia da religião. O usuário fez uma pergunta e quer ver a resposta sob diferentes perspectivas religiosas/filosóficas.

REGRAS IMPORTANTES:
- Responda SEPARADAMENTE para cada tradição solicitada
- Use o formato: "## Na visão [Nome da Tradição]" como cabeçalho para cada seção
- Cite fontes reais (textos sagrados, teólogos, filósofos)
- Seja respeitoso e neutro — sem juízo de valor
- Não tente converter ou privilegiar nenhuma visão
- Se houver divergência dentro de uma tradição, mencione
- Após todas as visões, adicione uma seção "## Reflexão" com um breve comentário acadêmico
- Responda em português brasileiro
- Seja conciso mas informativo (2-4 parágrafos por tradição)

Tradições solicitadas: ${selectedNames}`;

    const geminiContents = [
      { role: "user", parts: [{ text: systemPrompt }] },
      { role: "model", parts: [{ text: "Entendido. Vou responder de forma comparativa e respeitosa." }] },
      { role: "user", parts: [{ text: question }] },
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?alt=sse&key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: geminiContents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 4096,
          },
        }),
      }
    );

    if (!response.ok) {
      const t = await response.text();
      console.error("Gemini error:", response.status, t);

      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em alguns segundos." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: "Erro ao consultar a IA." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Transform Gemini SSE to OpenAI-compatible SSE format
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();

    (async () => {
      try {
        const reader = response.body!.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          let newlineIndex: number;
          while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
            const line = buffer.slice(0, newlineIndex).trim();
            buffer = buffer.slice(newlineIndex + 1);

            if (!line.startsWith("data: ")) continue;
            const jsonStr = line.slice(6).trim();
            if (!jsonStr || jsonStr === "[DONE]") continue;

            try {
              const parsed = JSON.parse(jsonStr);
              const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) {
                const openAIChunk = {
                  choices: [{ delta: { content: text } }],
                };
                await writer.write(encoder.encode(`data: ${JSON.stringify(openAIChunk)}\n\n`));
              }
            } catch {
              // skip malformed JSON
            }
          }
        }
        await writer.write(encoder.encode("data: [DONE]\n\n"));
      } catch (e) {
        console.error("Stream transform error:", e);
      } finally {
        await writer.close();
      }
    })();

    return new Response(readable, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("compare error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
