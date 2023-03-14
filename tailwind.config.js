/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F9EAC778",
        primary: "#F3D591",
        secondary: "#CEAB5C",
        dark: "#cda557",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
