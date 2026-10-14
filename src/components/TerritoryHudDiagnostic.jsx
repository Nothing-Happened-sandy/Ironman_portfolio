import React, { useState } from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import ThreeArmorHologram from './ThreeArmorHologram';
import { Eye, Shield, Activity, Crosshair, Cpu, Radio, Sparkles } from 'lucide-react';
import { playHudBeep, playTargetLock } from '../audio/soundSynth';

export default function TerritoryHudDiagnostic() {
  const { isIronManMode, speakJarvis } = useStarkMode();
  const [activeTab, setActiveTab] = useState('3d-hologram');

  const subsystems = [
    {
      id: "arc-core",
      name: "Miniaturized Arc Core",
      status: "100% NOMINAL",
      temp: "3,200 K",
      psi: "48,500 PSI",
      notes: "Heavy synthesized element isotope generating continuous zero-emission magnetic containment flux."
    },
    {
      id: "repulsors",
      name: "Gauntlet Repulsor Nodes",
      status: "ARMED & READY",
      temp: "850 K",
      psi: "22,000 PSI",
      notes: "High-density plasma accelerators providing directional flight stabilization and 1.2 MW concussive bursts."
    },
    {
      id: "nanite-hull",
      name: "Fluid Nanotech Plating",
      status: "100% INTEGRITY",
      temp: "Ambient",
      psi: "Molecular Lock",
      notes: "Sub-dermal liquid metal matrices capable of instant physical reconfiguration and ballistic deflection."
    },
    {
      id: "avionics",
      name: "Supersonic Avionics & HUD",
      status: "CALIBRATED",
      temp: "295 K",
      psi: "Exo-Atmospheric",
      notes: "Dual retinal holographic projectors synchronized with orbital Stark Satellite network."
    }
  ];

  const handleSubsystemClick = (sub) => {
    playTargetLock();
    speakJarvis(`Subsystem diagnostic: ${sub.name}. Status: ${sub.status}. Core temperature: ${sub.temp}.`);
  };

  return (
    <section id="blueprint-hud" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className={`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border mb-3 ${
            isIronManMode ? 'border-iron-red/50 bg-red-950/40 text-yellow-400' : 'border-stark-blue/50 bg-cyan-950/40 text-cyan-300'
          }`}>
            {isIronManMode ? "SECTION 05 // TERRITORY STUDIO COMBAT HUD" : "SECTION 05 // HOLOGRAPHIC CAD BLUEPRINTS"}
          </span>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide">
            HOLOGRAPHIC <span className={isIronManMode ? 'text-iron-red glow-red' : 'text-stark-blue glow-cyan'}>DIAGNOSTICS</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base font-tech text-slate-400 max-w-2xl">
            Multi-spectral wireframe schematics and real-time telemetry diagnostics. As featured in the Stark Workshop CAD suite.
          </p>
        </div>

        {/* Diagnostic Tabs */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => {
              playHudBeep(1400);
              setActiveTab('3d-hologram');
            }}
            className={`px-4 py-2 rounded-lg font-orbitron text-xs uppercase tracking-wider border transition-all ${
              activeTab === '3d-hologram'
                ? isIronManMode
                  ? 'bg-iron-red text-white border-yellow-400 shadow-arc-red'
                  : 'bg-stark-blue text-black border-cyan-300 shadow-arc-cyan'
                : 'bg-black/60 text-slate-400 border-white/10 hover:border-current'
            }`}
          >
            3D Wireframe Helmet Model
          </button>
          <button
            onClick={() => {
              playHudBeep(1400);
              setActiveTab('blueprint-schematics');
            }}
            className={`px-4 py-2 rounded-lg font-orbitron text-xs uppercase tracking-wider border transition-all ${
              activeTab === 'blueprint-schematics'
                ? isIronManMode
                  ? 'bg-iron-red text-white border-yellow-400 shadow-arc-red'
                  : 'bg-stark-blue text-black border-cyan-300 shadow-arc-cyan'
            : 'bg-black/60 text-slate-400 border-white/10 hover:border-current'
            }`}
          >
            Territory Studio HUD Schematics
          </button>
        </div>

        {/* Main Display Container */}
        <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl relative overflow-hidden transition-all duration-500 ${
          isIronManMode ? 'bg-black/85 border-iron-red/50 shadow-arc-red' : 'bg-black/80 border-stark-blue/50 shadow-arc-cyan'
        }`}>
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          {activeTab === '3d-hologram' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: 3D Three.js Wireframe Helmet */}
              <div className="lg:col-span-7 h-[420px] sm:h-[480px] rounded-2xl bg-black/60 border border-white/10 relative overflow-hidden flex items-center justify-center">
                <ThreeArmorHologram className="w-full h-full" />
              </div>

              {/* Right Column: Subsystem telemetry metrics */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-orbitron font-bold text-xs uppercase text-white tracking-widest flex items-center gap-2">
                    <Activity className={`w-4 h-4 ${isIronManMode ? 'text-iron-red' : 'text-stark-blue'}`} />
                    LIVE SUBSYSTEM TELEMETRY
                  </span>
                  <span className="font-tech text-xs text-green-400">● REAL-TIME</span>
                </div>

                {subsystems.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => handleSubsystemClick(sub)}
                    className="p-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer transition-all hover:scale-[1.01]"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-orbitron font-bold text-sm text-white">{sub.name}</span>
                      <span className="font-tech text-xs text-yellow-400">{sub.status}</span>
                    </div>
                    <p className="text-xs font-tech text-slate-300 mb-2 leading-relaxed">{sub.notes}</p>
                    <div className="flex gap-4 text-[11px] font-tech text-slate-400">
                      <span>TEMP: <strong className="text-white">{sub.temp}</strong></span>
                      <span>PRESSURE: <strong className="text-white">{sub.psi}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Territory Studio Blueprint Reference Viewer */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/80 relative group">
                <img
                  src="/assets/ironman-blueprint.jpg"
                  alt="Holographic Iron Man Blueprint"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/90 p-3 font-tech text-xs text-slate-300 border-t border-white/10">
                  [ SPECIFICATION A-01: MARK 85 NANOMACHINE HOUSING & INTERNAL VOLUMETRIC FLUX ]
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/80 relative group">
                <img
                  src="/assets/ironman-hud-diagnostics.jpg"
                  alt="Territory Studio HUD Breakdown"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/90 p-3 font-tech text-xs text-slate-300 border-t border-white/10">
                  [ SPECIFICATION B-02: TERRITORY STUDIO ARTICULATED LIMB & TORSO BREAKDOWN ]
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
