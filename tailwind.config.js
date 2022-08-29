/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#50d8fa',
      },
    }
  },
  plugins: [require("daisyui")]
}
