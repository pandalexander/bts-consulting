/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      specialSerif: ["Playfair", "serif"],
    },
    extend: {
      colors: {
        brandDark: "#18171B",
        brandAccentBlue: "#5C9FD9",
      },
    },
  },

  plugins: [],
};
