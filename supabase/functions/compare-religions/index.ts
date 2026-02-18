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

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

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

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em alguns segundos." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos insuficientes. Adicione créditos nas configurações." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Erro ao consultar a IA." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
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
