import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { dailyWords, dailyMeditations } from "@/data/traditions";
import { Sparkles, Brain } from "lucide-react";

const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

const DailyWord = () => {
  const [mode, setMode] = useState<"word" | "meditation">("word");
  const { t } = useTranslation();
  const dayIndex = getDayOfYear();

  const word = dailyWords[dayIndex % dailyWords.length];
  const meditation = dailyMeditations[dayIndex % dailyMeditations.length];

  const current = mode === "word" ? word : meditation;
  const label = mode === "word" ? t("daily.word_of_day") : t("daily.meditation_of_day");
  const Icon = mode === "word" ? Sparkles : Brain;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="mx-auto max-w-2xl"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border card-gradient p-8">
        <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary">
              <Icon className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-widest">
                {label}
              </span>
            </div>
            <div className="flex gap-1 rounded-lg border border-border bg-background/50 p-0.5">
              <button
                onClick={() => setMode("word")}
                className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  mode === "word"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Sparkles className="h-3 w-3" />
                {t("daily.word")}
              </button>
              <button
                onClick={() => setMode("meditation")}
                className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  mode === "meditation"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Brain className="h-3 w-3" />
                {t("daily.meditation")}
              </button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="mb-4 font-display text-xl font-medium italic leading-relaxed text-foreground md:text-2xl">
                "{current.text}"
              </blockquote>
              <cite className="text-sm text-muted-foreground not-italic">
                — {current.source}
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default DailyWord;
