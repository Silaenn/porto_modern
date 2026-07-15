/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "y2k-bg": "#1a1a2e",
        "y2k-surface": "#16213e",
        "y2k-pink": "#FF6B9D",
        "y2k-cyan": "#00D4FF",
        "y2k-yellow": "#FFD700",
        "y2k-purple": "#9B59B6",
        "y2k-silver": "#C0C0C0",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        y2k: ['"Fredoka"', "sans-serif"],
        body: ['"Space Grotesk"', "sans-serif"],
        pixel: ['"Press Start 2P"', "cursive"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
