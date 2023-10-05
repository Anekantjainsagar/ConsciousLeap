/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightGrey: "#b0b0b4",
        darkGrey: "#383838",
        lightBlack: "#1b1b28",
        websiteBlue: "#4e66ad",
        pinkishRed: "#f58e88",
        oceanGreen: "#7dcfcd",
      },
      screens: {
        mobile: "540px",
      },
      backgroundImage: {
        globe: "url('/app/Assets/globe.png')",
      },
    },
  },
  plugins: [],
};
