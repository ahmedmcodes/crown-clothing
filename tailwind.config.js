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
    backgroundImage: {
      main: "url('/src/main-section-image.jpg')",
    },
    height: {
      80: "80vh",
      70: "70vh",
    },

    extend: {},
  },
  plugins: [],
};
