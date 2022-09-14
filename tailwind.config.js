/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0099ff',
        'secondary': '#02f5e9',
      },
    }
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin')]
}
