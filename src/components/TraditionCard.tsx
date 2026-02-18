import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Tradition } from "@/data/traditions";

interface TraditionCardProps {
  tradition: Tradition;
  onClick: (id: string) => void;
  index: number;
}

const TraditionCard = ({ tradition, onClick, index }: TraditionCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onClick(tradition.id)}
      className={`group relative flex flex-col items-center gap-3 rounded-xl border border-border bg-gradient-to-br ${tradition.color} p-6 text-center transition-colors hover:border-primary/40 hover:glow-gold`}
    >
      <span className="text-4xl">{tradition.icon}</span>
      <h3 className="font-display text-lg font-semibold text-foreground">
        {t(`traditions.${tradition.id}`)}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {t(`traditions.${tradition.id}_desc`)}
      </p>
      {tradition.id === "explorar" && (
        <span className="absolute -top-2 -right-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
          New
        </span>
      )}
    </motion.button>
  );
};

export default TraditionCard;
