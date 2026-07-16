/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "win98-silver": "#C0C0C0",
        "win98-navy": "#000080",
        "win98-gray-border": "#808080",
        "win98-desktop": "#008080",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        win98: ['Tahoma', '"Segoe UI"', '"DejaVu Sans"', '"Lucida Grande"', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
