// Web Audio API ambient sound generator — no external dependencies

export type SoundType =
  | "rain"
  | "ocean"
  | "forest"
  | "singing-bowl"
  | "wind"
  | "fire"
  | "stream"
  | "om"
  | "bells"
  | "night";

interface ActiveSound {
  context: AudioContext;
  gainNode: GainNode;
  sources: (AudioBufferSourceNode | OscillatorNode)[];
  isPlaying: boolean;
}

let activeSound: ActiveSound | null = null;

function createNoiseBuffer(ctx: AudioContext, seconds: number): AudioBuffer {
  const buf = ctx.createBuffer(2, ctx.sampleRate * seconds, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const data = buf.getChannelData(ch);
    for (let i = 0; i < data.length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
  }
  return buf;
}

function makeRain(ctx: AudioContext, master: GainNode) {
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 4);
  noise.loop = true;

  const bandpass = ctx.createBiquadFilter();
  bandpass.type = "bandpass";
  bandpass.frequency.value = 8000;
  bandpass.Q.value = 0.5;

  const highpass = ctx.createBiquadFilter();
  highpass.type = "highpass";
  highpass.frequency.value = 4000;

  noise.connect(bandpass).connect(highpass).connect(master);
  noise.start();

  // Low rumble layer
  const rumble = ctx.createBufferSource();
  rumble.buffer = createNoiseBuffer(ctx, 4);
  rumble.loop = true;
  const lowpass = ctx.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.value = 400;
  const rumbleGain = ctx.createGain();
  rumbleGain.gain.value = 0.3;
  rumble.connect(lowpass).connect(rumbleGain).connect(master);
  rumble.start();

  return [noise, rumble];
}

function makeOcean(ctx: AudioContext, master: GainNode) {
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 6);
  noise.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 600;

  // Modulate volume for wave effect
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.08;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.4;
  lfo.connect(lfoGain).connect(master.gain);
  lfo.start();

  noise.connect(filter).connect(master);
  noise.start();

  return [noise, lfo];
}

function makeForest(ctx: AudioContext, master: GainNode) {
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 4);
  noise.loop = true;

  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 3000;
  bp.Q.value = 2;

  const noiseGain = ctx.createGain();
  noiseGain.gain.value = 0.15;

  noise.connect(bp).connect(noiseGain).connect(master);
  noise.start();

  // Bird-like chirps with oscillators
  const sources: OscillatorNode[] = [];
  for (let i = 0; i < 3; i++) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 2000 + Math.random() * 3000;
    const oscGain = ctx.createGain();
    oscGain.gain.value = 0;

    // Periodic chirp
    const now = ctx.currentTime;
    for (let t = i * 2; t < 120; t += 4 + Math.random() * 6) {
      oscGain.gain.setValueAtTime(0, now + t);
      oscGain.gain.linearRampToValueAtTime(0.05, now + t + 0.05);
      oscGain.gain.linearRampToValueAtTime(0, now + t + 0.15);
    }

    osc.connect(oscGain).connect(master);
    osc.start();
    sources.push(osc);
  }

  return [noise, ...sources];
}

function makeSingingBowl(ctx: AudioContext, master: GainNode) {
  const sources: OscillatorNode[] = [];
  const fundamentals = [256, 384, 512, 640];

  fundamentals.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;

    const oscGain = ctx.createGain();
    oscGain.gain.value = 0;

    // Repeating bowl strikes
    const now = ctx.currentTime;
    for (let t = i * 2; t < 300; t += 8 + i * 2) {
      oscGain.gain.setValueAtTime(0, now + t);
      oscGain.gain.linearRampToValueAtTime(0.12 / (i + 1), now + t + 0.1);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + t + 7);
    }

    osc.connect(oscGain).connect(master);
    osc.start();
    sources.push(osc);
  });

  return sources;
}

function makeWind(ctx: AudioContext, master: GainNode) {
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 6);
  noise.loop = true;

  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 800;
  bp.Q.value = 0.3;

  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.05;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 500;
  lfo.connect(lfoGain).connect(bp.frequency);
  lfo.start();

  noise.connect(bp).connect(master);
  noise.start();

  return [noise, lfo];
}

function makeFire(ctx: AudioContext, master: GainNode) {
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 4);
  noise.loop = true;

  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 1500;
  bp.Q.value = 1;

  const crackleLfo = ctx.createOscillator();
  crackleLfo.frequency.value = 3;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.3;
  crackleLfo.connect(lfoGain).connect(master.gain);
  crackleLfo.start();

  noise.connect(bp).connect(master);
  noise.start();

  return [noise, crackleLfo];
}

function makeStream(ctx: AudioContext, master: GainNode) {
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 4);
  noise.loop = true;

  const hp = ctx.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = 2000;

  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 6000;

  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.15;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.15;
  lfo.connect(lfoGain).connect(master.gain);
  lfo.start();

  noise.connect(hp).connect(lp).connect(master);
  noise.start();

  return [noise, lfo];
}

function makeOm(ctx: AudioContext, master: GainNode) {
  const sources: OscillatorNode[] = [];
  const freqs = [136.1, 272.2, 408.3]; // Om frequency harmonics

  freqs.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;

    const oscGain = ctx.createGain();
    oscGain.gain.value = 0.15 / (i + 1);

    // Slow vibrato
    const vib = ctx.createOscillator();
    vib.frequency.value = 0.1 + i * 0.05;
    const vibGain = ctx.createGain();
    vibGain.gain.value = 2;
    vib.connect(vibGain).connect(osc.frequency);
    vib.start();

    osc.connect(oscGain).connect(master);
    osc.start();
    sources.push(osc, vib);
  });

  return sources;
}

function makeBells(ctx: AudioContext, master: GainNode) {
  const sources: OscillatorNode[] = [];
  const bellFreqs = [523, 659, 784, 1047];

  bellFreqs.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;

    const oscGain = ctx.createGain();
    oscGain.gain.value = 0;

    const now = ctx.currentTime;
    for (let t = i * 3; t < 300; t += 10 + i * 3) {
      oscGain.gain.setValueAtTime(0, now + t);
      oscGain.gain.linearRampToValueAtTime(0.08, now + t + 0.02);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + t + 5);
    }

    osc.connect(oscGain).connect(master);
    osc.start();
    sources.push(osc);
  });

  return sources;
}

function makeNight(ctx: AudioContext, master: GainNode) {
  // Crickets
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 4);
  noise.loop = true;

  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 5000;
  bp.Q.value = 10;

  const cricketGain = ctx.createGain();
  cricketGain.gain.value = 0.08;

  const lfo = ctx.createOscillator();
  lfo.frequency.value = 12;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.08;
  lfo.connect(lfoGain).connect(cricketGain.gain);
  lfo.start();

  noise.connect(bp).connect(cricketGain).connect(master);
  noise.start();

  // Low ambient drone
  const drone = ctx.createOscillator();
  drone.type = "sine";
  drone.frequency.value = 120;
  const droneGain = ctx.createGain();
  droneGain.gain.value = 0.04;
  drone.connect(droneGain).connect(master);
  drone.start();

  return [noise, lfo, drone];
}

const generators: Record<SoundType, (ctx: AudioContext, master: GainNode) => (AudioBufferSourceNode | OscillatorNode)[]> = {
  rain: makeRain,
  ocean: makeOcean,
  forest: makeForest,
  "singing-bowl": makeSingingBowl,
  wind: makeWind,
  fire: makeFire,
  stream: makeStream,
  om: makeOm,
  bells: makeBells,
  night: makeNight,
};

export function playAmbientSound(type: SoundType, volume = 0.6): void {
  stopAmbientSound();

  const ctx = new AudioContext();
  const master = ctx.createGain();
  master.gain.value = volume;
  master.connect(ctx.destination);

  const sources = generators[type](ctx, master);

  activeSound = { context: ctx, gainNode: master, sources, isPlaying: true };
}

export function stopAmbientSound(): void {
  if (!activeSound) return;
  try {
    activeSound.sources.forEach((s) => { try { s.stop(); } catch {} });
    activeSound.context.close();
  } catch {}
  activeSound = null;
}

export function setVolume(vol: number): void {
  if (activeSound) {
    activeSound.gainNode.gain.value = Math.max(0, Math.min(1, vol));
  }
}

export function isPlaying(): boolean {
  return activeSound?.isPlaying ?? false;
}
