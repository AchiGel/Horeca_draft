/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/subscribe-bg.jpg')",
      },
      colors: {
        "1c1c1d": "#1c1c1d",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
