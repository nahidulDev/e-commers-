/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1600px",
      } ,
      fontFamily: {
      dm: ["DM Sans", "sans-serif"],
    },
      colors: {
      textColor: "rgb(118,118,118,1)",
      },
    },
  },
  plugins: [],
}