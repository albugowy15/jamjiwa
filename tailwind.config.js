const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#28293D",
        bgSecondary: "#2D2F45",
        bgCard: "#373951",
        btnPrimary: "rgba(255, 255, 255, 0.1)",
        btnSecondary: "#3643FC",
        onSurface: "#50527A"
      },
      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
        rFlex: ["Roboto Flex", ...fontFamily.sans]
      }
    },
  },
  plugins: [require("daisyui")],
}
