import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import type { TraditionLibrary, Work, Chapter } from "@/data/library";
import { getLibraryByTradition } from "@/data/library";

const CACHE_PREFIX = "lib_translation_";
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

interface CachedTranslation {
  data: any;
  timestamp: number;
  lang: string;
}

function getCacheKey(traditionId: string, lang: string, scope: string): string {
  return `${CACHE_PREFIX}${traditionId}_${lang}_${scope}`;
}

function getFromCache(key: string): any | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const cached: CachedTranslation = JSON.parse(raw);
    if (Date.now() - cached.timestamp > CACHE_TTL) {
      localStorage.removeItem(key);
      return null;
    }
    return cached.data;
  } catch {
    return null;
  }
}

function setToCache(key: string, data: any, lang: string): void {
  try {
    const cached: CachedTranslation = { data, timestamp: Date.now(), lang };
    localStorage.setItem(key, JSON.stringify(cached));
  } catch {
    // localStorage full, silently fail
  }
}

async function translateContent(
  content: any,
  targetLang: string,
  traditionId: string
): Promise<any> {
  const { data, error } = await supabase.functions.invoke("translate-library", {
    body: { content, targetLang, traditionId },
  });

  if (error) throw error;
  return data?.translated || content;
}

export function useTranslatedLibrary(traditionId: string) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isPtBR = lang === "pt-BR";
  const baseLib = getLibraryByTradition(traditionId);

  const [library, setLibrary] = useState<TraditionLibrary | undefined>(baseLib);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    if (!baseLib || isPtBR) {
      setLibrary(baseLib);
      return;
    }

    const cacheKey = getCacheKey(traditionId, lang, "full");
    const cached = getFromCache(cacheKey);

    if (cached) {
      setLibrary(cached);
      return;
    }

    // Translate work names, descriptions, and glossary first (fast)
    const translateMeta = async () => {
      setIsTranslating(true);
      try {
        const metaContent = {
          works: baseLib.works.map((w) => ({
            id: w.id,
            name: w.name,
            description: w.description,
            chapters: w.chapters.map((c) => ({
              id: c.id,
              name: c.name,
              number: c.number,
              commentary: c.commentary || "",
            })),
          })),
          glossary: baseLib.glossary,
        };

        const translated = await translateContent(metaContent, lang, traditionId);

        // Merge translated metadata with original verses
        const mergedLib: TraditionLibrary = {
          traditionId,
          works: baseLib.works.map((w, wi) => ({
            ...w,
            name: translated.works?.[wi]?.name || w.name,
            description: translated.works?.[wi]?.description || w.description,
            chapters: w.chapters.map((c, ci) => ({
              ...c,
              name: translated.works?.[wi]?.chapters?.[ci]?.name || c.name,
              commentary: translated.works?.[wi]?.chapters?.[ci]?.commentary || c.commentary,
            })),
          })),
          glossary: translated.glossary || baseLib.glossary,
        };

        setLibrary(mergedLib);
        setToCache(cacheKey, mergedLib, lang);
      } catch (err) {
        console.error("Translation error:", err);
        setLibrary(baseLib); // Fallback to original
      } finally {
        setIsTranslating(false);
      }
    };

    translateMeta();
  }, [traditionId, lang, isPtBR]);

  return { library, isTranslating };
}

export function useTranslatedChapter(
  traditionId: string,
  workId: string,
  chapterId: string
) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isPtBR = lang === "pt-BR";

  const baseLib = getLibraryByTradition(traditionId);
  const baseWork = baseLib?.works.find((w) => w.id === workId);
  const baseChapter = baseWork?.chapters.find((c) => c.id === chapterId);

  const [chapter, setChapter] = useState<Chapter | undefined>(baseChapter);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    if (!baseChapter || isPtBR) {
      setChapter(baseChapter);
      return;
    }

    const cacheKey = getCacheKey(traditionId, lang, `chapter_${chapterId}`);
    const cached = getFromCache(cacheKey);

    if (cached) {
      setChapter(cached);
      return;
    }

    const translateChap = async () => {
      setIsTranslating(true);
      try {
        const chapterContent = {
          name: baseChapter.name,
          commentary: baseChapter.commentary || "",
          verses: baseChapter.verses.map((v) => ({
            number: v.number,
            text: v.text,
          })),
        };

        const translated = await translateContent(chapterContent, lang, traditionId);

        const mergedChapter: Chapter = {
          ...baseChapter,
          name: translated.name || baseChapter.name,
          commentary: translated.commentary || baseChapter.commentary,
          verses: baseChapter.verses.map((v, vi) => ({
            ...v,
            text: translated.verses?.[vi]?.text || v.text,
          })),
        };

        setChapter(mergedChapter);
        setToCache(cacheKey, mergedChapter, lang);
      } catch (err) {
        console.error("Chapter translation error:", err);
        setChapter(baseChapter);
      } finally {
        setIsTranslating(false);
      }
    };

    translateChap();
  }, [traditionId, workId, chapterId, lang, isPtBR]);

  return { chapter, work: baseWork, isTranslating };
}

export function useTranslatedDaily(
  items: Array<{ tradition?: string; text: string; source: string }>,
  currentIndex: number
) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isPtBR = lang === "pt-BR";

  const baseItem = items[currentIndex];
  const [translated, setTranslated] = useState(baseItem);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    if (!baseItem || isPtBR) {
      setTranslated(baseItem);
      return;
    }

    const cacheKey = getCacheKey("daily", lang, `item_${currentIndex}`);
    const cached = getFromCache(cacheKey);

    if (cached) {
      setTranslated(cached);
      return;
    }

    const doTranslate = async () => {
      setIsTranslating(true);
      try {
        const content = { text: baseItem.text, source: baseItem.source };
        const result = await translateContent(content, lang, baseItem.tradition || "explorar");
        const merged = { ...baseItem, text: result.text || baseItem.text, source: result.source || baseItem.source };
        setTranslated(merged);
        setToCache(cacheKey, merged, lang);
      } catch {
        setTranslated(baseItem);
      } finally {
        setIsTranslating(false);
      }
    };

    doTranslate();
  }, [currentIndex, lang, isPtBR]);

  return { item: translated, isTranslating };
}
