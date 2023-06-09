/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maindarkblue: "#1f2937",
        mainlightblue: "#37475A",
        mainpaper: "#FDFBF6",
        mainyellow: "#FFC73B",
        mainbrown: "#78716c",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFC73B",

          secondary: "#FDFBF6",

          accent: "#78716c",

          neutral: "#37475A",

          "base-100": "#111827",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
