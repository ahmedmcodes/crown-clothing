/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      righteous: ["Righteous", "cursive"],
      ubuntu: ["Ubuntu Condensed", "sans-serif"],
    },
    gridTemplateColumns: {
      "4-repeat": "repeat(3, 1fr)",
    },

    extend: {},
  },
  plugins: [],
};
