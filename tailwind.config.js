/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["**/*.html"],
  theme: {
    fontFamily: {
      'sans': ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        "primary": "#7F265B",
        "secondary": "#FFE6C9",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
      },
    },
  },
  plugins: [],
}

