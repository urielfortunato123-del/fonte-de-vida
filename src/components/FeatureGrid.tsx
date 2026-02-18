import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BookOpen, MessageCircle, Heart, GitCompareArrows, Brain } from "lucide-react";

const FeatureGrid = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const features = [
    { icon: BookOpen, title: t("features.library"), desc: t("features.library_desc"), route: "/biblioteca" },
    { icon: MessageCircle, title: t("features.chat"), desc: t("features.chat_desc"), route: "/chat/explorar" },
    { icon: Brain, title: t("features.meditation"), desc: t("features.meditation_desc"), route: "/meditacao" },
    { icon: GitCompareArrows, title: t("features.compare"), desc: t("features.compare_desc"), route: "/comparar" },
    { icon: Heart, title: t("features.crisis"), desc: t("features.crisis_desc"), route: "/crise" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {features.map((f, i) => (
        <motion.button
          key={f.route}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
          onClick={() => f.route && navigate(f.route)}
          disabled={!f.route}
          className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card/50 p-5 text-center transition-colors hover:border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <f.icon className="h-5 w-5 text-primary" />
          </div>
          <h4 className="font-display text-sm font-semibold text-foreground">{f.title}</h4>
          <p className="text-xs text-muted-foreground">{f.desc}</p>
        </motion.button>
      ))}
    </div>
  );
};

export default FeatureGrid;
