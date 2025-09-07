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
      }
    },
  },
  plugins: [],
}