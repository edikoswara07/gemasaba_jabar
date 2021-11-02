const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blueGray: colors.blueGray,
      sky: colors.sky,
      emerald: colors.emerald,
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", '"Open Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
