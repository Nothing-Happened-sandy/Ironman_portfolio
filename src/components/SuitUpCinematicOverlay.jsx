import React, { useEffect, useState } from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import { Shield, Zap, Crosshair, Activity, Cpu, Power } from 'lucide-react';

export default function SuitUpCinematicOverlay() {
  const { isTransforming, isIronManMode } = useStarkMode();
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState('');

  useEffect(() => {
    if (!isTransforming) {
      setProgress(0);
      setStageText('');
      return;
    }

    const startTime = Date.now();
    const duration = 2400; // 2.4s cinematic sequence

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (isIronManMode) {
        // Suit-up sequence messages
        if (pct < 20) setStageText("INITIALIZING CHEST RT-10 NANO-HOUSING...");
        else if (pct < 45) setStageText("DISPENSING SMART LIQUID METAL MATRIX...");
        else if (pct < 70) setStageText("LOCKING GOLD-TITANIUM EXOSKELETON PLATES...");
        else if (pct < 90) setStageText("ARC REACTOR OVERDRIVE // 4.5 GIGAWATTS...");
        else setStageText("MARK LXXXV SYSTEMS FULLY ENGAGED. COMBAT READY.");
      } else {
        // De-suiting sequence messages
        if (pct < 25) setStageText("DISENGAGING COMBAT AVIONICS & REPULSORS...");
        else if (pct < 55) setStageText("RETRACTING FLUID NANOMACHINES TO CORE...");
        else if (pct < 85) setStageText("COOLING ARC REACTOR TO BASELINE STABILITY...");
        else setStageText("STARK INDUSTRIES EXECUTIVE SYSTEMS RESTORED.");
      }

      if (pct >= 100) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isTransforming, isIronManMode]);

  if (!isTransforming) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden select-none">

      {/* 1. Backdrop Tint & Radial Glow */}
      <div className={`absolute inset-0 transition-colors duration-700 ${
        isIronManMode
          ? 'bg-gradient-to-b from-black via-red-950/70 to-black'
          : 'bg-gradient-to-b from-black via-cyan-950/70 to-black'
      } backdrop-blur-md`} />

      {/* 2. Full-Screen Hexagonal Nanotech Honeycomb Mesh Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hex-grid"
              width="50"
              height="86.6"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(1.2)"
            >
              <path
                d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z M25 86.6 L50 72.2 L50 43.3 L25 57.7 L0 43.3 L0 72.2 Z"
                fill="none"
                stroke={isIronManMode ? '#e62429' : '#00f0ff'}
                strokeWidth="1.2"
                strokeOpacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-grid)" className="animate-pulse" />
        </svg>
      </div>

      {/* 3. Sweeping Shockwave Blast Rings expanding outward */}
      <div className={`absolute rounded-full border-4 ${
        isIronManMode ? 'border-yellow-400 shadow-arc-red' : 'border-cyan-300 shadow-arc-cyan'
      } animate-ping`} style={{ width: '40vw', height: '40vw', animationDuration: '1.2s' }} />

      <div className={`absolute rounded-full border-2 border-dashed ${
        isIronManMode ? 'border-iron-red' : 'border-stark-blue'
      } animate-spin-slow`} style={{ width: '70vw', height: '70vw' }} />

      {/* 4. Inside Helmet HUD Visor Simulation (When switching to Iron Man) */}
      {isIronManMode && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Top Helmet Brow Silhouette Overlay */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black via-black/80 to-transparent flex items-start justify-center pt-6">
            <div className="flex items-center gap-6 font-tech text-xs tracking-widest text-yellow-400">
              <span>◄ COMPASS: 184° SSE</span>
              <span>//</span>
              <span className="text-white font-orbitron font-bold">ALTITUDE: 14,200 FT</span>
              <span>//</span>
              <span>VELOCITY: MACH 3.2 ►</span>
            </div>
          </div>

          {/* Dual Ocular Targeting Apertures */}
          <div className="relative w-full max-w-4xl h-72 flex items-center justify-between px-10">
            {/* Left Eye Reticle */}
            <div className="relative w-64 h-32 border-2 border-yellow-400/80 rounded-3xl overflow-hidden bg-red-950/30 backdrop-blur-sm shadow-arc-red animate-pulse">
              <div className="absolute top-2 left-2 text-[10px] font-tech text-yellow-400">OCULAR L_OPTIC</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-yellow-400/50 animate-spin-slow" />
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_#fff]" />
              </div>
              <div className="absolute bottom-2 right-2 text-[10px] font-tech text-red-400">120 FPS // LOCKED</div>
            </div>

            {/* Right Eye Reticle */}
            <div className="relative w-64 h-32 border-2 border-yellow-400/80 rounded-3xl overflow-hidden bg-red-950/30 backdrop-blur-sm shadow-arc-red animate-pulse">
              <div className="absolute top-2 right-2 text-[10px] font-tech text-yellow-400">OCULAR R_OPTIC</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-yellow-400/50 animate-spin-reverse-slow" />
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_#fff]" />
              </div>
              <div className="absolute bottom-2 left-2 text-[10px] font-tech text-red-400">HEAT: 3,200K // NOMINAL</div>
            </div>
          </div>

          {/* Bottom Chin Armor Clamp Silhouette */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end justify-center pb-6">
            <div className="flex items-center gap-8 font-tech text-xs tracking-widest text-slate-300">
              <span className="text-red-400">REPULSORS: [CHARGED]</span>
              <span className="text-yellow-400 font-bold">NANITE RESERVE: [100%]</span>
              <span className="text-cyan-400">UNIBEAM: [STANDBY]</span>
            </div>
          </div>
        </div>
      )}

      {/* 5. Center Core HUD Diagnostic & Progress Gauge */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-xl">

        {/* Central Pulsing Arc Reactor / Emblem */}
        <div className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 flex items-center justify-center mb-6 shadow-2xl transition-all duration-500 ${
          isIronManMode
            ? 'border-yellow-400 bg-red-950/90 text-yellow-300 shadow-arc-red scale-110'
            : 'border-cyan-400 bg-cyan-950/90 text-cyan-200 shadow-arc-cyan scale-110'
        }`}>
          {/* Inner rotating glyphs */}
          <div className={`absolute inset-2 rounded-full border border-dashed animate-spin-slow ${
            isIronManMode ? 'border-yellow-300' : 'border-cyan-300'
          }`} />
          <div className={`absolute inset-4 rounded-full border border-dotted animate-spin-reverse-slow ${
            isIronManMode ? 'border-red-400' : 'border-blue-400'
          }`} />

          {/* Core Icon */}
          <div className="flex flex-col items-center">
            {isIronManMode ? (
              <Shield className="w-12 h-12 text-yellow-400 fill-yellow-400/20 animate-bounce" />
            ) : (
              <Zap className="w-12 h-12 text-cyan-300 fill-cyan-300/20 animate-pulse" />
            )}
            <span className="font-orbitron font-black text-xs mt-1 text-white">
              {progress}%
            </span>
          </div>
        </div>

        {/* Title of Transformation */}
        <h2 className="font-orbitron font-black text-2xl sm:text-4xl uppercase tracking-widest text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] mb-2">
          {isIronManMode ? "SUIT DEPLOYMENT SEQUENCE" : "DISENGAGING ARMOR SYSTEMS"}
        </h2>

        {/* Dynamic Telemetry Stage Text */}
        <div className={`font-tech text-xs sm:text-sm tracking-widest uppercase px-4 py-1.5 rounded-full border backdrop-blur-md mb-6 ${
          isIronManMode
            ? 'border-iron-red bg-black/80 text-yellow-300'
            : 'border-stark-blue bg-black/80 text-cyan-200'
        }`}>
          ▶ {stageText}
        </div>

        {/* Progress Bar with glowing lead */}
        <div className="w-72 sm:w-96 h-3 bg-black/80 rounded-full border border-white/20 overflow-hidden relative p-0.5">
          <div
            className={`h-full rounded-full transition-all duration-75 relative ${
              isIronManMode
                ? 'bg-gradient-to-r from-red-600 via-yellow-400 to-white shadow-[0_0_15px_#ffd700]'
                : 'bg-gradient-to-r from-blue-600 via-cyan-400 to-white shadow-[0_0_15px_#00f0ff]'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Telemetry Footer */}
        <div className="flex items-center gap-6 text-[10px] font-tech text-slate-400 mt-4 tracking-widest">
          <span>PROTOCOL: {isIronManMode ? "MARK_LXXXV" : "STARK_EXECUTIVE"}</span>
          <span>//</span>
          <span>NEURAL SYNC: OPTIMAL</span>
          <span>//</span>
          <span>JARVIS LINK: 100%</span>
        </div>

      </div>

      {/* 6. Screen Corner Holographic Brackets */}
      <div className="absolute inset-8 pointer-events-none">
        <div className={`absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 ${
          isIronManMode ? 'border-yellow-400' : 'border-cyan-400'
        }`} />
        <div className={`absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 ${
          isIronManMode ? 'border-yellow-400' : 'border-cyan-400'
        }`} />
        <div className={`absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 ${
          isIronManMode ? 'border-yellow-400' : 'border-cyan-400'
        }`} />
        <div className={`absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 ${
          isIronManMode ? 'border-yellow-400' : 'border-cyan-400'
        }`} />
      </div>

    </div>
  );
}
