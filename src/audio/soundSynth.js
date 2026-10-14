// Web Audio API Synthesizer for Iron Man / Stark Sound Effects
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Play UI Click / Telemetry Beep
export function playHudBeep(frequency = 1200, duration = 0.06, type = 'sine') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * 0.8, ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

// Play Repulsor Charging and Blast
export function playRepulsorBlast() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const t = ctx.currentTime;

    // 1. High frequency charging whine (0.0 to 0.25s)
    const chargeOsc = ctx.createOscillator();
    const chargeGain = ctx.createGain();
    chargeOsc.type = 'triangle';
    chargeOsc.frequency.setValueAtTime(300, t);
    chargeOsc.frequency.exponentialRampToValueAtTime(2400, t + 0.25);
    chargeGain.gain.setValueAtTime(0.01, t);
    chargeGain.gain.linearRampToValueAtTime(0.18, t + 0.22);
    chargeGain.gain.exponentialRampToValueAtTime(0.001, t + 0.26);
    chargeOsc.connect(chargeGain);
    chargeGain.connect(ctx.destination);
    chargeOsc.start(t);
    chargeOsc.stop(t + 0.26);

    // 2. Blast impact shockwave (0.23s onwards)
    const blastOsc = ctx.createOscillator();
    const blastGain = ctx.createGain();
    blastOsc.type = 'sawtooth';
    blastOsc.frequency.setValueAtTime(550, t + 0.23);
    blastOsc.frequency.exponentialRampToValueAtTime(45, t + 0.85);

    blastGain.gain.setValueAtTime(0.3, t + 0.23);
    blastGain.gain.exponentialRampToValueAtTime(0.001, t + 0.85);
    blastOsc.connect(blastGain);
    blastGain.connect(ctx.destination);
    blastOsc.start(t + 0.23);
    blastOsc.stop(t + 0.85);

    // 3. Noise burst
    const bufferSize = ctx.sampleRate * 0.5;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, t + 0.23);
    filter.frequency.exponentialRampToValueAtTime(120, t + 0.7);
    filter.Q.value = 3;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.25, t + 0.23);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.7);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(t + 0.23);
    noise.stop(t + 0.75);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

// Multi-stage Cinematic Suit-Up Sound Sequence (Nanotech Flow, Servos, Reactor Ignition & Visor Clank)
export function playFullSuitUpSequence() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const t = ctx.currentTime;

    // 1. Nanotech swarm high-frequency electrical flow (0.0s to 0.7s)
    const swarmOsc = ctx.createOscillator();
    const swarmGain = ctx.createGain();
    swarmOsc.type = 'sawtooth';
    swarmOsc.frequency.setValueAtTime(120, t);
    swarmOsc.frequency.linearRampToValueAtTime(480, t + 0.4);
    swarmOsc.frequency.exponentialRampToValueAtTime(880, t + 0.8);

    const swarmFilter = ctx.createBiquadFilter();
    swarmFilter.type = 'bandpass';
    swarmFilter.frequency.setValueAtTime(400, t);
    swarmFilter.frequency.linearRampToValueAtTime(1600, t + 0.7);
    swarmFilter.Q.value = 4;

    swarmGain.gain.setValueAtTime(0.05, t);
    swarmGain.gain.linearRampToValueAtTime(0.22, t + 0.35);
    swarmGain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);

    swarmOsc.connect(swarmFilter);
    swarmFilter.connect(swarmGain);
    swarmGain.connect(ctx.destination);
    swarmOsc.start(t);
    swarmOsc.stop(t + 0.9);

    // 2. Dual mechanical locking latches (at 0.4s and 0.85s)
    [0.35, 0.75].forEach((offset) => {
      const lockOsc = ctx.createOscillator();
      const lockGain = ctx.createGain();
      lockOsc.type = 'square';
      lockOsc.frequency.setValueAtTime(620, t + offset);
      lockOsc.frequency.exponentialRampToValueAtTime(90, t + offset + 0.25);

      lockGain.gain.setValueAtTime(0.18, t + offset);
      lockGain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.25);

      lockOsc.connect(lockGain);
      lockGain.connect(ctx.destination);
      lockOsc.start(t + offset);
      lockOsc.stop(t + offset + 0.26);
    });

    // 3. Arc Reactor Ignition Surge (at 0.9s to 1.8s)
    const surgeOsc = ctx.createOscillator();
    const surgeGain = ctx.createGain();
    surgeOsc.type = 'sawtooth';
    surgeOsc.frequency.setValueAtTime(70, t + 0.9);
    surgeOsc.frequency.linearRampToValueAtTime(220, t + 1.3);
    surgeOsc.frequency.exponentialRampToValueAtTime(60, t + 1.9);

    surgeGain.gain.setValueAtTime(0.25, t + 0.9);
    surgeGain.gain.linearRampToValueAtTime(0.35, t + 1.3);
    surgeGain.gain.exponentialRampToValueAtTime(0.001, t + 1.95);

    const surgeFilter = ctx.createBiquadFilter();
    surgeFilter.type = 'lowpass';
    surgeFilter.frequency.setValueAtTime(350, t + 0.9);
    surgeFilter.frequency.linearRampToValueAtTime(1400, t + 1.3);
    surgeFilter.frequency.exponentialRampToValueAtTime(250, t + 1.9);

    surgeOsc.connect(surgeFilter);
    surgeFilter.connect(surgeGain);
    surgeGain.connect(ctx.destination);
    surgeOsc.start(t + 0.9);
    surgeOsc.stop(t + 2.0);

    // 4. Helmet Visor Slam / Ocular Lock ("KLA-CHUNG!") (at 1.4s)
    const visorOsc = ctx.createOscillator();
    const visorGain = ctx.createGain();
    visorOsc.type = 'triangle';
    visorOsc.frequency.setValueAtTime(980, t + 1.4);
    visorOsc.frequency.exponentialRampToValueAtTime(50, t + 1.75);

    visorGain.gain.setValueAtTime(0.3, t + 1.4);
    visorGain.gain.exponentialRampToValueAtTime(0.001, t + 1.8);

    visorOsc.connect(visorGain);
    visorGain.connect(ctx.destination);
    visorOsc.start(t + 1.4);
    visorOsc.stop(t + 1.8);

    // 5. Ocular Eyes Power-up Tone (at 1.65s)
    const eyeOsc = ctx.createOscillator();
    const eyeGain = ctx.createGain();
    eyeOsc.type = 'sine';
    eyeOsc.frequency.setValueAtTime(1200, t + 1.65);
    eyeOsc.frequency.linearRampToValueAtTime(2800, t + 2.1);

    eyeGain.gain.setValueAtTime(0.08, t + 1.65);
    eyeGain.gain.exponentialRampToValueAtTime(0.001, t + 2.2);

    eyeOsc.connect(eyeGain);
    eyeGain.connect(ctx.destination);
    eyeOsc.start(t + 1.65);
    eyeOsc.stop(t + 2.25);

  } catch (e) {
    console.warn('Audio error:', e);
  }
}

// Cinematic De-Suiting Sound Sequence (Pneumatic release, nanite retraction, executive chime)
export function playDeSuitSequence() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const t = ctx.currentTime;

    // 1. Pneumatic release hiss (noise)
    const bufferSize = ctx.sampleRate * 0.7;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, t);
    filter.frequency.exponentialRampToValueAtTime(300, t + 0.65);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.7);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start(t);
    noise.stop(t + 0.7);

    // 2. Descending servo pitch
    const servo = ctx.createOscillator();
    const servoGain = ctx.createGain();
    servo.type = 'sine';
    servo.frequency.setValueAtTime(650, t + 0.2);
    servo.frequency.exponentialRampToValueAtTime(110, t + 0.85);

    servoGain.gain.setValueAtTime(0.15, t + 0.2);
    servoGain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);

    servo.connect(servoGain);
    servoGain.connect(ctx.destination);
    servo.start(t + 0.2);
    servo.stop(t + 0.9);

    // 3. Executive chime (two harmonious glass tones)
    [0.9, 1.15].forEach((offset, idx) => {
      const chime = ctx.createOscillator();
      const chimeGain = ctx.createGain();
      chime.type = 'sine';
      chime.frequency.setValueAtTime(idx === 0 ? 880 : 1320, t + offset);

      chimeGain.gain.setValueAtTime(0.12, t + offset);
      chimeGain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.4);

      chime.connect(chimeGain);
      chimeGain.connect(ctx.destination);
      chime.start(t + offset);
      chime.stop(t + offset + 0.45);
    });

  } catch (e) {
    console.warn('Audio error:', e);
  }
}

// Standalone Arc Reactor Power Surge
export function playReactorPulse() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(65, t);
    osc.frequency.linearRampToValueAtTime(140, t + 0.3);
    osc.frequency.exponentialRampToValueAtTime(55, t + 0.9);

    gain.gain.setValueAtTime(0.18, t);
    gain.gain.linearRampToValueAtTime(0.25, t + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, t);
    filter.frequency.linearRampToValueAtTime(900, t + 0.3);
    filter.frequency.exponentialRampToValueAtTime(200, t + 0.9);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(t);
    osc.stop(t + 0.95);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

// Tactical Target Lock Sound
export function playTargetLock() {
  try {
    playHudBeep(1800, 0.05, 'triangle');
    setTimeout(() => {
      playHudBeep(2400, 0.08, 'triangle');
    }, 90);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

// Alias for backwards compatibility
export const playArmorTransform = playFullSuitUpSequence;
