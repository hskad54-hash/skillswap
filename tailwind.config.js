export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1b1b1b", paper: "#fbf6ea", forest: "#1f5e46",
        tangerine: "#ff6b35", sun: "#ffd23f", blush: "#ffb8c6", mint: "#b9e8c8", sky: "#bfe3ff", lilac: "#d9c7ff",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
