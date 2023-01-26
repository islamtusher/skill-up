/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        main: "#01438a",
        primary: "#013a78",
        success: "#0099ff",
        secondary: "#028ce8",
      },
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
