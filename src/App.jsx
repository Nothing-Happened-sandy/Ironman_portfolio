import React from 'react';
import { StarkModeProvider, useStarkMode } from './context/StarkModeContext';
import Navbar from './components/Navbar';
import HudOverlay from './components/HudOverlay';
import SuitUpCinematicOverlay from './components/SuitUpCinematicOverlay';
import ThreeParticles from './components/ThreeParticles';
import HeroSection from './components/HeroSection';
import SkillsMatrix from './components/SkillsMatrix';
import TechInnovations from './components/TechInnovations';
import HallOfArmor from './components/HallOfArmor';
import TerritoryHudDiagnostic from './components/TerritoryHudDiagnostic';
import JarvisTerminal from './components/JarvisTerminal';
import AvengersTimeline from './components/AvengersTimeline';
import ContactStark from './components/ContactStark';
import Footer from './components/Footer';

function StarkPortfolio() {
  const { isTransforming } = useStarkMode();

  return (
    <div className={`relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-700 selection:bg-cyan-500 selection:text-black ${
      isTransforming ? 'transforming-page' : ''
    }`}>
      {/* Cinematic Full-Screen Suit-Up / De-Suiting Overlay */}
      <SuitUpCinematicOverlay />

      {/* 3D WebGL Particle System Background */}
      <ThreeParticles />

      {/* Cybernetic Tech Grid and Scanline Overlay */}
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="fixed inset-0 hud-scanline pointer-events-none opacity-30 z-0" />

      {/* HUD Edge Telemetry & Subtitles */}
      <HudOverlay />

      {/* Futuristic Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10 space-y-12">
        <HeroSection />
        <SkillsMatrix />
        <TechInnovations />
        <HallOfArmor />
        <TerritoryHudDiagnostic />
        <JarvisTerminal />
        <AvengersTimeline />
        <ContactStark />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <StarkModeProvider>
      <StarkPortfolio />
    </StarkModeProvider>
  );
}
