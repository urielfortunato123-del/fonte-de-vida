const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const languageNames: Record<string, string> = {
  en: "English",
  es: "Spanish",
  fr: "French",
  it: "Italian",
  ar: "Arabic",
  nl: "Dutch",
  zh: "Chinese (Simplified)",
  ko: "Korean",
  ja: "Japanese",
  de: "German",
  ru: "Russian",
  "pt-PT": "European Portuguese",
};

const officialTranslationHints: Record<string, Record<string, string>> = {
  en: {
    catolico: "Use the King James Version (KJV) or New International Version (NIV) for Bible texts.",
    evangelico: "Use the King James Version (KJV) or English Standard Version (ESV) for Bible texts.",
    islamico: "Use Sahih International or Abdullah Yusuf Ali translation for Quran texts.",
    judaismo: "Use the JPS Tanakh translation for Torah and Jewish texts.",
    budismo: "Use Thanissaro Bhikkhu or Bhikkhu Bodhi translations for Pali canon texts.",
    hinduismo: "Use Eknath Easwaran or Swami Prabhupada translations for Bhagavad Gita.",
  },
  es: {
    catolico: "Use Reina-Valera 1960 for Bible texts.",
    evangelico: "Use Reina-Valera 1960 or Nueva Versión Internacional (NVI) for Bible texts.",
    islamico: "Use the translation by Julio Cortés for Quran texts.",
  },
  fr: {
    catolico: "Use Louis Segond 1910 or Bible de Jérusalem for Bible texts.",
    evangelico: "Use Louis Segond 1910 for Bible texts.",
    islamico: "Use Muhammad Hamidullah translation for Quran texts.",
  },
  de: {
    catolico: "Use Luther Bibel 2017 for Bible texts.",
    evangelico: "Use Luther Bibel 2017 or Elberfelder Bibel for Bible texts.",
  },
  it: {
    catolico: "Use CEI (Conferenza Episcopale Italiana) for Bible texts.",
    evangelico: "Use Nuova Riveduta or Nuova Diodati for Bible texts.",
  },
  ar: {
    islamico: "Use the original Arabic Quran text as-is, it is already in Arabic.",
    catolico: "Use Van Dyck Arabic Bible (الكتاب المقدس) for Bible texts.",
  },
  ru: {
    catolico: "Use Synodal Translation (Синодальный перевод) for Bible texts.",
    evangelico: "Use Synodal Translation (Синодальный перевод) for Bible texts.",
  },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { content, targetLang, traditionId } = await req.json();

    if (!content || !targetLang) {
      return new Response(
        JSON.stringify({ error: "content and targetLang are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Don't translate Portuguese
    if (targetLang === "pt-BR") {
      return new Response(
        JSON.stringify({ translated: content }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const langName = languageNames[targetLang] || targetLang;
    const translationHint =
      officialTranslationHints[targetLang]?.[traditionId] || "";

    const systemPrompt = `You are a professional translator specializing in sacred and religious texts.
Translate the following JSON content from Brazilian Portuguese to ${langName}.

CRITICAL RULES:
1. ${translationHint || "Use the most widely recognized official translation for this language when available."}
2. Maintain the EXACT same JSON structure — only translate string values.
3. Do NOT translate JSON keys, numbers, or IDs.
4. For sacred verse texts, use the official recognized translation in ${langName} when you know it. Do NOT do a literal translation if an official version exists.
5. For commentary and descriptions, translate naturally and accurately.
6. For glossary terms, use the standard ${langName} terminology used in religious studies.
7. Return ONLY valid JSON, no explanations or markdown.
8. Preserve all special characters, line breaks, and formatting within strings.`;

    const OPENROUTER_API_KEY = Deno.env.get("OPENROUTER_API_KEY");
    if (!OPENROUTER_API_KEY) {
      throw new Error("OPENROUTER_API_KEY is not configured");
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemma-3n-e4b-it",
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: `Translate this JSON to ${langName}:\n\n${JSON.stringify(content)}`,
            },
          ],
          temperature: 0.1,
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("AI API error:", response.status, errText);
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "rate_limited", message: "Too many requests, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "payment_required", message: "AI credits exhausted. Please add credits in Settings → Workspace → Usage." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      return new Response(
        JSON.stringify({ error: "Translation service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const rawContent = data.choices?.[0]?.message?.content || "";

    // Extract JSON from response (might be wrapped in markdown code blocks)
    let jsonStr = rawContent;
    const jsonMatch = rawContent.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
    }

    try {
      const translated = JSON.parse(jsonStr);
      return new Response(
        JSON.stringify({ translated }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } catch {
      console.error("Failed to parse translated JSON:", jsonStr.substring(0, 200));
      return new Response(
        JSON.stringify({ error: "Failed to parse translation" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  } catch (e) {
    console.error("translate-library error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
