/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        text: "var(--text-color)",
        bg: "var(--bg-color)",
        accent: "var(--accent-color)",
        
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
