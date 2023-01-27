/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          400: "#1d1d1d",
          600: "#aaa",
          700: "#888",
          900: "#222",
        },
      },
    },
  },
  plugins: [],
};
