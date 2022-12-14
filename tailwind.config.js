/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { inter: "Inter", roboto: "Roboto", "r-flex": "R-Flex" },
    },
    colors: {
      gray: {
        "100": "#d9d9d9",
        "200": "#d5d5da",
        "300": "#50527a",
        "400": "#1262af",
        "500": "#3e405b",
        "600": "#424242",
        "700": "#373951",
        "800": "#2d2f45",
        "900": "#28293d",
        "1000": "rgba(0, 0, 0, 0.6)",
        "1100": "rgba(255, 255, 255, 0.1)",
        "1200": "rgba(0, 0, 0, 0.1)",
        "1300": "rgba(255, 255, 255, 0.2)",
        "1400": "rgba(255, 255, 255, 0.6)",
        "1500": "rgba(255, 255, 255, 0.8)",
      },
      white: { "100": "#ffffff", "200": "#fff" },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
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
