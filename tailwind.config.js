/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#003366',
        'secondary': '#66B2FF',
        'tertiary': '#008080',
        'neutral-light': '#F5F5F5',
        'neutral-dark': '#FFFFFF',
        'accent': '#FFD700',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
        'sub': ['Lato', 'sans-serif'],
      },
      keyframes: {
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        fluidGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInSlideUp 0.8s ease-out forwards',
        'button-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fluid-gradient': 'fluidGradient 15s ease infinite',
      },
    },
  },
  plugins: [],
}