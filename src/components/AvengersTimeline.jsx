import React, { useState } from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import { Shield, Sparkles, Award, MapPin, ChevronRight } from 'lucide-react';
import { playHudBeep, playTargetLock } from '../audio/soundSynth';

export default function AvengersTimeline() {
  const { isIronManMode, speakJarvis } = useStarkMode();

  const missions = [
    {
      year: "2023",
      title: "THE QUANTUM TIME HEIST & THE FINAL SNAP",
      location: "Avengers Compound, Upstate NY",
      suit: "Mark LXXXV (85)",
      dossier: "Solved temporal eigenvalue navigation paradox using inverted Möbius strip topology. Channelled the six cosmic Infinity Stones into nanotech gauntlet, neutralizing Thanos and his armada permanently.",
      quote: "And I... am... Iron Man."
    },
    {
      year: "2018",
      title: "THE BATTLE OF TITAN",
      location: "Planet Titan, Outer Space",
      suit: "Mark L (50)",
      dossier: "Exo-atmospheric combat against Thanos. Deployed fluid nanotech multi-cannons, shields, and repulsor flight wings under deep gravitational stress.",
      quote: "You throw another moon at me, and I'm gonna lose it."
    },
    {
      year: "2015",
      title: "BATTLE OF SOKOVIA & HULK CONTAINMENT",
      location: "Johannesburg & Novi Grad",
      suit: "Mark XLIII / XLIV (Hulkbuster)",
      dossier: "Collaborated with Dr. Bruce Banner to develop the orbital containment satellite 'Veronica'. Successfully neutralized an enraged Hulk and averted global extinction caused by Ultron.",
      quote: "Go to sleep, go to sleep, go to sleep!"
    },
    {
      year: "2012",
      title: "THE BATTLE OF NEW YORK",
      location: "Midtown Manhattan / Stark Tower",
      suit: "Mark VII (7)",
      dossier: "Intercepted a rogue nuclear ballistic missile launched at Manhattan and manually guided it through the Chitauri wormhole, destroying the alien command vessel in deep space.",
      quote: "If we can't protect the Earth, you can be damn well sure we'll avenge it."
    },
    {
      year: "2008",
      title: "ESCAPE FROM KUNAR & THE ARC DAWN",
      location: "Kunar Province, Afghanistan",
      suit: "Mark I (1)",
      dossier: "Captured by the Ten Rings. Refused to build the Jericho missile; instead forged the world's first miniaturized Arc Reactor and rough hydraulic armor in a cave to liberate captives.",
      quote: "I shouldn't be alive, unless it was for a reason."
    }
  ];

  const handleMissionClick = (m) => {
    playTargetLock();
    speakJarvis(`Mission archive: ${m.year}, ${m.title}. Tactical outcome verified.`);
  };

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className={`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border mb-3 ${
            isIronManMode ? 'border-iron-red/50 bg-red-950/40 text-yellow-400' : 'border-stark-blue/50 bg-cyan-950/40 text-cyan-300'
          }`}>
            SECTION 07 // AVENGERS CLASSIFIED OPERATIONS
          </span>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide">
            MISSION <span className={isIronManMode ? 'text-iron-red glow-red' : 'text-stark-blue glow-cyan'}>CHRONICLES</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base font-tech text-slate-400 max-w-xl">
            Key historical engagements where Tony Stark altered the course of human and cosmic history.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-32 space-y-8">
          {missions.map((m, idx) => (
            <div
              key={m.year}
              onClick={() => handleMissionClick(m)}
              className="relative pl-6 sm:pl-8 group cursor-pointer"
            >
              {/* Year indicator on left for desktop */}
              <div className="hidden sm:block absolute -left-28 top-3 text-right w-20 font-orbitron font-black text-xl text-slate-500 group-hover:text-white transition-colors">
                {m.year}
              </div>

              {/* Glowing Timeline Node */}
              <div className={`absolute -left-[9px] top-4 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                isIronManMode
                  ? 'border-iron-red bg-black group-hover:bg-yellow-400 group-hover:scale-125'
                  : 'border-stark-blue bg-black group-hover:bg-cyan-400 group-hover:scale-125'
              }`} />

              {/* Card Container */}
              <div className={`p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                isIronManMode
                  ? 'bg-black/70 border-iron-red/30 group-hover:border-iron-red group-hover:shadow-arc-red group-hover:bg-black/90'
                  : 'bg-black/60 border-stark-blue/30 group-hover:border-stark-blue group-hover:shadow-arc-cyan group-hover:bg-black/85'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="sm:hidden font-orbitron font-black text-lg text-white">
                    {m.year}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-tech text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{m.location}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-tech font-bold uppercase ${
                    isIronManMode ? 'bg-red-950 text-yellow-300' : 'bg-cyan-950 text-cyan-200'
                  }`}>
                    {m.suit}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-orbitron font-bold text-white mb-2">
                  {m.title}
                </h3>

                <p className="font-tech text-sm text-slate-300 leading-relaxed mb-3">
                  {m.dossier}
                </p>

                <blockquote className="italic text-xs font-tech text-slate-400 border-l-2 border-white/20 pl-3">
                  "{m.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
