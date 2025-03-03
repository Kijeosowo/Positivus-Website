module.exports = {
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "scroll-left": "scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
};
