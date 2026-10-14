import React, { useState, useRef, useEffect } from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import { jarvisQuickPrompts, getJarvisResponse } from '../data/jarvisResponses';
import { Terminal, Send, Mic, Volume2, Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';
import { playHudBeep, playRepulsorBlast, playReactorPulse, playArmorTransform, playTargetLock } from '../audio/soundSynth';

export default function JarvisTerminal() {
  const { isIronManMode, speakJarvis, isSpeaking } = useStarkMode();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "jarvis",
      text: "Good day, Mr. Stark. J.A.R.V.I.S. neural interface is fully operational. How may I assist you today, sir?",
      time: "10:42:01"
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const chatBottomRef = useRef(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const executeCommand = (query) => {
    if (!query.trim()) return;

    playHudBeep(1200);

    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour12: false });

    // Append user message
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: query,
      time: timeStr
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    // JARVIS processes query
    setTimeout(() => {
      const response = getJarvisResponse(query);

      // Play corresponding sound FX
      if (response.sound === 'repulsor') playRepulsorBlast();
      else if (response.sound === 'reactor') playReactorPulse();
      else if (response.sound === 'armor') playArmorTransform();
      else if (response.sound === 'target') playTargetLock();
      else playHudBeep(1600);

      // Speak via Web Speech API
      speakJarvis(response.audioText || response.text);

      const jarvisMsg = {
        id: Date.now() + 1,
        sender: "jarvis",
        text: response.text,
        time: new Date().toLocaleTimeString('en-US', { hour12: false })
      };

      setMessages((prev) => [...prev, jarvisMsg]);
    }, 450);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleQuickPrompt = (prompt) => {
    executeCommand(prompt.command);
  };

  return (
    <section id="jarvis" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className={`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border mb-3 ${
            isIronManMode ? 'border-iron-red/50 bg-red-950/40 text-yellow-400' : 'border-stark-blue/50 bg-cyan-950/40 text-cyan-300'
          }`}>
            SECTION 06 // NEURAL AI INTERACTION
          </span>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide">
            J.A.R.V.I.S. <span className={isIronManMode ? 'text-iron-red glow-red' : 'text-stark-blue glow-cyan'}>TERMINAL</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base font-tech text-slate-400 max-w-xl">
            Just A Rather Very Intelligent System. Ask technical questions, inspect suit diagnostics, or issue vocal protocols.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className={`rounded-2xl border backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
          isIronManMode ? 'bg-black/90 border-iron-red/60 shadow-arc-red' : 'bg-[#060b17]/90 border-stark-blue/60 shadow-arc-cyan'
        }`}>

          {/* Terminal Window Top Bar */}
          <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-black/40">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="font-tech text-xs tracking-widest text-slate-400 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                STARK_OS_v8.9 // QUANTUM_COGNITION_CORE
              </span>
            </div>

            {/* Speaking visualizer status */}
            <div className="flex items-center gap-2">
              {isSpeaking && (
                <span className="flex items-center gap-1 text-[11px] font-tech text-cyan-300 animate-pulse">
                  <Volume2 className="w-3.5 h-3.5" />
                  JARVIS VOCALIZING...
                </span>
              )}
              <span className="font-tech text-[11px] text-green-400">● 100 PetaFLOPS</span>
            </div>
          </div>

          {/* Chat Messages Container */}
          <div className="h-[360px] overflow-y-auto p-5 space-y-4 font-tech text-sm scrollbar-thin">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-1 px-1">
                  <span>{m.sender === 'user' ? 'TONY STARK' : 'J.A.R.V.I.S.'}</span>
                  <span>//</span>
                  <span>{m.time}</span>
                </div>

                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-xl border leading-relaxed ${
                    m.sender === 'user'
                      ? isIronManMode
                        ? 'bg-red-950/70 border-iron-red/50 text-white rounded-tr-none'
                        : 'bg-cyan-950/70 border-stark-blue/50 text-white rounded-tr-none'
                      : 'bg-black/60 border-white/10 text-slate-200 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={chatBottomRef} />
          </div>

          {/* Quick Prompts Shelf */}
          <div className="px-5 py-3 border-t border-white/10 bg-black/30 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[10px] font-tech text-slate-400 uppercase tracking-wider whitespace-nowrap">
              QUICK COMMANDS:
            </span>
            {jarvisQuickPrompts.map((p) => (
              <button
                key={p.label}
                onClick={() => handleQuickPrompt(p)}
                className={`px-2.5 py-1 rounded text-xs font-tech whitespace-nowrap border transition-all ${
                  isIronManMode
                    ? 'border-iron-red/40 bg-red-950/30 text-rose-200 hover:bg-iron-red/30'
                    : 'border-stark-blue/40 bg-cyan-950/30 text-cyan-200 hover:bg-stark-blue/30'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Interactive Input Form */}
          <form
            onSubmit={handleFormSubmit}
            className="p-4 border-t border-white/10 bg-black/60 flex items-center gap-3"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask JARVIS anything (e.g. 'status report', 'test repulsors', 'mark 85', 'who is tony stark')..."
                className="w-full bg-black/60 border border-white/15 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm font-tech text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className={`px-5 py-3 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105 active:scale-95 ${
                isIronManMode
                  ? 'bg-iron-red text-white hover:bg-red-500 shadow-arc-red'
                  : 'bg-stark-blue text-black hover:bg-cyan-300 shadow-arc-cyan'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              TRANSMIT
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
