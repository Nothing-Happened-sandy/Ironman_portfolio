import React, { useState, useEffect } from 'react';
import { useStarkMode } from '../context/StarkModeContext';
import ModeToggle from './ModeToggle';
import { Volume2, VolumeX, Menu, X, Shield, Terminal, Cpu, Database, Layers, Mail } from 'lucide-react';
import { playHudBeep } from '../audio/soundSynth';

export default function Navbar() {
  const { isIronManMode, audioEnabled, toggleAudio } = useStarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  // Live Malibu California time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: isIronManMode ? "DOSSIER" : "OVERVIEW", href: "#hero" },
    { label: isIronManMode ? "ARSENAL" : "MASTERIES", href: "#skills" },
    { label: isIronManMode ? "TECH LAB" : "INVENTIONS", href: "#tech" },
    { label: "HALL OF ARMOR", href: "#hall-of-armor" },
    { label: isIronManMode ? "HUD WIREFRAME" : "BLUEPRINTS", href: "#blueprint-hud" },
    { label: "JARVIS AI", href: "#jarvis" },
    { label: isIronManMode ? "SECURE UPLINK" : "CONTACT", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    playHudBeep(1400);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isIronManMode
            ? 'bg-black/85 border-b border-iron-red/40 shadow-arc-red backdrop-blur-md py-2.5'
            : 'bg-[#080d1a]/85 border-b border-stark-blue/30 shadow-arc-cyan backdrop-blur-md py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2.5 group"
        >
          <div className={`relative w-8 h-8 rounded border flex items-center justify-center transition-all ${
            isIronManMode
              ? 'border-iron-red bg-red-950/40 text-yellow-400 group-hover:border-yellow-400'
              : 'border-stark-blue bg-cyan-950/40 text-stark-blue group-hover:border-white'
          }`}>
            <span className="font-orbitron font-extrabold text-sm tracking-tighter">S</span>
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-bold text-sm sm:text-base tracking-widest text-white leading-tight">
              {isIronManMode ? 'MARK // TACTICAL' : 'STARK INDUSTRIES'}
            </span>
            <span className="text-[9px] font-tech tracking-widest text-slate-400">
              {isIronManMode ? 'AVENGERS PROTOCOL 85' : 'ADVANCED R&D DIVISION'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`px-3 py-1.5 text-xs font-tech tracking-wider uppercase transition-all rounded hover:bg-white/5 ${
                isIronManMode
                  ? 'hover:text-iron-gold hover:shadow-[0_0_10px_rgba(255,215,0,0.3)]'
                  : 'hover:text-stark-blue hover:shadow-[0_0_10px_rgba(0,240,255,0.3)]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Audio Toggle + Mode Switcher + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Telemetry Clock (Desktop) */}
          <div className="hidden xl:flex flex-col text-right font-tech text-[10px] text-slate-400 pr-2 border-r border-white/10">
            <span className="text-white font-mono">{timeStr} ZULU</span>
            <span className={isIronManMode ? 'text-iron-red' : 'text-stark-blue'}>ARC: 100% ONLINE</span>
          </div>

          {/* Sound / Speech Toggle */}
          <button
            onClick={toggleAudio}
            title={audioEnabled ? "Mute Jarvis & Sound Effects" : "Enable Jarvis Voice & Audio"}
            className={`p-2 rounded border transition-all ${
              audioEnabled
                ? isIronManMode
                  ? 'border-iron-red bg-red-950/40 text-yellow-400'
                  : 'border-stark-blue bg-cyan-950/40 text-stark-blue'
                : 'border-white/10 bg-black/40 text-slate-500'
            }`}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Mode Switcher */}
          <ModeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playHudBeep(1100);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded border border-white/20 text-white hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b transition-all duration-300 ${
          isIronManMode ? 'bg-black/95 border-iron-red/50 text-white' : 'bg-[#090e1c]/95 border-stark-blue/50 text-white'
        } backdrop-blur-xl px-6 py-4 flex flex-col gap-3`}>
          <div className="flex justify-between items-center text-xs font-tech text-slate-400 pb-2 border-b border-white/10">
            <span>LOCATION: MALIBU POINT 10880</span>
            <span className="text-white">{timeStr}</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`py-2 text-sm font-tech tracking-widest uppercase border-b border-white/5 flex items-center justify-between ${
                isIronManMode ? 'hover:text-iron-gold' : 'hover:text-stark-blue'
              }`}
            >
              <span>{link.label}</span>
              <span className="text-xs text-muted-foreground">→</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
