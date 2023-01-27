/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primaryColor: "#01B994",
      black: {
        400: "#1d1d1d",
        600: "#aaa",
        700: "#888",
        900: "#222",
      },
      green: {
        100: "#DCF0EE",
        400: "#7AFEF4",
        600: "#01B992",
      },
    },
  },
  plugins: [],
};
