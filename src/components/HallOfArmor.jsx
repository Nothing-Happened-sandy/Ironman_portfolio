import React, { useState } from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import { suitsData } from '../data/suitsData';
import { Shield, Zap, ChevronLeft, ChevronRight, Activity, Crosshair, Sparkles } from 'lucide-react';
import { playHudBeep, playArmorTransform, playTargetLock } from '../audio/soundSynth';

export default function HallOfArmor() {
  const { isIronManMode, speakJarvis } = useStarkMode();
  const [selectedSuitIndex, setSelectedSuitIndex] = useState(0);
  const suit = suitsData[selectedSuitIndex];

  const handleSuitChange = (newIndex) => {
    playTargetLock();
    setSelectedSuitIndex(newIndex);
    const selected = suitsData[newIndex];
    speakJarvis(`Selecting ${selected.name}, ${selected.codename}. Armor status: ${selected.status}.`);
  };

  const handlePrev = () => {
    const nextIdx = (selectedSuitIndex - 1 + suitsData.length) % suitsData.length;
    handleSuitChange(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (selectedSuitIndex + 1) % suitsData.length;
    handleSuitChange(nextIdx);
  };

  const handleDeploySuit = () => {
    playArmorTransform();
    speakJarvis(`Protocol engaged. Deploying ${suit.name}. All flight systems and repulsors armed.`);
  };

  return (
    <section id="hall-of-armor" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className={`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border mb-3 ${
            isIronManMode ? 'border-iron-red/50 bg-red-950/40 text-yellow-400' : 'border-stark-blue/50 bg-cyan-950/40 text-cyan-300'
          }`}>
            {isIronManMode ? "SECTION 04 // ACTIVE COMBAT CHASSIS" : "SECTION 04 // THE HALL OF ARMOR ARCHIVE"}
          </span>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide">
            THE HALL OF <span className={isIronManMode ? 'text-iron-red glow-red' : 'text-stark-blue glow-cyan'}>ARMOR</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base font-tech text-slate-400 max-w-2xl">
            From the crudely forged Mark I in the caves of Kunar to the god-slaying nanotech Mark LXXXV. An evolutionary chronicle of Tony Stark's mechanical armor.
          </p>
        </div>

        {/* Armor Selection Tabs / Badges */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin justify-start md:justify-center">
          {suitsData.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => handleSuitChange(idx)}
              className={`px-3 py-1.5 rounded-lg font-tech text-xs uppercase tracking-wider whitespace-nowrap border transition-all ${
                idx === selectedSuitIndex
                  ? isIronManMode
                    ? 'bg-iron-red text-white border-yellow-400 shadow-arc-red scale-105'
                    : 'bg-stark-blue text-black border-cyan-300 shadow-arc-cyan scale-105'
                  : 'bg-black/50 text-slate-400 border-white/10 hover:border-current hover:text-white'
              }`}
            >
              {s.name.split(' ')[0]} {s.name.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Main Showcase Grid */}
        <div className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-2xl relative overflow-hidden transition-all duration-500 ${
          isIronManMode ? 'bg-black/85 border-iron-red/50 shadow-arc-red' : 'bg-black/80 border-stark-blue/50 shadow-arc-cyan'
        }`}>
          {/* HUD corners */}
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Image with HUD frame and Controls */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/5 to-black/60 shadow-2xl group">
                <img
                  src={suit.image}
                  alt={suit.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* HUD Scanline */}
                <div className="absolute inset-0 hud-scanline pointer-events-none" />

                {/* Status Overlay Badge */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-white/20 font-tech text-[10px] tracking-widest text-yellow-400 uppercase">
                  ● {suit.status}
                </div>

                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-white/20 font-tech text-[10px] tracking-widest text-cyan-300 uppercase">
                  YEAR {suit.year}
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
                  title="Previous Armor"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-tech text-xs tracking-widest text-slate-400">
                  CHASSIS {selectedSuitIndex + 1} / {suitsData.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
                  title="Next Armor"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column: Technical Dossier & Weapons Spec */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* Suit Title */}
              <div>
                <span className="text-xs font-tech tracking-widest uppercase text-slate-400">
                  DESIGNATION ARCHIVE // DEPLOYED {suit.year}
                </span>
                <h3 className="text-3xl sm:text-4xl font-orbitron font-black text-white mt-1">
                  {suit.name}
                </h3>
                <span className={`text-sm sm:text-base font-orbitron font-bold tracking-wider ${
                  isIronManMode ? 'text-yellow-400' : 'text-cyan-300'
                }`}>
                  "{suit.codename}"
                </span>
              </div>

              {/* Iconic Quote */}
              <blockquote className="p-3 rounded-lg bg-white/5 border-l-4 border-current italic font-sans text-sm text-slate-200">
                "{suit.quote}"
              </blockquote>

              {/* Description */}
              <p className="font-tech text-sm sm:text-base text-slate-300 leading-relaxed">
                {suit.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-tech">
                <div className="p-2.5 rounded bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase block">COMPOSITION</span>
                  <span className="text-white font-mono">{suit.specs.material}</span>
                </div>
                <div className="p-2.5 rounded bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase block">MAX VELOCITY</span>
                  <span className="text-white font-mono">{suit.specs.speed}</span>
                </div>
                <div className="p-2.5 rounded bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase block">PROPULSION</span>
                  <span className="text-white font-mono">{suit.specs.propulsion}</span>
                </div>
                <div className="p-2.5 rounded bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase block">POWER SOURCE</span>
                  <span className="text-white font-mono">{suit.specs.powerCore}</span>
                </div>
              </div>

              {/* Armament Weapons */}
              <div>
                <span className="text-[10px] font-tech text-slate-400 uppercase tracking-widest block mb-2">
                  TACTICAL WEAPONRY INTEGRATION:
                </span>
                <div className="flex flex-wrap gap-2">
                  {suit.weapons.map((w, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded text-xs font-tech border ${
                        isIronManMode
                          ? 'border-iron-red/40 bg-red-950/40 text-rose-200'
                          : 'border-stark-blue/40 bg-cyan-950/40 text-cyan-200'
                      }`}
                    >
                      ⚔ {w}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deploy Suit CTA */}
              <div className="pt-2">
                <button
                  onClick={handleDeploySuit}
                  className={`w-full sm:w-auto px-6 py-3 rounded-lg font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 ${
                    isIronManMode
                      ? 'bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 text-black shadow-arc-red'
                      : 'bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 text-black shadow-arc-cyan'
                  }`}
                >
                  <Shield className="w-4 h-4" />
                  INITIALIZE {suit.name.split(' ')[0]} DEPLOYMENT PROTOCOL
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
