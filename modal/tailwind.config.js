/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // added custom break-points
      xxxs: {min: "150px", max: "320px"},
      xxs: { min: "320px", max: "577px" },
      xs: { min: "577px" },
      sm: { min: "768px" },
      md: { min: "992px" },
      lg: { min: "1200px" },
      xl: { min: "1440px" },
      "2xl": { min: "1600px" },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}