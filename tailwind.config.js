module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        btc_start: "#fc575e",
        btc_end: "#F7931A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
