import { motion } from "framer-motion";
import { BookOpen, MessageCircle, Heart, GitCompareArrows } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Biblioteca Espiritual", desc: "Textos sagrados de cada tradição" },
  { icon: MessageCircle, title: "IA Conversacional", desc: "Pergunte e receba respostas com fontes" },
  { icon: GitCompareArrows, title: "Comparar Religiões", desc: "Veja visões diferentes sem juízo" },
  { icon: Heart, title: "Modo Crise", desc: "Apoio emocional e contatos de ajuda" },
];

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
          className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card/50 p-5 text-center transition-colors hover:border-primary/30"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <f.icon className="h-5 w-5 text-primary" />
          </div>
          <h4 className="font-display text-sm font-semibold text-foreground">{f.title}</h4>
          <p className="text-xs text-muted-foreground">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
