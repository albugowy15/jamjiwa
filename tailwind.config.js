/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: { inter: "Inter", "r-flex": "R-Flex" } },
    colors: {
      gray: {
        "100": "#d9d9d9",
        "200": "#d5d5da",
        "300": "#50527a",
        "400": "#3e405b",
        "500": "#373951",
        "600": "#2d2f45",
        "700": "#28293d",
        "800": "rgba(0, 0, 0, 0.1)",
        "900": "rgba(0, 0, 0, 0.6)",
        "1000": "rgba(255, 255, 255, 0.2)",
        "1100": "rgba(255, 255, 255, 0.6)",
        "1200": "rgba(255, 255, 255, 0.1)",
        "1300": "rgba(255, 255, 255, 0.8)",
      },
      white: "#fff",
    },
    fontSize: {
      sm: "12px",
      base: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "40px",
      "4xl": "60px",
      "5xl": "120px",
    },
    screens: {
      lg: { max: "1200px" },
      md: { max: "768px" },
      sm: { max: "428px" },
    },
  },
  corePlugins: { preflight: false },
};
