import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { library } from "@/data/library";
import { traditions } from "@/data/traditions";

interface SearchResult {
  traditionId: string;
  traditionName: string;
  traditionIcon: string;
  workName: string;
  workId: string;
  chapterName: string;
  chapterId: string;
  chapterNumber: number;
  verseNumber: number;
  verseText: string;
}

const SearchPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedTraditions, setSelectedTraditions] = useState<Set<string>>(new Set());

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
      const tradition = traditions.find((t) => t.id === tLib.traditionId);
      if (!tradition) continue;

      for (const work of tLib.works) {
        for (const chapter of work.chapters) {
          for (const verse of chapter.verses) {
            if (verse.text.toLowerCase().includes(q)) {
              found.push({
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

    return found;
  }, [query, selectedTraditions]);

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
          Início
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            🔍 Busca Global
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Pesquisar versículos em todas as tradições..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {traditions.map((t) => (
              <button
                key={t.id}
                onClick={() => toggleTradition(t.id)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedTraditions.has(t.id)
                    ? "border-primary bg-primary/20 text-primary"
                    : "border-border bg-card/50 text-muted-foreground hover:border-primary/30"
                }`}
              >
                <span>{t.icon}</span>
                {t.name}
              </button>
            ))}
            {selectedTraditions.size > 0 && (
              <button
                onClick={() => setSelectedTraditions(new Set())}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Limpar filtros
              </button>
            )}
          </div>
          {query.trim().length > 0 && query.trim().length < 3 && (
            <p className="mt-2 text-xs text-muted-foreground">
              Digite pelo menos 3 caracteres para buscar.
            </p>
          )}
          {query.trim().length >= 3 && (
            <p className="mt-2 text-xs text-muted-foreground">
              {results.length >= 100
                ? "100+ resultados encontrados (mostrando os primeiros 100)"
                : `${results.length} resultado${results.length !== 1 ? "s" : ""} encontrado${results.length !== 1 ? "s" : ""}`}
            </p>
          )}
        </motion.div>

        <div className="space-y-3">
          {results.map((r, i) => (
            <motion.div
              key={`${r.traditionId}-${r.workId}-${r.chapterId}-${r.verseNumber}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.02, 0.5) }}
              onClick={() =>
                navigate(`/library/${r.traditionId}/${r.workId}/${r.chapterId}`)
              }
              className="cursor-pointer rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/30"
            >
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
                {highlightMatch(r.verseText)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
