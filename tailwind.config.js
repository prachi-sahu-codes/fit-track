/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md700: "700px",
    },
    extend: {
      height: {
        "calc-sideBar":"calc(100vh - 2rem)"
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/hero-acc.jpg')",
      },
      colors: {
        primary: "#5033c0",
        primaryDark: "#4b31b3",
        iconPurple:"#665bce",
        orange:"#FF934E",
        blue:"#4180fc",
        green:"#40CC7C",
        red:"#FF555D",
        black: "#151515",
        bgWhole:"#171430",
        bgBox:"#24204b",
        activeIcon:"#332d6c",
        blackLightBg: "#222",
        bgInput: "#f2ebec",
        gray: "#818181",
        lightGray: "#cfcfcf",
        mediumGray: "#adadad",
        bgColorLoad: "#e2e2e2c4",
        bgModal: "#54545488",
        shadowDark: "#080707",
      },

      spacing: {
        "calc-mainBody": "calc(100% - 9rem)",
      },
    },
  },
  plugins: [],
};
