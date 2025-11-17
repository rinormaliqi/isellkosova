// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in',
        'slide-in': 'slideIn 1s ease-out',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'float': 'floating 3s ease-in-out infinite',
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideIn: {
          from: { transform: 'translateY(30px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
        typing: {
          from: { width: 0 },
          to: { width: '100%' },
        },
        'blink-caret': {
          from: { 'border-right-color': 'transparent' },
          '50%': { 'border-right-color': '#fbbf24' },
          to: { 'border-right-color': 'transparent' },
        },
        floating: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 15px)' },
          '100%': { transform: 'translate(0, -0px)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}