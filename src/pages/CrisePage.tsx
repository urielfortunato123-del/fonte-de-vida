import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Heart } from "lucide-react";

const emergencyContacts = [
  { name: "CVV – Centro de Valorização da Vida", number: "188", desc: "24h, gratuito" },
  { name: "SAMU", number: "192", desc: "Emergência médica" },
  { name: "Polícia Militar", number: "190", desc: "Emergência" },
];

const CrisePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <Heart className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse-gold" />
          <h1 className="mb-3 font-display text-3xl font-bold text-foreground">
            Você não está sozinho
          </h1>
          <p className="text-muted-foreground">
            Se você está passando por um momento difícil, saiba que existem pessoas prontas para te ouvir.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-6"
        >
          <blockquote className="font-display text-lg italic text-foreground">
            "Mesmo na escuridão mais profunda, existe uma luz que nunca se apaga — ela está dentro de você."
          </blockquote>
        </motion.div>

        <div className="space-y-3">
          {emergencyContacts.map((c, i) => (
            <motion.a
              key={c.number}
              href={`tel:${c.number}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{c.name}</h3>
                <p className="text-sm text-primary font-semibold">{c.number}</p>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center text-xs text-muted-foreground"
        >
          Este app não substitui atendimento profissional. Procure ajuda especializada quando necessário.
        </motion.p>
      </div>
    </div>
  );
};

export default CrisePage;
