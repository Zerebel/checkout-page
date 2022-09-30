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
      colors: {
        Gray_0: "#4E5150",
        Gray_1: "#333333",
        Gray_2: "#4F4F4F",
        Gray_3: "#828282",
        Gray_4: "#BDBDBD",
        Gray_5: "#E0E0E0",
        Gray_6: "#F2F2F2",
        Orange: "#F2994A",
      },
    },
  },
  plugins: [],
};
