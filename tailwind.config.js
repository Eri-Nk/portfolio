/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#062340",
        secondary: "#16a085",
        text: "#4a4a4a",
        bg: "#F2F3F5",
        accent: "#e74c3c",
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      fontFamily: {
        sourGummy: ['"Sour Gummy"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
