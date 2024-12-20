/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      inter:  ["Inter","Rubik Mono One","serif"],
      'Rubik-Mono-One': ['"Rubik Mono One"', 'sans-serif'],
    },

  },
  plugins: [],
}

