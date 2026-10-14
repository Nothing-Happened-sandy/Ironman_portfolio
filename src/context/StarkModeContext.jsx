import React, { createContext, useContext, useState, useEffect } from 'react';
import { jarvisVoice } from '../audio/jarvisVoice';
import { playFullSuitUpSequence, playDeSuitSequence, playRepulsorBlast, playReactorPulse, playHudBeep, playTargetLock } from '../audio/soundSynth';

const StarkModeContext = createContext(null);

export function StarkModeProvider({ children }) {
  const [isIronManMode, setIsIronManMode] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [isTransforming, setIsTransforming] = useState(false);
  const [activeSpeech, setActiveSpeech] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [suitOverdrive, setSuitOverdrive] = useState(false);

  // Sync with body class
  useEffect(() => {
    if (isIronManMode) {
      document.body.classList.add('ironman-mode');
    } else {
      document.body.classList.remove('ironman-mode');
    }
  }, [isIronManMode]);

  // Subscribe to voice events
  useEffect(() => {
    const unsubscribe = jarvisVoice.subscribe(({ speaking, text }) => {
      setIsSpeaking(speaking);
      setActiveSpeech(text);
    });
    return unsubscribe;
  }, []);

  // Sync mute state
  useEffect(() => {
    jarvisVoice.setMuted(!audioEnabled);
  }, [audioEnabled]);

  // Initial welcome greeting on first user click anywhere
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioEnabled) {
        jarvisVoice.speak("Welcome to the Stark Industries neural interface. All systems nominal, sir.", false);
      }
      window.removeEventListener('click', handleFirstInteraction);
    };
    window.addEventListener('click', handleFirstInteraction, { once: true });
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [audioEnabled]);

  const toggleMode = () => {
    setIsTransforming(true);

    const nextMode = !isIronManMode;

    if (nextMode) {
      // Switching TO Iron Man
      playFullSuitUpSequence();

      // Timed speech precisely when helmet locks and HUD illuminates
      if (audioEnabled) {
        setTimeout(() => {
          jarvisVoice.speak("Suit deployment sequence complete. Welcome back, Mr. Stark. Mark 85 combat protocols active.", true);
        }, 1700);
      }
    } else {
      // Switching TO Tony Stark
      playDeSuitSequence();

      if (audioEnabled) {
        setTimeout(() => {
          jarvisVoice.speak("Disengaging combat armor. Nanomachine matrix secured. Welcome back to Stark Industries, sir.", true);
        }, 1500);
      }
    }

    // Change visual theme state midway through nanotech wave
    setTimeout(() => {
      setIsIronManMode(nextMode);
    }, 700);

    // Keep transformation overlay active for full 2.4s sequence
    setTimeout(() => {
      setIsTransforming(false);
    }, 2400);
  };

  const fireRepulsor = () => {
    playRepulsorBlast();
    setSuitOverdrive(true);
    setTimeout(() => setSuitOverdrive(false), 800);
  };

  const toggleAudio = () => {
    const nextState = !audioEnabled;
    setAudioEnabled(nextState);
    if (nextState) {
      playHudBeep(1200);
      jarvisVoice.speak("Audio telemetry restored, sir.");
    }
  };

  const speakJarvis = (text) => {
    if (audioEnabled) {
      jarvisVoice.speak(text, true);
    }
  };

  return (
    <StarkModeContext.Provider
      value={{
        isIronManMode,
        toggleMode,
        audioEnabled,
        toggleAudio,
        isTransforming,
        activeSpeech,
        isSpeaking,
        suitOverdrive,
        fireRepulsor,
        speakJarvis
      }}
    >
      {children}
    </StarkModeContext.Provider>
  );
}

export function useStarkMode() {
  const context = useContext(StarkModeContext);
  if (!context) {
    throw new Error('useStarkMode must be used within a StarkModeProvider');
  }
  return context;
}
