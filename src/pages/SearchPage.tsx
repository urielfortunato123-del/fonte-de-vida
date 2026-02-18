import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { library } from "@/data/library";
import { traditions } from "@/data/traditions";

interface SearchResult {
  type: "verse" | "glossary";
  traditionId: string;
  traditionName: string;
  traditionIcon: string;
  workName?: string;
  workId?: string;
  chapterName?: string;
  chapterId?: string;
  chapterNumber?: number;
  verseNumber?: number;
  verseText?: string;
  term?: string;
  definition?: string;
}

const SearchPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [selectedTraditions, setSelectedTraditions] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<"all" | "verses" | "glossary">("all");

  const toggleTradition = (id: string) => {
    setSelectedTraditions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 3) return [];

    const found: SearchResult[] = [];

    for (const tLib of library) {
      if (selectedTraditions.size > 0 && !selectedTraditions.has(tLib.traditionId)) continue;
      const tradition = traditions.find((trad) => trad.id === tLib.traditionId);
      if (!tradition) continue;

      if (activeTab !== "verses") {
        for (const entry of tLib.glossary) {
          if (entry.term.toLowerCase().includes(q) || entry.definition.toLowerCase().includes(q)) {
            found.push({
              type: "glossary",
              traditionId: tLib.traditionId,
              traditionName: tradition.name,
              traditionIcon: tradition.icon,
              term: entry.term,
              definition: entry.definition,
            });
          }
        }
      }

      if (activeTab !== "glossary") {
        for (const work of tLib.works) {
          for (const chapter of work.chapters) {
            for (const verse of chapter.verses) {
              if (verse.text.toLowerCase().includes(q)) {
                found.push({
                  type: "verse",
                  traditionId: tLib.traditionId,
                  traditionName: tradition.name,
                  traditionIcon: tradition.icon,
                  workName: work.name,
                  workId: work.id,
                  chapterName: chapter.name,
                  chapterId: chapter.id,
                  chapterNumber: chapter.number,
                  verseNumber: verse.number,
                  verseText: verse.text,
                });
              }
            }
          }
        }
        if (found.length >= 100) break;
      }
    }

    return found;
  }, [query, selectedTraditions, activeTab]);

  const highlightMatch = (text: string) => {
    const q = query.trim();
    if (q.length < 3) return text;
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-primary/30 text-foreground rounded-sm px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("nav.home")}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            🔍 {t("search.title")}
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder={t("search.placeholder")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {traditions.map((trad) => (
              <button
                key={trad.id}
                onClick={() => toggleTradition(trad.id)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedTraditions.has(trad.id)
                    ? "border-primary bg-primary/20 text-primary"
                    : "border-border bg-card/50 text-muted-foreground hover:border-primary/30"
                }`}
              >
                <span>{trad.icon}</span>
                {t(`traditions.${trad.id}`)}
              </button>
            ))}
            {selectedTraditions.size > 0 && (
              <button
                onClick={() => setSelectedTraditions(new Set())}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("search.clear_filters")}
              </button>
            )}
          </div>
          <div className="mt-3 flex gap-1">
            {(["all", "verses", "glossary"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-card/80"
                }`}
              >
                {tab === "all" ? t("search.all") : tab === "verses" ? `📖 ${t("search.verses")}` : `📚 ${t("search.glossary")}`}
              </button>
            ))}
          </div>
          {query.trim().length > 0 && query.trim().length < 3 && (
            <p className="mt-2 text-xs text-muted-foreground">
              {t("search.min_chars")}
            </p>
          )}
          {query.trim().length >= 3 && (
            <p className="mt-2 text-xs text-muted-foreground">
              {results.length >= 100
                ? t("search.results_100")
                : t(results.length === 1 ? "search.results_count" : "search.results_count_plural", { count: results.length })}
            </p>
          )}
        </motion.div>

        <div className="space-y-3">
          {results.map((r, i) => (
            <motion.div
              key={`${r.type}-${r.traditionId}-${r.workId || ""}-${r.chapterId || ""}-${r.verseNumber || ""}-${r.term || ""}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.02, 0.5) }}
              onClick={() =>
                r.type === "verse" && r.workId && r.chapterId
                  ? navigate(`/library/${r.traditionId}/${r.workId}/${r.chapterId}`)
                  : undefined
              }
              className={`rounded-xl border border-border bg-card/50 p-4 transition-colors ${
                r.type === "verse" ? "cursor-pointer hover:border-primary/30" : ""
              }`}
            >
              {r.type === "verse" ? (
                <>
                  <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{r.traditionIcon}</span>
                    <span className="font-medium">{r.traditionName}</span>
                    <span>·</span>
                    <span>{r.workName}</span>
                    <span>·</span>
                    <span>
                      {r.chapterName} {r.chapterNumber}:{r.verseNumber}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {highlightMatch(r.verseText!)}
                  </p>
                </>
              ) : (
                <>
                  <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{r.traditionIcon}</span>
                    <span className="font-medium">{r.traditionName}</span>
                    <span>·</span>
                    <span className="text-primary font-medium">📚 {t("search.glossary")}</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-1">
                    {highlightMatch(r.term!)}
                  </p>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    {highlightMatch(r.definition!)}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
