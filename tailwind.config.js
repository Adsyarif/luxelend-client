const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-gradient": {
          "background-image": "linear-gradient(to right, #F3C11A, #FFFFFF)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
