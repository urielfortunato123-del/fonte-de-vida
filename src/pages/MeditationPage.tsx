import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, ExternalLink } from "lucide-react";
import { traditions } from "@/data/traditions";

interface YouTubeSearch {
  query: string;
  label: string;
}

const meditationSearches: Record<string, YouTubeSearch[]> = {
  catolico: [
    { query: "meditação+católica+guiada+oração", label: "Meditação com Oração" },
    { query: "terço+meditado+católico", label: "Terço Meditado" },
    { query: "lectio+divina+meditação", label: "Lectio Divina" },
    { query: "adoração+eucarística+música", label: "Adoração Eucarística" },
  ],
  evangelico: [
    { query: "meditação+bíblica+evangélica+guiada", label: "Meditação Bíblica" },
    { query: "louvor+adoração+acalmar+alma", label: "Louvor e Adoração" },
    { query: "devocional+diário+evangélico", label: "Devocional Diário" },
    { query: "oração+guiada+evangélica+paz", label: "Oração Guiada" },
  ],
  islamico: [
    { query: "recitação+alcorão+meditação+calma", label: "Recitação do Alcorão" },
    { query: "dhikr+meditação+islâmica", label: "Dhikr Meditativo" },
    { query: "sufi+meditation+music+peaceful", label: "Meditação Sufi" },
    { query: "islamic+relaxation+quran+recitation", label: "Relaxamento Islâmico" },
  ],
  judaismo: [
    { query: "meditação+judaica+hitbodedut", label: "Hitbodedut" },
    { query: "salmos+hebraico+meditação", label: "Salmos em Hebraico" },
    { query: "jewish+meditation+guided+kabbalah", label: "Meditação Cabalística" },
    { query: "shabbat+music+relaxation+jewish", label: "Música de Shabbat" },
  ],
  espirita: [
    { query: "meditação+espírita+passe+equilíbrio", label: "Passe e Equilíbrio" },
    { query: "meditação+espírita+allan+kardec", label: "Meditação Kardecista" },
    { query: "prece+espírita+guiada+paz", label: "Prece Guiada" },
    { query: "evangelho+lar+meditação+espírita", label: "Evangelho no Lar" },
  ],
  umbanda: [
    { query: "pontos+cantados+umbanda+meditação", label: "Pontos Cantados" },
    { query: "meditação+umbanda+orixás+natureza", label: "Conexão com Orixás" },
    { query: "umbanda+relaxamento+natureza+guiada", label: "Natureza e Harmonia" },
    { query: "som+atabaque+meditação+umbanda", label: "Sons de Atabaque" },
  ],
  budismo: [
    { query: "meditação+budista+guiada+mindfulness+português", label: "Mindfulness Guiada" },
    { query: "meditação+vipassana+guiada", label: "Vipassana" },
    { query: "meditação+metta+amor+bondade", label: "Metta (Amor-Bondade)" },
    { query: "meditação+zen+silêncio+respiração", label: "Zen e Respiração" },
  ],
  hinduismo: [
    { query: "meditação+hindu+mantra+om+guiada", label: "Mantra OM" },
    { query: "yoga+nidra+guiada+português", label: "Yoga Nidra" },
    { query: "bhajan+krishna+meditação", label: "Bhajan Devocional" },
    { query: "kundalini+meditation+guided+chakra", label: "Kundalini e Chakras" },
  ],
  explorar: [
    { query: "meditação+guiada+iniciante+português", label: "Para Iniciantes" },
    { query: "meditação+ansiedade+relaxamento+guiada", label: "Para Ansiedade" },
    { query: "meditação+dormir+relaxar+português", label: "Para Dormir" },
    { query: "meditação+gratidão+bem+estar+guiada", label: "Gratidão e Bem-Estar" },
  ],
};

const MeditationPage = () => {
  const navigate = useNavigate();
  const [selectedTradition, setSelectedTradition] = useState<string | null>(null);
  const [selectedSearch, setSelectedSearch] = useState<YouTubeSearch | null>(null);

  const tradition = traditions.find((t) => t.id === selectedTradition);
  const searches = selectedTradition ? meditationSearches[selectedTradition] || meditationSearches.explorar : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => {
            if (selectedSearch) setSelectedSearch(null);
            else if (selectedTradition) setSelectedTradition(null);
            else navigate("/");
          }}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {selectedSearch ? "Escolher tema" : selectedTradition ? "Escolher tradição" : "Início"}
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            🧘 Meditação
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {!selectedTradition
              ? "Escolha uma tradição para encontrar meditações guiadas."
              : !selectedSearch
              ? `Escolha um tema de meditação ${tradition?.name ? `na tradição ${tradition.name}` : ""}.`
              : `Meditação: ${selectedSearch.label}`}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Step 1: Select Tradition */}
          {!selectedTradition && (
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
                      {meditationSearches[t.id]?.length || 0} temas disponíveis
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Step 2: Select Theme */}
          {selectedTradition && !selectedSearch && (
            <motion.div
              key="themes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-3"
            >
              {searches.map((s, i) => (
                <motion.button
                  key={s.query}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setSelectedSearch(s)}
                  className="flex w-full items-center gap-4 rounded-xl border border-border bg-card/50 p-5 text-left transition-all hover:border-primary/30 hover:bg-card/80"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Play className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{s.label}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {tradition?.icon} {tradition?.name}
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Step 3: YouTube Player */}
          {selectedSearch && (
            <motion.div
              key="player"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-black aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed?listType=search&list=${selectedSearch.query}`}
                  title={selectedSearch.label}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://www.youtube.com/results?search_query=${selectedSearch.query}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver mais no YouTube
                </a>
                <button
                  onClick={() => setSelectedSearch(null)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Escolher outro tema
                </button>
              </div>

              <p className="text-center text-[10px] text-muted-foreground/40">
                Vídeos do YouTube. O conteúdo é de responsabilidade dos criadores originais.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MeditationPage;
