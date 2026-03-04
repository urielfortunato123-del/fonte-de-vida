import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { type SoundType, playAmbientSound, stopAmbientSound, setVolume } from "@/lib/ambientSounds";

interface Props {
  sound: { label: string; type: SoundType; icon: string };
  traditionIcon?: string;
  traditionLabel?: string;
}

const MeditationPlayer = ({ sound, traditionIcon, traditionLabel }: Props) => {
  const [playing, setPlaying] = useState(false);
  const [vol, setVol] = useState(60);
  const [elapsed, setElapsed] = useState(0);

  const toggle = useCallback(() => {
    if (playing) {
      stopAmbientSound();
      setPlaying(false);
    } else {
      playAmbientSound(sound.type, vol / 100);
      setPlaying(true);
      setElapsed(0);
    }
  }, [playing, sound.type, vol]);

  useEffect(() => {
    return () => stopAmbientSound();
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [playing]);

  const handleVolume = (v: number[]) => {
    setVol(v[0]);
    setVolume(v[0] / 100);
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-6"
    >
      {/* Visual orb */}
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={playing ? { scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] } : { scale: 1, opacity: 0.3 }}
          transition={playing ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : {}}
          className="absolute h-48 w-48 rounded-full bg-primary/20 blur-xl"
        />
        <motion.div
          animate={playing ? { scale: [1, 1.08, 1] } : { scale: 1 }}
          transition={playing ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : {}}
          className="relative flex h-40 w-40 items-center justify-center rounded-full border border-primary/20 bg-card/80 backdrop-blur-sm"
        >
          <span className="text-5xl">{sound.icon}</span>
        </motion.div>
      </div>

      {/* Info */}
      <div className="text-center">
        <h2 className="font-display text-xl font-semibold text-foreground">{sound.label}</h2>
        {traditionIcon && (
          <p className="text-xs text-muted-foreground mt-1">
            {traditionIcon} {traditionLabel}
          </p>
        )}
        <p className="font-mono text-sm text-muted-foreground mt-2">{fmt(elapsed)}</p>
      </div>

      {/* Play/Pause */}
      <button
        onClick={toggle}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        {playing ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7 ml-1" />}
      </button>

      {/* Volume */}
      <div className="flex w-full max-w-xs items-center gap-3">
        {vol === 0 ? (
          <VolumeX className="h-4 w-4 text-muted-foreground shrink-0" />
        ) : (
          <Volume2 className="h-4 w-4 text-muted-foreground shrink-0" />
        )}
        <Slider value={[vol]} onValueChange={handleVolume} max={100} step={1} className="flex-1" />
      </div>
    </motion.div>
  );
};

export default MeditationPlayer;
