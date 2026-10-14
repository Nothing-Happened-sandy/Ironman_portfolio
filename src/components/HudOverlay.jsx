import React from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import { Mic, Crosshair } from 'lucide-react';

export default function HudOverlay() {
  const {
    isIronManMode,
    activeSpeech,
    isSpeaking,
    suitOverdrive,
    fireRepulsor
  } = useStarkMode();

  return (
    <>
      {/* Repulsor Overdrive Flash */}
      {suitOverdrive && (
        <div className="fixed inset-0 z-40 pointer-events-none bg-cyan-400/25 mix-blend-screen transition-opacity duration-300" />
      )}

      {/* HUD Corner Reticles */}
      <div className="fixed inset-4 sm:inset-6 pointer-events-none z-30 select-none">
        {/* Top Left */}
        <div className={`absolute top-0 left-0 flex flex-col gap-1 transition-colors ${
          isIronManMode ? 'text-iron-red' : 'text-stark-blue'
        }`}>
          <div className="w-10 h-10 border-t-2 border-l-2 border-current" />
          <div className="font-tech text-[10px] tracking-widest opacity-75">
            GRID // 34.0259°N 118.7798°W
          </div>
        </div>

        {/* Top Right */}
        <div className={`absolute top-0 right-0 flex flex-col items-end gap-1 transition-colors ${
          isIronManMode ? 'text-iron-gold' : 'text-cyan-400'
        }`}>
          <div className="w-10 h-10 border-t-2 border-r-2 border-current" />
          <div className="font-tech text-[10px] tracking-widest opacity-75">
            DEFENSE: OPTIMAL // 100%
          </div>
        </div>

        {/* Bottom Left */}
        <div className={`absolute bottom-0 left-0 flex flex-col gap-1 transition-colors ${
          isIronManMode ? 'text-iron-red' : 'text-stark-blue'
        }`}>
          <div className="font-tech text-[10px] tracking-widest opacity-75">
            ARC CORE // 3.2 GW
          </div>
          <div className="w-10 h-10 border-b-2 border-l-2 border-current" />
        </div>

        {/* Bottom Right */}
        <div className={`absolute bottom-0 right-0 flex flex-col items-end gap-1 transition-colors ${
          isIronManMode ? 'text-iron-gold' : 'text-cyan-400'
        }`}>
          <div className="font-tech text-[10px] tracking-widest opacity-75">
            JARVIS // ACTIVE LINK
          </div>
          <div className="w-10 h-10 border-b-2 border-r-2 border-current" />
        </div>
      </div>

      {/* Floating Repulsor Test Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={fireRepulsor}
          title="Fire Repulsor Blast (Sound + Visual FX)"
          className={`group px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border flex items-center gap-2.5 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
            isIronManMode
              ? 'bg-red-950/80 border-iron-red text-yellow-300 shadow-arc-red hover:border-yellow-400'
              : 'bg-cyan-950/80 border-stark-blue text-cyan-200 shadow-arc-cyan hover:border-cyan-300'
          }`}
        >
          <div className={`w-3 h-3 rounded-full animate-ping ${
            isIronManMode ? 'bg-yellow-400' : 'bg-cyan-400'
          }`} />
          <Crosshair className="w-4 h-4 animate-spin-slow" />
          <span className="font-orbitron font-bold text-xs tracking-wider uppercase">
            {isIronManMode ? "FIRE REPULSOR" : "TEST ARC BEAM"}
          </span>
        </button>
      </div>

      {/* Live Jarvis Voice Subtitle Notification HUD */}
      {(isSpeaking || activeSpeech) && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 max-w-xl w-[92%] sm:w-auto px-4 py-3 rounded-lg border backdrop-blur-xl shadow-2xl transition-all duration-300 animate-fade-in flex items-center gap-3 bg-black/90 text-white border-cyan-400/50">
          {/* Audio Visualizer Waves */}
          <div className="flex items-center gap-1 h-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`w-1 rounded-full ${
                  isIronManMode ? 'bg-red-500' : 'bg-cyan-400'
                } ${isSpeaking ? 'animate-pulse' : 'h-1.5'}`}
                style={{
                  height: isSpeaking ? `${Math.max(6, (i * 5) % 20 + 6)}px` : '4px',
                  animationDuration: `${0.3 + (i * 0.1)}s`
                }}
              />
            ))}
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-orbitron font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1">
              <Mic className="w-3 h-3" />
              J.A.R.V.I.S. VOCAL LINK
            </span>
            <span className="text-xs sm:text-sm font-tech text-slate-200 leading-snug">
              "{activeSpeech}"
            </span>
          </div>
        </div>
      )}
    </>
  );
}
