import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowLeft, BookOpen, MessageCircle, Heart, Sparkles, Loader2 } from "lucide-react";
import { traditions, dailyWords } from "@/data/traditions";
import { useTranslatedDaily } from "@/hooks/useTranslatedLibrary";

const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

const TraditionPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const tradition = traditions.find((trad) => trad.id === id);

  // Get the daily word for this tradition
  const traditionWords = dailyWords.filter((w) => w.tradition === id);
  const dayIndex = getDayOfYear();
  const wordIndex = traditionWords.length > 0 ? dayIndex % traditionWords.length : 0;
  
  // Find the index in the original array for the hook
  const originalIndex = traditionWords.length > 0 
    ? dailyWords.indexOf(traditionWords[wordIndex]) 
    : 0;
  
  const { item: word, isTranslating } = useTranslatedDaily(dailyWords, originalIndex);

  if (!tradition) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">{t("tradition_page.not_found")}</p>
      </div>
    );
  }

  const isExplore = id === "explorar";

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("nav.back")}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-block text-6xl">{tradition.icon}</span>
          <h1 className="mb-2 font-display text-4xl font-bold text-foreground">
            {t(`traditions.${tradition.id}`)}
          </h1>
          <p className="text-muted-foreground">{t(`traditions.${tradition.id}_desc`)}</p>
          {isExplore && (
            <p className="mt-3 text-sm text-primary italic">
              {t("tradition_page.neutral_mode")}
            </p>
          )}
        </motion.div>

        {word && word.tradition === id && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 rounded-xl border border-border card-gradient p-6"
          >
            <div className="mb-3 flex items-center gap-2 text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-widest">{t("tradition_page.teaching")}</span>
              {isTranslating && <Loader2 className="h-3 w-3 animate-spin" />}
            </div>
            <blockquote className="mb-3 font-display text-lg italic text-foreground">
              "{word.text}"
            </blockquote>
            <cite className="text-sm text-muted-foreground not-italic">— {word.source}</cite>
          </motion.div>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: BookOpen, label: t("tradition_page.library"), desc: t("tradition_page.library_desc"), disabled: false, route: `/library/${id}` },
            { icon: MessageCircle, label: t("tradition_page.ask_ai"), desc: t("tradition_page.ask_ai_desc"), disabled: false, route: `/chat/${id}` },
            { icon: Heart, label: t("tradition_page.emotional_support"), desc: t("tradition_page.emotional_support_desc"), disabled: false, route: "/crise" },
          ].map((action, i) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              disabled={action.disabled}
              onClick={() => {
                if (action.route) navigate(action.route);
              }}
              className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 text-left transition-colors hover:border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <action.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{action.label}</h3>
                <p className="text-xs text-muted-foreground">{action.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraditionPage;
