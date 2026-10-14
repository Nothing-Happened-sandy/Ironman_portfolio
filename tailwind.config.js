/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        stark: {
          blue: '#00F0FF',
          dark: '#080C14',
          card: '#0D1424',
          border: 'rgba(0, 240, 255, 0.2)',
          accent: '#38BDF8',
          gold: '#C5A059'
        },
        iron: {
          red: '#E62429',
          deepRed: '#960C10',
          gold: '#FFD700',
          dark: '#080507',
          card: '#16080B',
          border: 'rgba(230, 36, 41, 0.3)',
          cyan: '#00F5FF',
          amber: '#FF7700'
        }
      },
      fontFamily: {
        tech: ['Share Tech Mono', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        'arc-cyan': '0 0 25px rgba(0, 240, 255, 0.5), 0 0 50px rgba(0, 240, 255, 0.2)',
        'arc-red': '0 0 25px rgba(230, 36, 41, 0.6), 0 0 50px rgba(255, 119, 0, 0.3)',
        'hud-cyan': 'inset 0 0 15px rgba(0, 240, 255, 0.15), 0 0 15px rgba(0, 240, 255, 0.2)',
        'hud-red': 'inset 0 0 15px rgba(230, 36, 41, 0.2), 0 0 20px rgba(230, 36, 41, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse-slow': 'spinReverse 16s linear infinite',
        'scan': 'scan 2.5s ease-in-out infinite',
      },
      keyframes: {
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' }
        },
        scan: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(1000%)' }
        }
      }
    },
  },
  plugins: [],
}
