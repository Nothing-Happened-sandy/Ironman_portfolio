import React from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import { Shield, Zap, Power, Sparkles } from 'lucide-react';

export default function ModeToggle() {
  const { isIronManMode, toggleMode, isTransforming } = useStarkMode();

  return (
    <div className="flex items-center gap-3">
      {/* Mode State Indicator */}
      <div className="hidden sm:flex flex-col text-right">
        <span className="text-[10px] font-tech uppercase tracking-widest text-slate-400">
          Current Protocol
        </span>
        <span className={`text-xs font-orbitron font-bold tracking-wider ${
          isIronManMode ? 'text-iron-red glow-red' : 'text-stark-blue glow-cyan'
        }`}>
          {isIronManMode ? 'MARK COMBAT HUD' : 'STARK EXECUTIVE'}
        </span>
      </div>

      {/* Interactive Arc Reactor Toggle Button */}
      <button
        onClick={toggleMode}
        disabled={isTransforming}
        title={isIronManMode ? "Disengage Armor (Switch to Tony Stark)" : "Deploy Armor (Transform to Iron Man)"}
        className={`relative group px-4 py-2 rounded-full border flex items-center gap-3 transition-all duration-500 overflow-hidden ${
          isIronManMode
            ? 'bg-gradient-to-r from-red-950/80 via-black to-red-900/80 border-iron-red text-white shadow-arc-red hover:border-yellow-400'
            : 'bg-gradient-to-r from-cyan-950/80 via-black to-blue-950/80 border-stark-blue text-white shadow-arc-cyan hover:border-cyan-300'
        } ${isTransforming ? 'scale-105 ring-4 ring-yellow-400/50 animate-pulse' : 'hover:scale-105 active:scale-95'}`}
      >
        {/* Animated Scanline across toggle */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

        {/* Outer transformation halo */}
        {isTransforming && (
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-red-500/20 to-cyan-500/20 animate-pulse pointer-events-none" />
        )}

        {/* Mini Arc Reactor Icon */}
        <div className={`relative w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-500 ${
          isIronManMode ? 'bg-iron-red/20 text-yellow-400 ring-2 ring-iron-red' : 'bg-cyan-500/20 text-cyan-300 ring-2 ring-stark-blue'
        } ${isTransforming ? 'animate-spin' : 'group-hover:rotate-180'}`}>
          <div className={`absolute inset-0.5 rounded-full border border-dashed animate-spin-slow ${
            isIronManMode ? 'border-yellow-400' : 'border-cyan-300'
          }`} />
          <Power className={`w-3.5 h-3.5 ${isIronManMode ? 'animate-pulse text-yellow-300' : 'text-cyan-200'}`} />
        </div>

        {/* Action Label */}
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-tech uppercase tracking-widest text-slate-300">
            {isTransforming ? 'TRANSFORMING...' : (isIronManMode ? 'DE-SUIT' : 'SUIT UP')}
          </span>
          <span className="text-xs font-orbitron font-extrabold tracking-wider flex items-center gap-1">
            {isIronManMode ? (
              <>
                <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                TONY STARK
              </>
            ) : (
              <>
                <Shield className="w-3 h-3 text-red-500 fill-red-500" />
                IRON MAN
              </>
            )}
          </span>
        </div>
      </button>
    </div>
  );
}
