import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, MessageCircle, Heart, Sparkles } from "lucide-react";
import { traditions, dailyWords } from "@/data/traditions";

const TraditionPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tradition = traditions.find((t) => t.id === id);
  const word = dailyWords.find((w) => w.tradition === id);

  if (!tradition) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Tradição não encontrada.</p>
      </div>
    );
  }

  const isExplore = id === "explorar";

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-block text-6xl">{tradition.icon}</span>
          <h1 className="mb-2 font-display text-4xl font-bold text-foreground">
            {tradition.name}
          </h1>
          <p className="text-muted-foreground">{tradition.description}</p>
          {isExplore && (
            <p className="mt-3 text-sm text-primary italic">
              Modo neutro — respostas acadêmicas, sem julgamento.
            </p>
          )}
        </motion.div>

        {/* Daily word for this tradition */}
        {word && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 rounded-xl border border-border card-gradient p-6"
          >
            <div className="mb-3 flex items-center gap-2 text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-widest">Ensinamento</span>
            </div>
            <blockquote className="mb-3 font-display text-lg italic text-foreground">
              "{word.text}"
            </blockquote>
            <cite className="text-sm text-muted-foreground not-italic">— {word.source}</cite>
          </motion.div>
        )}

        {/* Actions */}
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: BookOpen, label: "Biblioteca", desc: "Textos sagrados e comentários", disabled: true },
            { icon: MessageCircle, label: "Perguntar à IA", desc: "Converse com base nas fontes", disabled: true },
            { icon: Heart, label: "Apoio Emocional", desc: "Mensagem de esperança + CVV 188", disabled: false },
          ].map((action, i) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              disabled={action.disabled}
              onClick={() => {
                if (action.label === "Apoio Emocional") navigate("/crise");
              }}
              className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 text-left transition-colors hover:border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <action.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{action.label}</h3>
                <p className="text-xs text-muted-foreground">{action.desc}</p>
                {action.disabled && <p className="mt-1 text-[10px] text-muted-foreground/60">Em breve</p>}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraditionPage;
