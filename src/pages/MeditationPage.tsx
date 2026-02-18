import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Youtube, ExternalLink } from "lucide-react";
import { traditions } from "@/data/traditions";

const meditationThemes: Record<string, { label: string; query: string }[]> = {
  catolico: [
    { label: "Meditação com Oração", query: "meditação católica guiada oração" },
    { label: "Terço Meditado", query: "terço meditado católico" },
    { label: "Lectio Divina", query: "lectio divina meditação guiada" },
    { label: "Adoração Eucarística", query: "adoração eucarística música católica" },
  ],
  evangelico: [
    { label: "Meditação Bíblica", query: "meditação bíblica evangélica guiada" },
    { label: "Louvor e Adoração", query: "louvor adoração acalmar alma evangélico" },
    { label: "Devocional Diário", query: "devocional diário evangélico" },
    { label: "Oração Guiada", query: "oração guiada evangélica paz" },
  ],
  islamico: [
    { label: "Recitação do Alcorão", query: "recitação alcorão meditação calma" },
    { label: "Dhikr Meditativo", query: "dhikr meditação islâmica" },
    { label: "Meditação Sufi", query: "sufi meditation music peaceful" },
    { label: "Relaxamento Islâmico", query: "islamic relaxation quran recitation" },
  ],
  judaismo: [
    { label: "Hitbodedut", query: "meditação judaica hitbodedut" },
    { label: "Salmos em Hebraico", query: "salmos hebraico meditação" },
    { label: "Meditação Cabalística", query: "jewish meditation guided kabbalah" },
    { label: "Música de Shabbat", query: "shabbat music relaxation jewish" },
  ],
  espirita: [
    { label: "Passe e Equilíbrio", query: "meditação espírita passe equilíbrio" },
    { label: "Meditação Kardecista", query: "meditação espírita allan kardec" },
    { label: "Prece Guiada", query: "prece espírita guiada paz" },
    { label: "Evangelho no Lar", query: "evangelho lar meditação espírita" },
  ],
  umbanda: [
    { label: "Pontos Cantados", query: "pontos cantados umbanda meditação" },
    { label: "Conexão com Orixás", query: "meditação umbanda orixás natureza" },
    { label: "Natureza e Harmonia", query: "umbanda relaxamento natureza guiada" },
    { label: "Sons de Atabaque", query: "som atabaque meditação umbanda" },
  ],
  budismo: [
    { label: "Mindfulness Guiada", query: "meditação budista guiada mindfulness português" },
    { label: "Vipassana", query: "meditação vipassana guiada" },
    { label: "Metta (Amor-Bondade)", query: "meditação metta amor bondade" },
    { label: "Zen e Respiração", query: "meditação zen silêncio respiração" },
  ],
  hinduismo: [
    { label: "Mantra OM", query: "meditação hindu mantra om guiada" },
    { label: "Yoga Nidra", query: "yoga nidra guiada português" },
    { label: "Bhajan Devocional", query: "bhajan krishna meditação" },
    { label: "Kundalini e Chakras", query: "kundalini meditation guided chakra" },
  ],
  explorar: [
    { label: "Para Iniciantes", query: "meditação guiada iniciante português" },
    { label: "Para Ansiedade", query: "meditação ansiedade relaxamento guiada" },
    { label: "Para Dormir", query: "meditação dormir relaxar português" },
    { label: "Gratidão e Bem-Estar", query: "meditação gratidão bem estar guiada" },
  ],
};

const MeditationPage = () => {
  const navigate = useNavigate();
  const [selectedTradition, setSelectedTradition] = useState<string | null>(null);

  const tradition = traditions.find((t) => t.id === selectedTradition);
  const themes = selectedTradition ? meditationThemes[selectedTradition] || meditationThemes.explorar : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => {
            if (selectedTradition) setSelectedTradition(null);
            else navigate("/");
          }}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {selectedTradition ? "Escolher tradição" : "Início"}
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            🧘 Meditação
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {!selectedTradition
              ? "Escolha uma tradição para encontrar meditações guiadas no YouTube."
              : `Escolha um tema de meditação — ${tradition?.icon} ${tradition?.name}`}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedTradition ? (
            <motion.div
              key="traditions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {traditions.map((t, i) => (
                <motion.button
                  key={t.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedTradition(t.id)}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 text-left transition-all hover:border-primary/30 hover:bg-card/80"
                >
                  <span className="text-3xl">{t.icon}</span>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{t.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {meditationThemes[t.id]?.length || 0} temas disponíveis
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="themes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-3"
            >
              {themes.map((theme, i) => (
                <motion.a
                  key={theme.query}
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(theme.query)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex w-full items-center gap-4 rounded-xl border border-border bg-card/50 p-5 text-left transition-all hover:border-red-500/40 hover:bg-card/80 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                    <Youtube className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-foreground">{theme.label}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {tradition?.icon} {tradition?.name} · Abrir no YouTube
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground/50 shrink-0 group-hover:text-red-500 transition-colors" />
                </motion.a>
              ))}

              <p className="text-center text-[10px] text-muted-foreground/40 pt-4">
                Os vídeos são do YouTube. O conteúdo é de responsabilidade dos criadores originais.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MeditationPage;
