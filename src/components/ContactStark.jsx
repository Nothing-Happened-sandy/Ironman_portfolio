import React, { useState } from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import { Mail, Send, MapPin, Phone, ShieldCheck, Radio, CheckCircle } from 'lucide-react';
import { playHudBeep, playTargetLock, playArmorTransform } from '../audio/soundSynth';

export default function ContactStark() {
  const { isIronManMode, speakJarvis } = useStarkMode();
  const [formData, setFormData] = useState({ name: '', organization: '', message: '', priority: 'Standard' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    playTargetLock();
    setSubmitted(true);

    if (isIronManMode) {
      speakJarvis(`Emergency priority dispatch received from ${formData.name}. Relaying to Avengers orbital satellite array.`);
    } else {
      speakJarvis(`Thank you, ${formData.name}. Your proposal has been transmitted to Stark Industries executive team.`);
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', organization: '', message: '', priority: 'Standard' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className={`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border mb-3 ${
            isIronManMode ? 'border-iron-red/50 bg-red-950/40 text-yellow-400' : 'border-stark-blue/50 bg-cyan-950/40 text-cyan-300'
          }`}>
            {isIronManMode ? "SECTION 08 // SECURE TACTICAL BEACON" : "SECTION 08 // EXECUTIVE COMMUNICATIONS"}
          </span>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide">
            {isIronManMode ? (
              <>
                AVENGERS <span className="text-iron-red glow-red">TACTICAL UPLINK</span>
              </>
            ) : (
              <>
                STARK INDUSTRIES <span className="text-stark-blue glow-cyan">HEADQUARTERS</span>
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base font-tech text-slate-400 max-w-xl">
            {isIronManMode
              ? "Encrypted satellite channel directly connected to Tony Stark's in-helmet HUD. Omega-level threats receive immediate response."
              : "Pitch revolutionary clean energy ideas, request philanthropic funding, or schedule high-level corporate inquiries."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Coordinates & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className={`p-6 rounded-2xl border backdrop-blur-xl relative transition-all ${
              isIronManMode ? 'bg-black/80 border-iron-red/40 shadow-arc-red' : 'bg-black/70 border-stark-blue/40 shadow-arc-cyan'
            }`}>
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <h3 className="font-orbitron font-bold text-lg text-white mb-4 flex items-center gap-2">
                <Radio className={`w-5 h-5 ${isIronManMode ? 'text-iron-red' : 'text-stark-blue'}`} />
                {isIronManMode ? "DEFENSE FACILITY COORDINATES" : "CORPORATE LOCATIONS"}
              </h3>

              <div className="space-y-4 font-tech text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-orbitron text-xs">MALIBU RESIDENCE & LAB</strong>
                    10880 Malibu Point, Point Dume, Malibu, CA 90265
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-orbitron text-xs">AVENGERS COMPOUND / STARK TOWER</strong>
                    200 Park Avenue, Midtown Manhattan, New York, NY
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-orbitron text-xs">ENCRYPTED NEURAL COMM</strong>
                    tony@starkindustries.com // jarvis.relay.omega
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-tech text-xs">
                <span className="text-slate-400">ENCRYPTION PROTOCOL:</span>
                <span className="text-green-400 font-bold">2048-BIT QUANTUM HASH</span>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-5 rounded-2xl border border-white/10 bg-white/5 font-tech text-xs text-slate-300 leading-relaxed italic">
              "Part of the journey is the end. Everything is going to work out exactly the way it's supposed to. I love you 3000."
              <span className="block mt-2 not-italic font-orbitron text-[11px] text-white">— Anthony Edward Stark</span>
            </div>
          </div>

          {/* Right Column: Interactive Transmission Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-2xl relative transition-all ${
              isIronManMode ? 'bg-black/85 border-iron-red/50 shadow-arc-red' : 'bg-black/80 border-stark-blue/50 shadow-arc-cyan'
            }`}>
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                  <CheckCircle className={`w-14 h-14 ${isIronManMode ? 'text-green-400' : 'text-cyan-400'} animate-bounce`} />
                  <h3 className="font-orbitron font-extrabold text-2xl text-white">
                    TRANSMISSION DISPATCHED
                  </h3>
                  <p className="font-tech text-sm text-slate-300 max-w-md">
                    Encrypted packet received and parsed by J.A.R.V.I.S. Uplink confirmed.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-tech text-slate-400 uppercase tracking-widest mb-1.5">
                        OPERATIVE / SENDER NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Peter Parker / Pepper Potts"
                        className="w-full bg-black/60 border border-white/15 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm font-tech text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-tech text-slate-400 uppercase tracking-widest mb-1.5">
                        ORGANIZATION / FACTION
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. S.H.I.E.L.D. / MIT Labs"
                        className="w-full bg-black/60 border border-white/15 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm font-tech text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-tech text-slate-400 uppercase tracking-widest mb-1.5">
                      THREAT / PRIORITY LEVEL
                    </label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm font-tech text-white focus:outline-none transition-colors"
                    >
                      <option value="Standard">Standard Corporate Inquiry</option>
                      <option value="Urgent">Clean Energy Partnership / R&D</option>
                      <option value="Priority">Tactical Avengers Mission Dispatch</option>
                      <option value="Omega">OMEGA-LEVEL CODE RED (Immediate Scramble)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-tech text-slate-400 uppercase tracking-widest mb-1.5">
                      ENCRYPTED TRANSMISSION CONTENT *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter proposal parameters or tactical briefing data..."
                      className="w-full bg-black/60 border border-white/15 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm font-tech text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3.5 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 ${
                      isIronManMode
                        ? 'bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 text-black shadow-arc-red'
                        : 'bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 text-black shadow-arc-cyan'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    SEND SECURE UPLINK TO STARK OS
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
