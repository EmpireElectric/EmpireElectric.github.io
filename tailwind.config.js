/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
      '2xl': '1768px',
      '3xl': '1920px',
      '4xl': '2000px'
    },
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '15%': {opacity: 0 },
          '100%': {opacity: 1}
        }
      },
      animation: {
        fadein: 'fade 1s linear forwards'
      }
    },
  },
  plugins: [],
}