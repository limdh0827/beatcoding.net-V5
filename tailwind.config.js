module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        btc_start: "#fc575e",
        btc_end: "#F7931A",
      },
      backgroundImage: (theme) => ({
        // "hero-pattern": "url('/img/hero-pattern.svg')",
        "btc-logo": "url('/btc.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
