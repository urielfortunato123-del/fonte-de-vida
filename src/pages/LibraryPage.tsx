import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowLeft, BookOpen, BookMarked, Search } from "lucide-react";
import { useState } from "react";
import { traditions } from "@/data/traditions";
import { getLibraryByTradition } from "@/data/library";

const LibraryPage = () => {
  const { traditionId } = useParams<{ traditionId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const tradition = traditions.find((trad) => trad.id === traditionId);
  const lib = getLibraryByTradition(traditionId || "");

  if (!tradition || !lib) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">{t("library_page.not_found")}</p>
      </div>
    );
  }

  const filteredWorks = lib.works.filter(
    (w) =>
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(`/tradition/${traditionId}`)}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t(`traditions.${tradition.id}`)}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="font-display text-3xl font-bold text-foreground">
              {t("library_page.title")}
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            {t("library_page.sacred_texts")} — {t(`traditions.${tradition.id}`)} {tradition.icon}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8"
        >
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder={t("library_page.search_work")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border bg-card/50 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20"
          />
        </motion.div>

        <div className="space-y-3">
          {filteredWorks.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
            >
              <Link
                to={`/library/${traditionId}/${work.id}`}
                className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30 hover:glow-gold"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <BookMarked className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-foreground">{work.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{work.description}</p>
                  <p className="text-[11px] text-muted-foreground/60 mt-2">
                    {work.chapters.length} {work.chapters.length === 1 ? t("library_page.chapter") : t("library_page.chapters")}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {lib.glossary.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">{t("library_page.glossary")}</h2>
            <div className="space-y-2">
              {lib.glossary.map((g) => (
                <div key={g.term} className="rounded-lg border border-border bg-card/30 p-4">
                  <dt className="font-display text-sm font-semibold text-primary">{g.term}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{g.definition}</dd>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
