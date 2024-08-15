/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-yellow": "#F8B707",
        "body-yellow": "#F3B304",
        "custom-red": "#ED3B23",
      },

      fontFamily: {
        kreon: ["Kreon", "sans-serif"],
      },
    },
  },
  plugins: [],
};
