/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'manrope-thin': ['Manrope', 'sans-serif'], // weight 200
        'manrope-light': ['Manrope', 'sans-serif'], // weight 300
        'manrope-regular': ['Manrope', 'sans-serif'], // weight 400
        'manrope-medium': ['Manrope', 'sans-serif'], // weight 500
        'manrope-semibold': ['Manrope', 'sans-serif'], // weight 600
        'manrope-bold': ['Manrope', 'sans-serif'], // weight 700
        'manrope-extrabold': ['Manrope', 'sans-serif'], // weight 800
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        'competition-blue': '#498FC6',
      },
    },
  },
  plugins: [],
};
