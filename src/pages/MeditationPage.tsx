import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { traditions } from "@/data/traditions";
import { type SoundType } from "@/lib/ambientSounds";
import MeditationPlayer from "@/components/MeditationPlayer";

interface MeditationSound {
  label: string;
  type: SoundType;
  icon: string;
}

const meditationSounds: Record<string, MeditationSound[]> = {
  catolico: [
    { label: "Sinos da Igreja", type: "bells", icon: "🔔" },
    { label: "Contemplação Silenciosa", type: "wind", icon: "🕊️" },
    { label: "Riacho da Paz", type: "stream", icon: "💧" },
    { label: "Noite de Oração", type: "night", icon: "🌙" },
  ],
  evangelico: [
    { label: "Sinos de Louvor", type: "bells", icon: "🎵" },
    { label: "Chuva de Bênçãos", type: "rain", icon: "🌧️" },
    { label: "Jardim do Espírito", type: "forest", icon: "🌿" },
    { label: "Rio de Água Viva", type: "stream", icon: "🏞️" },
  ],
  islamico: [
    { label: "Vento do Deserto", type: "wind", icon: "🏜️" },
    { label: "Água Corrente", type: "stream", icon: "💦" },
    { label: "Noite de Contemplação", type: "night", icon: "🌙" },
    { label: "Fogueira Meditativa", type: "fire", icon: "🔥" },
  ],
  judaismo: [
    { label: "Sino Tibetano (Shofar)", type: "singing-bowl", icon: "📯" },
    { label: "Mar da Galileia", type: "ocean", icon: "🌊" },
    { label: "Velas de Shabbat", type: "fire", icon: "🕯️" },
    { label: "Noite Estrelada", type: "night", icon: "✡️" },
  ],
  espirita: [
    { label: "Equilíbrio Energético", type: "singing-bowl", icon: "✨" },
    { label: "Chuva Purificadora", type: "rain", icon: "🌧️" },
    { label: "Natureza e Paz", type: "forest", icon: "🌳" },
    { label: "Harmonia Noturna", type: "night", icon: "🌌" },
  ],
  umbanda: [
    { label: "Sons da Natureza", type: "forest", icon: "🌿" },
    { label: "Cachoeira Sagrada", type: "stream", icon: "🌊" },
    { label: "Fogueira dos Orixás", type: "fire", icon: "🔥" },
    { label: "Vento da Mata", type: "wind", icon: "🍃" },
  ],
  budismo: [
    { label: "Sino Tibetano", type: "singing-bowl", icon: "🔔" },
    { label: "Mantra OM", type: "om", icon: "🕉️" },
    { label: "Riacho Zen", type: "stream", icon: "🎋" },
    { label: "Chuva Mindful", type: "rain", icon: "☔" },
  ],
  hinduismo: [
    { label: "Mantra OM", type: "om", icon: "🕉️" },
    { label: "Sino Sagrado", type: "singing-bowl", icon: "🛕" },
    { label: "Rio Ganges", type: "stream", icon: "🏞️" },
    { label: "Fogo Ritual", type: "fire", icon: "🔥" },
  ],
  explorar: [
    { label: "Chuva Relaxante", type: "rain", icon: "🌧️" },
    { label: "Ondas do Mar", type: "ocean", icon: "🌊" },
    { label: "Floresta Tranquila", type: "forest", icon: "🌲" },
    { label: "Noite Calma", type: "night", icon: "🌙" },
  ],
};

const MeditationPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedTradition, setSelectedTradition] = useState<string | null>(null);
  const [selectedSound, setSelectedSound] = useState<MeditationSound | null>(null);

  const tradition = traditions.find((trad) => trad.id === selectedTradition);
  const sounds = selectedTradition ? meditationSounds[selectedTradition] || meditationSounds.explorar : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => {
            if (selectedSound) setSelectedSound(null);
            else if (selectedTradition) setSelectedTradition(null);
            else navigate("/");
          }}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {selectedSound ? t("meditation.choose_theme") : selectedTradition ? t("home.choose_tradition") : t("nav.home")}
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            🧘 {t("meditation.title")}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {!selectedTradition
              ? t("meditation.choose_tradition")
              : !selectedSound
              ? `${t("meditation.choose_theme")} — ${tradition?.icon} ${t(`traditions.${tradition?.id}`)}`
              : `${tradition?.icon} ${selectedSound.label}`}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedTradition && (
            <motion.div
              key="traditions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {traditions.map((trad, i) => (
                <motion.button
                  key={trad.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedTradition(trad.id)}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 text-left transition-all hover:border-primary/30 hover:bg-card/80"
                >
                  <span className="text-3xl">{trad.icon}</span>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{t(`traditions.${trad.id}`)}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {meditationSounds[trad.id]?.length || 0} {t("meditation.meditations")}
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {selectedTradition && !selectedSound && (
            <motion.div
              key="themes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {sounds.map((s, i) => (
                <motion.button
                  key={s.type + i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setSelectedSound(s)}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 text-left transition-all hover:border-primary/30 hover:bg-card/80 group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{s.icon}</span>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{s.label}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {tradition?.icon} {t(`traditions.${tradition?.id}`)}
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {selectedSound && (
            <motion.div
              key="player"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <MeditationPlayer
                sound={selectedSound}
                traditionIcon={tradition?.icon}
                traditionLabel={t(`traditions.${tradition?.id}`)}
              />

              {/* Other sounds */}
              <div className="grid grid-cols-2 gap-3">
                {sounds
                  .filter((s) => s.type !== selectedSound.type || s.label !== selectedSound.label)
                  .map((s, i) => (
                    <button
                      key={s.type + i}
                      onClick={() => setSelectedSound(s)}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-3 text-left transition-all hover:border-primary/30"
                    >
                      <span className="text-2xl">{s.icon}</span>
                      <span className="text-xs font-medium text-foreground/80 line-clamp-2">{s.label}</span>
                    </button>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MeditationPage;
