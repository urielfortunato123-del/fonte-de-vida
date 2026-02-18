import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, ScrollText, Loader2 } from "lucide-react";
import { traditions } from "@/data/traditions";
import { useTranslatedLibrary } from "@/hooks/useTranslatedLibrary";

const WorkPage = () => {
  const { traditionId, workId } = useParams<{ traditionId: string; workId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const tradition = traditions.find((trad) => trad.id === traditionId);
  const { library: lib, isTranslating } = useTranslatedLibrary(traditionId || "");
  const work = lib?.works.find((w) => w.id === workId);

  if (!tradition || !work) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">{t("library_page.not_found")}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(`/library/${traditionId}`)}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("library_page.title")}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2">
            <p className="text-xs text-primary uppercase tracking-widest mb-1">{tradition.icon} {t(`traditions.${tradition.id}`)}</p>
            {isTranslating && <Loader2 className="h-3 w-3 animate-spin text-primary" />}
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-1">{work.name}</h1>
          <p className="text-sm text-muted-foreground">{work.description}</p>
        </motion.div>

        <div className="space-y-3">
          {work.chapters.map((chapter, i) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link
                to={`/library/${traditionId}/${workId}/${chapter.id}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ScrollText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {chapter.number}. {chapter.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground/60 mt-1">
                    {chapter.verses.length} {chapter.verses.length === 1 ? t("library_page.chapter") : t("library_page.chapters")}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
