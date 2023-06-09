/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // myprimary: "#FFC73B",
      },
      daisyui: {
        themes: [
          {
            mytheme: {
              primary: "#1f2937",

              secondary: "#0c4a6e",

              accent: "#eeaf3a",

              neutral: "#291334",

              "base-100": "#f3f4f6",

              info: "#3abff8",

              success: "#36d399",

              warning: "#fbbd23",

              error: "#f87272",
            },
          },
        ],
      },
    },
  },
  plugins: [require("daisyui")],
};
