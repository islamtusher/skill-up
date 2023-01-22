/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        main: "#100d63",
        // primary: "#0099ff",
        success: "#0099ff",
        secondary: "#028ce8",
      },
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
