/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md700: "700px",
    },
    extend: {
      height: {},
      backgroundImage: {
        "hero-pattern": "url('./assets/hero-acc.jpg')",
      },
      colors: {
        primary: "#7265E3",
        primaryDark: "#665bce",
        orange:"#FF934E",
        blue:"#1EC2E5",
        green:"#40CC7C",
        red:"#FF555D",
        black: "#151515",
        blackLightBg: "#222",
        bgInput: "#f2ebec",
        gray: "#818181",
        lightGray: "#cfcfcf",
        mediumGray: "#adadad",
        bgColorLoad: "#e2e2e2c4",
        bgModal: "#54545488",
        shadowDark: "#080707",
      },

      spacing: {},
    },
  },
  plugins: [],
};
