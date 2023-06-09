/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // extend: {
    //   colors: {
    //     "base-100": "#1f2937",
    //     primary: "#1f2937",
    //     secondary: "#37475A",
    //     accent: "#FFC73B",
    //   },
    // },
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
  plugins: [require("daisyui")],
};
