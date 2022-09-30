/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
