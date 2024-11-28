/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'neon-green': '#4ADE80',
        'dark-bg': '#0A0A0A',
        'card-bg': '#141414',
        'border': '#2A2A2A',
      },
      maxWidth: {
        '8xl': '1600px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};