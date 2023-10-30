/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007cfb",
        secondary: "#1e1e21",
        main: "#051135",
      },
      boxShadow: {
        main: "0px 0px 8px 1px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "header-linear":
          "linear-gradient(0deg, #9f767600 61%, #9f767600 66%, #051135 100%)",
      },
    },
  },
  plugins: [],
};
