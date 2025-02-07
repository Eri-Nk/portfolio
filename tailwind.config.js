/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#062340",
        secondary: "#16a085",
        text: "#4a4a4a",
        bg: "#d9d7d7",
        accent: "#e74c3c",
      },
    },
  },
  plugins: [],
};
