/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        display: [
          '"SF Pro Display"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      colors: {
        base: {
          950: '#06060A',
          900: '#0A0A0F',
          850: '#0B0C10',
          800: '#111219',
          700: '#1A1B24',
        },
        accent: {
          blue: '#3B82F6',
          electric: '#2DD4FF',
          violet: '#8B5CF6',
          teal: '#2DD4BF',
          indigo: '#6366F1',
        },
      },
      borderRadius: {
        squircle: '28px',
        card: '24px',
        pill: '999px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.37)',
        glow: '0 0 40px rgba(59, 130, 246, 0.35)',
        'glow-violet': '0 0 40px rgba(139, 92, 246, 0.35)',
        'glow-teal': '0 0 40px rgba(45, 212, 191, 0.3)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-24px) translateX(12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(30px) translateX(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        float: 'float 14s ease-in-out infinite',
        'float-slow': 'float-slow 18s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
