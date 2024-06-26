/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightBrown:"#c9a07e",
        lightOrange: "#d5532057",
        lightBlue:"#87ceeb"
      },
      boxShadow:{
        "3xl":"0 0px 50px -12px rgb(0 0 0 / 0.75)",
      }

    },
  },
  plugins: []
}