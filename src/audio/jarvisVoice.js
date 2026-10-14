// JARVIS Voice Engine using Web Speech API

class JarvisVoiceEngine {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voice = null;
    this.isMuted = false;
    this.isSpeaking = false;
    this.listeners = new Set();
    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;

    const findVoice = () => {
      const voices = this.synth.getVoices();
      if (!voices || voices.length === 0) return;

      // Try finding British English voice (Paul Bettany style)
      const ukMale = voices.find(v => 
        (v.lang === 'en-GB' || v.lang.includes('GB') || v.lang.includes('en_GB')) && 
        (v.name.includes('Male') || v.name.includes('George') || v.name.includes('Daniel') || v.name.includes('Oliver'))
      );

      const ukAny = voices.find(v => v.lang === 'en-GB' || v.lang.includes('GB'));
      const usAny = voices.find(v => v.lang === 'en-US' && (v.name.includes('Natural') || v.name.includes('Guy') || v.name.includes('David')));
      const fallback = voices.find(v => v.lang.startsWith('en')) || voices[0];

      this.voice = ukMale || ukAny || usAny || fallback;
    };

    findVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = findVoice;
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (muted && this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.notifyListeners({ speaking: false, text: '' });
    }
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notifyListeners(data) {
    this.listeners.forEach(fn => fn(data));
  }

  speak(text, priority = false) {
    if (this.isMuted || !this.synth || !text) {
      this.notifyListeners({ speaking: false, text });
      return;
    }

    if (priority || this.synth.speaking) {
      this.synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    if (this.voice) {
      utterance.voice = this.voice;
    }
    
    // Jarvis vocal characteristics: steady, polite, crisp cadence
    utterance.rate = 1.02;
    utterance.pitch = 0.95;
    utterance.volume = 1.0;

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.notifyListeners({ speaking: true, text });
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.notifyListeners({ speaking: false, text: '' });
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.notifyListeners({ speaking: false, text: '' });
    };

    this.synth.speak(utterance);
  }

  cancel() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.notifyListeners({ speaking: false, text: '' });
    }
  }
}

export const jarvisVoice = new JarvisVoiceEngine();
