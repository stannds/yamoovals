/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat Brush", "cursive"],
        mouse: ["Mouse Memoirs", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
          "100%": { transform: "rotate(-1.5deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
