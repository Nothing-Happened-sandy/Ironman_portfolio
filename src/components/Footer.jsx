import React from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import { Heart, Shield, Zap, ArrowUp } from 'lucide-react';
import { playHudBeep } from '../audio/soundSynth';

export default function Footer() {
  const { isIronManMode, toggleMode } = useStarkMode();

  const scrollToTop = () => {
    playHudBeep(1600);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t relative z-10 transition-colors duration-500 ${
      isIronManMode ? 'bg-[#060305] border-iron-red/30 text-slate-400' : 'bg-[#040711] border-stark-blue/20 text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">

          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded border flex items-center justify-center font-orbitron font-extrabold text-sm ${
              isIronManMode ? 'border-iron-red text-yellow-400' : 'border-stark-blue text-cyan-300'
            }`}>
              S
            </div>
            <div>
              <span className="font-orbitron font-bold text-sm tracking-wider text-white block">
                {isIronManMode ? "MARK COMBAT PLATFORM" : "STARK INDUSTRIES"}
              </span>
              <span className="font-tech text-xs text-slate-500">
                PROPRIETARY NEURAL ARCHITECTURE // MALIBU POINT
              </span>
            </div>
          </div>

          {/* Heart Tribute */}
          <div className="flex items-center gap-2 text-xs font-tech text-slate-300">
            <span>Proof That Tony Stark Has A Heart</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span className="text-yellow-400 font-bold">3000</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/15 transition-all hover:scale-110 active:scale-95"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-tech text-slate-500">
          <div>
            © {new Date().getFullYear()} STARK INDUSTRIES & THE AVENGERS INITIATIVE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMode}
              className="hover:text-white transition-colors"
            >
              SWITCH TO {isIronManMode ? "TONY STARK" : "IRON MAN"}
            </button>
            <span>//</span>
            <span>POWERED BY J.A.R.V.I.S. & THREE.JS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
