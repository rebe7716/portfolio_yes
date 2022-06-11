module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      /*sort*/
      black: "#000000",
      /*hvid*/
      secondary: "#ffffff",
      /*blue*/
      blue: "#0000FF",
      /*neon*/
      neon: "#ABFF68",
      /*grey*/
      grey: "#EAEAEA",
    },

    fontFamily: {
      montserrat: "'Montserrat', sans-serif;",
      bebasneue: "'Bebas Neue', cursive",
    },

    extend: {
      backgroundImage: {
        gitter: "url('/img/gitter.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
