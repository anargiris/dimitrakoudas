module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          main: "#2ec4b6",
          secondary: "#cbf3f0",
        },
        yellow: {
          main: "#ff9f1c",
          secondary: "#ffbf69",
        },
      },
      fontFamily: {
        manrope: ['"Manrope"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
