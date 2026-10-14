import React, { useState } from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import { techInnovations } from '../data/techData';
import { Zap, Cpu, Terminal, Compass, Layers, Activity, ChevronRight, ShieldCheck } from 'lucide-react';
import { playHudBeep, playReactorPulse } from '../audio/soundSynth';

export default function TechInnovations() {
  const { isIronManMode, speakJarvis } = useStarkMode();
  const [selectedTech, setSelectedTech] = useState(techInnovations[0]);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      default: return <ShieldCheck className="w-5 h-5" />;
    }
  };

  const handleTechSelect = (tech) => {
    playHudBeep(1500);
    setSelectedTech(tech);
    speakJarvis(`Accessing patent archive for ${tech.title}. Power output rated at ${tech.powerOutput}.`);
  };

  return (
    <section id="tech" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className={`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border mb-3 ${
            isIronManMode ? 'border-iron-red/50 bg-red-950/40 text-yellow-400' : 'border-stark-blue/50 bg-cyan-950/40 text-cyan-300'
          }`}>
            {isIronManMode ? "SECTION 03 // BATTLEFIELD TECHNOLOGY" : "SECTION 03 // STARK PATENT ARCHIVE"}
          </span>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide">
            {isIronManMode ? (
              <>
                WEAPONIZED & <span className="text-iron-red glow-red">COMBAT INNOVATIONS</span>
              </>
            ) : (
              <>
                PATENTS & <span className="text-stark-blue glow-cyan">BREAKTHROUGH INVENTIONS</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-sm sm:text-base font-tech text-slate-400 max-w-2xl">
            {isIronManMode
              ? "Exo-atmospheric engineering, quantum micro-stabilizers, and directed energy platforms engineered by Tony Stark."
              : "Proprietary intellectual property, zero-emission clean energy architectures, and autonomous AI systems."}
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techInnovations.map((tech) => {
            const isSelected = selectedTech?.id === tech.id;
            return (
              <div
                key={tech.id}
                onClick={() => handleTechSelect(tech)}
                className={`p-6 rounded-2xl border backdrop-blur-xl cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                  isSelected
                    ? isIronManMode
                      ? 'bg-red-950/70 border-iron-red shadow-arc-red scale-[1.02]'
                      : 'bg-cyan-950/70 border-stark-blue shadow-arc-cyan scale-[1.02]'
                    : isIronManMode
                      ? 'bg-black/60 border-red-950/50 hover:border-iron-red/60 hover:bg-black/80'
                      : 'bg-black/50 border-cyan-950/50 hover:border-stark-blue/60 hover:bg-black/70'
                }`}
              >
                {/* HUD corner markers */}
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                {/* Top info */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-lg border ${
                    isSelected
                      ? isIronManMode ? 'bg-iron-red text-white border-yellow-400' : 'bg-stark-blue text-black border-cyan-300'
                      : 'bg-white/5 text-slate-300 border-white/10 group-hover:border-current'
                  }`}>
                    {getIcon(tech.icon)}
                  </div>
                  <span className="font-tech text-xs text-slate-400">
                    {tech.patents}
                  </span>
                </div>

                {/* Title & Category */}
                <span className="text-[10px] font-tech text-slate-400 uppercase tracking-widest block mb-1">
                  {tech.category}
                </span>
                <h3 className="font-orbitron font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {tech.title}
                </h3>

                {/* Mode-Adaptive Description */}
                <p className="font-tech text-xs sm:text-sm text-slate-300/90 leading-relaxed line-clamp-3 mb-4">
                  {isIronManMode ? tech.ironDescription : tech.starkDescription}
                </p>

                {/* Telemetry bottom bar */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-tech">
                  <span className="text-slate-400">EFFICIENCY: <strong className="text-white">{tech.efficiency}</strong></span>
                  <span className={isIronManMode ? 'text-yellow-400' : 'text-cyan-400'}>
                    {isSelected ? '● ACTIVE' : 'INSPECT →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Tech Detailed Breakdown Modal / Shelf */}
        {selectedTech && (
          <div className={`mt-12 p-6 sm:p-8 rounded-2xl border backdrop-blur-2xl relative overflow-hidden transition-all duration-500 ${
            isIronManMode ? 'bg-black/90 border-iron-red shadow-arc-red' : 'bg-black/90 border-stark-blue shadow-arc-cyan'
          }`}>
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded text-xs font-tech font-bold uppercase ${
                    isIronManMode ? 'bg-red-950 text-yellow-300 border border-iron-red' : 'bg-cyan-950 text-cyan-200 border border-stark-blue'
                  }`}>
                    CLASSIFIED STARK SCHEMATIC
                  </span>
                  <span className="font-tech text-xs text-slate-400">PATENT: {selectedTech.patents}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-orbitron font-extrabold text-white">
                  {selectedTech.title}
                </h3>

                <p className="font-tech text-sm sm:text-base text-slate-300 leading-relaxed">
                  {isIronManMode ? selectedTech.ironDescription : selectedTech.starkDescription}
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => {
                      playReactorPulse();
                      speakJarvis(`Executing full power pulse for ${selectedTech.title}.`);
                    }}
                    className={`px-4 py-2 rounded font-orbitron font-bold text-xs uppercase tracking-wider transition-all ${
                      isIronManMode
                        ? 'bg-iron-red text-white hover:bg-red-500 shadow-arc-red'
                        : 'bg-stark-blue text-black hover:bg-cyan-300 shadow-arc-cyan'
                    }`}
                  >
                    ⚡ TEST CAPACITOR CYCLE
                  </button>
                  <span className="font-tech text-xs text-slate-400">
                    OUTPUT: <strong className="text-white">{selectedTech.powerOutput}</strong>
                  </span>
                </div>
              </div>

              {/* Specs Table */}
              <div className="w-full lg:w-96 p-4 rounded-xl bg-white/5 border border-white/10 space-y-3 font-tech text-xs">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block pb-2 border-b border-white/10">
                  TECHNICAL METRICS & TOLERANCES
                </span>
                {selectedTech.specs.map((s, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4 pb-1 border-b border-white/5">
                    <span className="text-slate-400">{s.label}:</span>
                    <span className="text-white text-right font-mono font-medium">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
