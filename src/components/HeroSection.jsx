import React from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import ThreeArcReactor from './ThreeArcReactor';
import { Shield, Zap, Sparkles, Terminal, ChevronRight, Activity, Crosshair } from 'lucide-react';
import { playHudBeep } from '../audio/soundSynth';

export default function HeroSection() {
  const { isIronManMode, toggleMode, fireRepulsor, speakJarvis } = useStarkMode();

  const handleSuitUpClick = () => {
    toggleMode();
  };

  const handleJarvisGreeting = () => {
    playHudBeep(1500);
    if (isIronManMode) {
      speakJarvis("Tactical targeting locked on 14 potential hostile vectors. Standing by for engagement, Mr. Stark.");
    } else {
      speakJarvis("Stark Industries global markets up 3.4% this morning, sir. Coffee is ready in the workshop.");
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background gradient spotlights */}
      <div className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[140px] pointer-events-none transition-colors duration-1000 ${
        isIronManMode ? 'bg-red-700/20' : 'bg-cyan-500/20'
      }`} />
      <div className={`absolute bottom-10 -right-32 w-96 h-96 rounded-full blur-[140px] pointer-events-none transition-colors duration-1000 ${
        isIronManMode ? 'bg-amber-600/20' : 'bg-blue-600/20'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Dossier & Headlines */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Protocol Badge */}
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-tech tracking-widest uppercase border backdrop-blur-md transition-all duration-500 ${
                isIronManMode
                  ? 'border-iron-red bg-red-950/50 text-yellow-400 shadow-arc-red'
                  : 'border-stark-blue bg-cyan-950/50 text-cyan-300 shadow-arc-cyan'
              }`}>
                <span className="w-2 h-2 rounded-full bg-current animate-ping" />
                {isIronManMode ? "AVENGERS PROTOCOL // MARK LXXXV ACTIVE" : "STARK INDUSTRIES // CEO & CHIEF ARCHITECT"}
              </span>

              <button
                onClick={handleJarvisGreeting}
                className="text-[11px] font-tech text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                title="Ask JARVIS for status"
              >
                <Terminal className="w-3.5 h-3.5" />
                [JARVIS PING]
              </button>
            </div>

            {/* Main Headline */}
            <div>
              {isIronManMode ? (
                <>
                  <h1 className="font-orbitron font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white uppercase leading-none drop-shadow-lg">
                    I AM <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 glow-red">
                      IRON MAN.
                    </span>
                  </h1>
                  <p className="mt-4 text-base sm:text-lg font-tech text-rose-200/80 max-w-xl leading-relaxed">
                    Earth's Armored Avenger. Powered by a self-synthesized nanotech Arc Reactor, piloting advanced multi-threat kinetic exoskeletons engineered to protect humanity against cosmic and terrestrial threats.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="font-syne font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white uppercase leading-none">
                    TONY <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 glow-cyan">
                      STARK.
                    </span>
                  </h1>
                  <p className="mt-2 font-orbitron text-sm sm:text-base tracking-widest text-slate-400 uppercase">
                    Genius. Billionaire. Playboy. Philanthropist.
                  </p>
                  <p className="mt-4 text-base sm:text-lg font-sans text-slate-300/90 max-w-xl leading-relaxed">
                    Visionary inventor, robotics pioneer, and MIT prodigy. Redefining modern civilization with clean fusion energy, autonomous artificial intelligence, and quantum temporal mechanics.
                  </p>
                </>
              )}
            </div>

            {/* Key Live Telemetry Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {isIronManMode ? (
                <>
                  <div className="p-3 rounded border border-iron-red/30 bg-black/60 backdrop-blur-md">
                    <span className="text-[10px] font-tech uppercase tracking-wider text-slate-400 block">ARMOR STATUS</span>
                    <span className="text-lg font-orbitron font-bold text-yellow-400">CLASS 100+</span>
                  </div>
                  <div className="p-3 rounded border border-iron-red/30 bg-black/60 backdrop-blur-md">
                    <span className="text-[10px] font-tech uppercase tracking-wider text-slate-400 block">THRUST SPEED</span>
                    <span className="text-lg font-orbitron font-bold text-white">MACH 15+</span>
                  </div>
                  <div className="p-3 rounded border border-iron-red/30 bg-black/60 backdrop-blur-md">
                    <span className="text-[10px] font-tech uppercase tracking-wider text-slate-400 block">CORE OUTPUT</span>
                    <span className="text-lg font-orbitron font-bold text-cyan-400">4.5 GW</span>
                  </div>
                  <div className="p-3 rounded border border-iron-red/30 bg-black/60 backdrop-blur-md">
                    <span className="text-[10px] font-tech uppercase tracking-wider text-slate-400 block">NANITE RESERVE</span>
                    <span className="text-lg font-orbitron font-bold text-red-500">100% FULL</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3 rounded border border-stark-blue/30 bg-black/50 backdrop-blur-md">
                    <span className="text-[10px] font-tech uppercase tracking-wider text-slate-400 block">NET WORTH</span>
                    <span className="text-lg font-orbitron font-bold text-yellow-400">$12.4B+</span>
                  </div>
                  <div className="p-3 rounded border border-stark-blue/30 bg-black/50 backdrop-blur-md">
                    <span className="text-[10px] font-tech uppercase tracking-wider text-slate-400 block">PATENTS</span>
                    <span className="text-lg font-orbitron font-bold text-cyan-300">1,842+</span>
                  </div>
                  <div className="p-3 rounded border border-stark-blue/30 bg-black/50 backdrop-blur-md">
                    <span className="text-[10px] font-tech uppercase tracking-wider text-slate-400 block">GENIUS IQ</span>
                    <span className="text-lg font-orbitron font-bold text-white">270+</span>
                  </div>
                  <div className="p-3 rounded border border-stark-blue/30 bg-black/50 backdrop-blur-md">
                    <span className="text-[10px] font-tech uppercase tracking-wider text-slate-400 block">CLEAN POWER</span>
                    <span className="text-lg font-orbitron font-bold text-green-400">ZERO CARBON</span>
                  </div>
                </>
              )}
            </div>

            {/* Interactive Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleSuitUpClick}
                className={`px-6 py-3 rounded-lg font-orbitron font-bold text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all duration-300 shadow-xl ${
                  isIronManMode
                    ? 'bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-black shadow-arc-red'
                    : 'bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black shadow-arc-cyan'
                } hover:scale-105 active:scale-95`}
              >
                {isIronManMode ? (
                  <>
                    <Zap className="w-4 h-4" />
                    DE-SUIT TO TONY STARK
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    SUIT UP TO IRON MAN
                  </>
                )}
              </button>

              <button
                onClick={fireRepulsor}
                className={`px-5 py-3 rounded-lg font-tech text-xs tracking-widest uppercase border backdrop-blur-md transition-all flex items-center gap-2 ${
                  isIronManMode
                    ? 'border-iron-red text-rose-300 hover:bg-iron-red/20 hover:text-white'
                    : 'border-stark-blue text-cyan-300 hover:bg-stark-blue/20 hover:text-white'
                }`}
              >
                <Crosshair className="w-4 h-4" />
                {isIronManMode ? "FIRE REPULSOR CANNON" : "CALIBRATE ARC CORE"}
              </button>

              <a
                href="#hall-of-armor"
                className="text-xs font-tech tracking-wider text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-1"
              >
                [ VIEW ALL 85 ARMORS <ChevronRight className="w-3.5 h-3.5" /> ]
              </a>
            </div>

          </div>

          {/* Right Column: Interactive 3D Arc Reactor & Portrait Duality Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">

            {/* The 3D Arc Reactor Canvas */}
            <div className="w-full max-w-[420px] aspect-square relative flex items-center justify-center">
              <ThreeArcReactor className="w-full h-full" />

              {/* Holographic HUD rings around 3D canvas */}
              <div className="absolute inset-0 pointer-events-none rounded-full border border-dashed opacity-30 animate-spin-slow" />
              <div className="absolute inset-6 pointer-events-none rounded-full border border-dotted opacity-20 animate-spin-reverse-slow" />
            </div>

            {/* Character Duality Switcher Card below reactor */}
            <div className={`mt-4 w-full max-w-[390px] p-3 rounded-xl border backdrop-blur-xl flex items-center gap-3 transition-all duration-500 ${
              isIronManMode
                ? 'bg-black/80 border-iron-red/40 shadow-arc-red'
                : 'bg-black/70 border-stark-blue/40 shadow-arc-cyan'
            }`}>
              <img
                src={isIronManMode ? "/assets/ironman-suit-front.jpg" : "/assets/tony-portrait.png"}
                alt={isIronManMode ? "Iron Man Mark 85" : "Tony Stark"}
                className="w-14 h-14 rounded-lg object-cover object-top border border-white/20 shadow-md"
              />
              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-tech tracking-wider text-slate-400 uppercase">
                  {isIronManMode ? "COMBAT SPECIFICATION" : "EXECUTIVE DOSSIER"}
                </span>
                <span className="text-sm font-orbitron font-bold text-white">
                  {isIronManMode ? "Armor Model LXXXV" : "Anthony Edward Stark"}
                </span>
                <span className="text-xs font-tech text-slate-400">
                  {isIronManMode ? "Targeting: Locked // Nano-Gauntlet Ready" : "CEO, Stark Industries // Malibu CA"}
                </span>
              </div>
              <button
                onClick={toggleMode}
                className={`p-2 rounded-full border text-xs transition-transform hover:scale-110 ${
                  isIronManMode ? 'border-yellow-400 text-yellow-300' : 'border-cyan-400 text-cyan-300'
                }`}
                title="Transform"
              >
                ⇄
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
