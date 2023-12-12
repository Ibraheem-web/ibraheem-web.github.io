/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/index.html',
    './layouts/**/*.html',
    './layouts/_default/*.html',
    './layouts/partials/*.html',
    './assets/js/script.js'
  ],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}

