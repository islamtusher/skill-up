/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6ee2ff',
      },
    }
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin')]
}
