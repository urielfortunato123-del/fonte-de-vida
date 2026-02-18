import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, ChevronLeft } from "lucide-react";
import { traditions } from "@/data/traditions";

interface MeditationVideo {
  label: string;
  videoId: string;
}

const meditationVideos: Record<string, MeditationVideo[]> = {
  catolico: [
    { label: "Meditação com Oração", videoId: "5kKLxLnCbq8" },
    { label: "Terço Meditado", videoId: "QJ5AxS_yFkU" },
    { label: "Lectio Divina", videoId: "r1qMm_bGYjc" },
    { label: "Adoração Eucarística", videoId: "3KGBlpmtfXo" },
  ],
  evangelico: [
    { label: "Meditação Bíblica", videoId: "ZELVhME-Gk0" },
    { label: "Louvor e Adoração", videoId: "FDTf5BOUBkE" },
    { label: "Devocional Diário", videoId: "bE0V4XYnUjM" },
    { label: "Oração Guiada", videoId: "7i-xFqGgSuQ" },
  ],
  islamico: [
    { label: "Recitação do Alcorão", videoId: "V4yx5A0esHY" },
    { label: "Dhikr Meditativo", videoId: "QmU1y7USQMU" },
    { label: "Meditação Sufi", videoId: "3x0r_7VyfEk" },
    { label: "Relaxamento Islâmico", videoId: "XAafMPIgxtg" },
  ],
  judaismo: [
    { label: "Hitbodedut", videoId: "vC5E1gMi0Mg" },
    { label: "Salmos em Hebraico", videoId: "H7bD3E3g1rg" },
    { label: "Meditação Cabalística", videoId: "4R0vGS7QUSY" },
    { label: "Música de Shabbat", videoId: "JxdDa0k97hg" },
  ],
  espirita: [
    { label: "Passe e Equilíbrio", videoId: "f5xZnE5Gp7c" },
    { label: "Meditação Kardecista", videoId: "0H0LJhSn8Kk" },
    { label: "Prece Guiada", videoId: "q74r3fXGIqk" },
    { label: "Evangelho no Lar", videoId: "8wCRzr8w1fI" },
  ],
  umbanda: [
    { label: "Pontos Cantados", videoId: "6-bJnNIsqkk" },
    { label: "Conexão com Orixás", videoId: "jY3aKo7FQPY" },
    { label: "Natureza e Harmonia", videoId: "x7SClMYGr28" },
    { label: "Sons de Atabaque", videoId: "G1h8J7PqSbU" },
  ],
  budismo: [
    { label: "Mindfulness Guiada", videoId: "inpok4MKVLM" },
    { label: "Vipassana", videoId: "sN6pRj1Lolc" },
    { label: "Metta (Amor-Bondade)", videoId: "sz7cpV7ERsM" },
    { label: "Zen e Respiração", videoId: "SEfs5TJZ6Nk" },
  ],
  hinduismo: [
    { label: "Mantra OM", videoId: "aEqlQvczMJQ" },
    { label: "Yoga Nidra", videoId: "M0u9GST_j3s" },
    { label: "Bhajan Devocional", videoId: "2bosouX_d8Y" },
    { label: "Kundalini e Chakras", videoId: "EwQkfoKxRvo" },
  ],
  explorar: [
    { label: "Para Iniciantes", videoId: "inpok4MKVLM" },
    { label: "Para Ansiedade", videoId: "O-6f5wQXSu8" },
    { label: "Para Dormir", videoId: "aEqlQvczMJQ" },
    { label: "Gratidão e Bem-Estar", videoId: "sz7cpV7ERsM" },
  ],
};

const MeditationPage = () => {
  const navigate = useNavigate();
  const [selectedTradition, setSelectedTradition] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<MeditationVideo | null>(null);

  const tradition = traditions.find((t) => t.id === selectedTradition);
  const videos = selectedTradition ? meditationVideos[selectedTradition] || meditationVideos.explorar : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => {
            if (selectedVideo) setSelectedVideo(null);
            else if (selectedTradition) setSelectedTradition(null);
            else navigate("/");
          }}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {selectedVideo ? "Escolher tema" : selectedTradition ? "Escolher tradição" : "Início"}
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            🧘 Meditação
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {!selectedTradition
              ? "Escolha uma tradição para encontrar meditações guiadas."
              : !selectedVideo
              ? `Escolha um tema — ${tradition?.icon} ${tradition?.name}`
              : `${tradition?.icon} ${selectedVideo.label}`}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Step 1: Traditions */}
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
                      {meditationVideos[t.id]?.length || 0} meditações
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Step 2: Themes */}
          {selectedTradition && !selectedVideo && (
            <motion.div
              key="themes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-3"
            >
              {videos.map((v, i) => (
                <motion.button
                  key={v.videoId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setSelectedVideo(v)}
                  className="flex w-full items-center gap-4 rounded-xl border border-border bg-card/50 p-4 text-left transition-all hover:border-primary/30 hover:bg-card/80 group"
                >
                  <div className="relative w-28 shrink-0 overflow-hidden rounded-lg aspect-video bg-muted">
                    <img
                      src={`https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`}
                      alt={v.label}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                      <Play className="h-6 w-6 text-white fill-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{v.label}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {tradition?.icon} {tradition?.name}
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Step 3: Embedded Player */}
          {selectedVideo && (
            <motion.div
              key="player"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-black aspect-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                  title={selectedVideo.label}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {videos
                  .filter((v) => v.videoId !== selectedVideo.videoId)
                  .map((v) => (
                    <button
                      key={v.videoId}
                      onClick={() => setSelectedVideo(v)}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-3 text-left transition-all hover:border-primary/30 group"
                    >
                      <div className="relative w-16 shrink-0 overflow-hidden rounded-lg aspect-video bg-muted">
                        <img
                          src={`https://img.youtube.com/vi/${v.videoId}/default.jpg`}
                          alt={v.label}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Play className="h-3 w-3 text-white fill-white" />
                        </div>
                      </div>
                      <span className="text-xs font-medium text-foreground/80 line-clamp-2">{v.label}</span>
                    </button>
                  ))}
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
