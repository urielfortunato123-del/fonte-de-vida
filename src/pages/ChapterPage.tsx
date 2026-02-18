import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, Info } from "lucide-react";
import { traditions } from "@/data/traditions";
import { getLibraryByTradition } from "@/data/library";

const ChapterPage = () => {
  const { traditionId, workId, chapterId } = useParams<{
    traditionId: string;
    workId: string;
    chapterId: string;
  }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const tradition = traditions.find((trad) => trad.id === traditionId);
  const lib = getLibraryByTradition(traditionId || "");
  const work = lib?.works.find((w) => w.id === workId);
  const chapter = work?.chapters.find((c) => c.id === chapterId);

  if (!tradition || !work || !chapter) {
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
          onClick={() => navigate(`/library/${traditionId}/${workId}`)}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {work.name}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-xs text-primary uppercase tracking-widest mb-1">
            {tradition.icon} {t(`traditions.${tradition.id}`)} · {work.name}
          </p>
          <h1 className="font-display text-3xl font-bold text-foreground">
            {chapter.number}. {chapter.name}
          </h1>
        </motion.div>

        {chapter.commentary && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8 flex gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5"
          >
            <Info className="h-4 w-4 shrink-0 text-primary mt-0.5" />
            <p className="text-sm text-foreground/80 italic leading-relaxed">
              {chapter.commentary}
            </p>
          </motion.div>
        )}

        <div className="space-y-1">
          {chapter.verses.map((verse, i) => (
            <motion.div
              key={verse.number}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.03 }}
              className="group flex gap-3 rounded-lg p-3 transition-colors hover:bg-card/50"
            >
              <span className="shrink-0 mt-0.5 text-xs font-semibold text-primary/60 w-6 text-right">
                {verse.number}
              </span>
              <p className="text-sm text-foreground/90 leading-relaxed font-body">
                {verse.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
