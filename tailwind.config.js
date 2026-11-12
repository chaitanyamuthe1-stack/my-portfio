/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080B12',
        surface: '#101522',
        surfaceLight: '#161C2E',
        surfaceCard: '#121829',
        borderDark: '#1E273E',
        borderLight: 'rgba(55, 125, 255, 0.2)',
        primary: '#377DFF',        // Electric Blue
        secondary: '#8957FF',      // Neon Purple
        accentCyan: '#00F0FF',
        textMuted: '#A5AEC0',
        textLight: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(55, 125, 255, 0.45)',
        'glow-purple': '0 0 25px -5px rgba(137, 87, 255, 0.45)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 15px -3px rgba(55, 125, 255, 0.1)',
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(55, 125, 255, 0.15) 0%, rgba(137, 87, 255, 0.1) 50%, rgba(8, 11, 18, 0.95) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
