import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, MessageCircle, Heart, GitCompareArrows, Brain } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Biblioteca Espiritual", desc: "Textos sagrados de cada tradição", route: "/biblioteca" },
  { icon: MessageCircle, title: "IA Conversacional", desc: "Pergunte e receba respostas com fontes", route: "/chat/explorar" },
  { icon: Brain, title: "Meditação", desc: "Meditações guiadas por tradição", route: "/meditacao" },
  { icon: GitCompareArrows, title: "Comparar Religiões", desc: "Veja visões diferentes sem juízo", route: "/comparar" },
  { icon: Heart, title: "Modo Crise", desc: "Apoio emocional e contatos de ajuda", route: "/crise" },
];

const FeatureGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {features.map((f, i) => (
        <motion.button
          key={f.title}
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
