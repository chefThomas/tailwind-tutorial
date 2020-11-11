module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    boxShadow: {
      default:
        "0 1px 3px 0 rgba(144, 205, 244, 0.1), 0 1px 2px 0 rgba(144, 205, 244, 0.06)",
      lg:
        "0 10px 15px -3px rgba(144, 205, 244,  .7), 0 4px 6px -2px rgba(144, 205, 244,  0.05)",
      xl:
        "0 20px 25px -5px rgba(144, 205, 244,  0.1), 0 10px 10px -5px rgba(144, 205, 244, 0.04)",
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    container: {},
    inset: {
      "1/2": "50%",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
