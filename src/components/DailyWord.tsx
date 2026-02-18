import { motion } from "framer-motion";
import { dailyWords } from "@/data/traditions";
import { Sparkles } from "lucide-react";

const DailyWord = () => {
  const today = new Date().getDay();
  const word = dailyWords[today % dailyWords.length];

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
          <div className="mb-4 flex items-center gap-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-widest">
              Palavra do Dia
            </span>
          </div>
          <blockquote className="mb-4 font-display text-xl font-medium italic leading-relaxed text-foreground md:text-2xl">
            "{word.text}"
          </blockquote>
          <cite className="text-sm text-muted-foreground not-italic">
            — {word.source}
          </cite>
        </div>
      </div>
    </motion.section>
  );
};

export default DailyWord;
