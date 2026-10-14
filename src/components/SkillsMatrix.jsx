import React, { useState } from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import { starkMasteries } from '../data/techData';
import { Cpu, Zap, Shield, Crosshair, Award, Terminal, Activity } from 'lucide-react';
import { playHudBeep, playTargetLock } from '../audio/soundSynth';

export default function SkillsMatrix() {
  const { isIronManMode, speakJarvis } = useStarkMode();
  const [activeItem, setActiveItem] = useState(null);

  const combatArsenal = [
    {
      name: "Chest Arc Unibeam Overdrive",
      level: 99,
      category: "Heavy Energy Discharge",
      output: "4.5 Gigawatts",
      range: "12.4 Kilometers",
      desc: "Full capacitor discharge directly through the chest optical iris. Vaporizes bunker-grade reinforced titanium in 0.4 seconds."
    },
    {
      name: "Variable Repulsor Blasters",
      level: 96,
      category: "Directed Plasma Beams",
      output: "1.2 Megawatts / Gauntlet",
      range: "Line of Sight",
      desc: "Twin palm repulsors delivering concussive kinetic force or continuous thermal slicing beams with zero reload delay."
    },
    {
      name: "Shoulder Hypersonic Micro-Missiles",
      level: 95,
      category: "Multi-Target Munitions",
      output: "92 Smart Warheads",
      range: "45 Kilometers",
      desc: "Compact laser-guided ordnance pods capable of locking onto and eliminating 92 independent threats simultaneously."
    },
    {
      name: "Autonomous Satellite Veronica (Hulkbuster)",
      level: 98,
      category: "Orbital Deployment Array",
      output: "Heavy Armor Ingress",
      range: "Global Orbital Orbit",
      desc: "Low-Earth orbit defense pod providing rapid atmospheric armor reinforcement, replacement limbs, and gamma containment cages."
    },
    {
      name: "Liquid Nanotech Morphing Blades & Shields",
      level: 97,
      category: "Adaptive Melee & Shielding",
      output: "Molecular Bond Strength",
      range: "CQC / Kinetic Buffer",
      desc: "Reconfigurable carbon-vibranium matrix forming energy-dispersing shields, high-frequency blades, or foot flight clamps."
    },
    {
      name: "Ion Refocuser / Back Thruster Cannons",
      level: 94,
      category: "Sentry Energy Multiplier",
      output: "Synchronized Lightning / Ion",
      range: "8 Kilometers",
      desc: "Back-mounted petal wings that absorb environmental energy (like Thor's lightning) and refocus it into concentrated ion streams."
    }
  ];

  const handleItemClick = (item) => {
    playTargetLock();
    setActiveItem(item);
    if (isIronManMode) {
      speakJarvis(`${item.name} selected. Power output rated at ${item.output}.`);
    } else {
      speakJarvis(`${item.name}: Mastery level at ${item.level} percent.`);
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border ${
              isIronManMode ? 'border-iron-red/50 bg-red-950/40 text-yellow-400' : 'border-stark-blue/50 bg-cyan-950/40 text-cyan-300'
            }`}>
              {isIronManMode ? "SECTION 02 // TACTICAL SPECIFICATIONS" : "SECTION 02 // INTELLECTUAL MATRIX"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide">
            {isIronManMode ? (
              <>
                COMBAT ARSENAL & <span className="text-iron-red glow-red">WEAPONS MATRIX</span>
              </>
            ) : (
              <>
                GENIUS CAPABILITIES & <span className="text-stark-blue glow-cyan">ENGINEERING DISCIPLINES</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-sm sm:text-base font-tech text-slate-400 max-w-2xl">
            {isIronManMode
              ? "Comprehensive breakdown of Mark LXXXV offensive capabilities, kinetic deterrents, and tactical orbital support systems."
              : "Advanced academic masteries, proprietary patents, and technological disciplines pioneered by Anthony Stark."}
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Progress Bars & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {(isIronManMode ? combatArsenal : starkMasteries).map((item, index) => (
              <div
                key={item.name}
                onClick={() => handleItemClick(item)}
                className={`p-4 rounded-xl border backdrop-blur-md cursor-pointer transition-all duration-300 ${
                  activeItem?.name === item.name
                    ? isIronManMode
                      ? 'bg-red-950/70 border-iron-red shadow-arc-red scale-[1.02]'
                      : 'bg-cyan-950/70 border-stark-blue shadow-arc-cyan scale-[1.02]'
                    : isIronManMode
                      ? 'bg-black/50 border-red-950/50 hover:border-iron-red/50 hover:bg-black/70'
                      : 'bg-black/40 border-cyan-950/50 hover:border-stark-blue/50 hover:bg-black/60'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-tech text-xs text-slate-400">0{index + 1} //</span>
                    <span className="font-orbitron font-bold text-sm sm:text-base text-white">
                      {item.name}
                    </span>
                  </div>
                  <span className={`font-tech text-xs font-bold px-2 py-0.5 rounded ${
                    isIronManMode ? 'bg-red-950 text-yellow-300' : 'bg-cyan-950 text-cyan-300'
                  }`}>
                    {item.level}% {isIronManMode ? 'COMBAT READY' : 'MASTERY'}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden relative">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      isIronManMode
                        ? 'bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400'
                        : 'bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-400'
                    }`}
                    style={{ width: `${item.level}%` }}
                  />
                </div>

                <div className="flex justify-between items-center mt-2 text-[11px] font-tech text-slate-400">
                  <span>CATEGORY: {item.category}</span>
                  <span>{isIronManMode ? `OUTPUT: ${item.output}` : `INDEX: ALPHA-${index + 1}`}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Interactive Detail Terminal View */}
          <div className="lg:col-span-5 sticky top-28">
            <div className={`p-6 rounded-2xl border backdrop-blur-xl relative overflow-hidden transition-all duration-500 ${
              isIronManMode
                ? 'bg-black/85 border-iron-red/50 shadow-arc-red'
                : 'bg-black/80 border-stark-blue/50 shadow-arc-cyan'
            }`}>
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <Activity className={`w-4 h-4 ${isIronManMode ? 'text-iron-red' : 'text-stark-blue'}`} />
                  <span className="font-orbitron font-bold text-xs uppercase text-white tracking-widest">
                    {isIronManMode ? "TARGETING TELEMETRY" : "INTELLECT SPECIFICATION"}
                  </span>
                </div>
                <span className="text-[10px] font-tech text-slate-400 uppercase tracking-widest">
                  [ JARVIS SECURE DATA ]
                </span>
              </div>

              {activeItem ? (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <span className="text-[10px] font-tech uppercase tracking-wider text-slate-400">SELECTED MODULE</span>
                    <h3 className="text-xl font-orbitron font-extrabold text-white">{activeItem.name}</h3>
                    <span className={`text-xs font-tech ${isIronManMode ? 'text-yellow-400' : 'text-cyan-300'}`}>
                      {activeItem.category}
                    </span>
                  </div>

                  <p className="text-sm font-tech text-slate-300 leading-relaxed bg-black/40 p-3 rounded border border-white/5">
                    {activeItem.desc || `${activeItem.name} represents a foundational pillar of Tony Stark's engineering repertoire, honed over decades of relentless innovation at Stark Industries laboratories.`}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-2.5 rounded bg-white/5 border border-white/10">
                      <span className="text-[10px] font-tech text-slate-400 uppercase block">EFFICIENCY</span>
                      <span className="font-orbitron text-base font-bold text-white">{activeItem.level}.8%</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/5 border border-white/10">
                      <span className="text-[10px] font-tech text-slate-400 uppercase block">STATUS</span>
                      <span className={`font-orbitron text-base font-bold ${
                        isIronManMode ? 'text-green-400' : 'text-cyan-300'
                      }`}>ACTIVE</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      playHudBeep(1800);
                      speakJarvis(`Diagnostics for ${activeItem.name} confirmed. All circuits optimal.`);
                    }}
                    className={`w-full py-2.5 rounded font-tech text-xs tracking-widest uppercase border transition-all ${
                      isIronManMode
                        ? 'border-iron-red bg-red-950/60 text-yellow-300 hover:bg-iron-red/30'
                        : 'border-stark-blue bg-cyan-950/60 text-cyan-200 hover:bg-stark-blue/30'
                    }`}
                  >
                    ▶ RUN JARVIS DIAGNOSTIC ON MODULE
                  </button>
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <Crosshair className={`w-12 h-12 mb-3 animate-spin-slow opacity-60 ${
                    isIronManMode ? 'text-iron-red' : 'text-stark-blue'
                  }`} />
                  <p className="font-tech text-sm text-slate-400">
                    Click any {isIronManMode ? "weapon system" : "engineering discipline"} to inspect technical telemetry and diagnostic logs.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
