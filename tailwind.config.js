/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md700: "700px",
      md: "768px",
      lg: "1024px",
      lg1150: "1150px",
      xl: "1280px",
    },
    extend: {
      height: {
        "2px": "2px",
        "calc-sideBar": "calc(100vh - 2rem)",
        "calc-mainbody": "calc(100vh - 5rem)",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/hero-acc.jpg')",
      },
      colors: {
        primary: "#5033c0",
        primaryDark: "#4b31b3",
        iconPurple: "#665bce",
        orange: "#FF934E",
        yellow: "#ffd60a",
        green: "#40CC7C",
        red: "#FF555D",
        blue: "#4180fc",
        blueDark: "#296efa",
        black: "#151515",
        bgWhole: "#171430",
        bgBox: "#24204b",
        activeIcon: "#332d6c",
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
        w30: "30%",
        "calc-mainBody": "calc(100% - 9rem)",
        "calc-cardContainer": "calc(100%-1.25rem)",
      },
    },
  },
  plugins: [],
};
