/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:{
          100:"#262730",
          200:"#16151C",
        },
        light:"#EFEFF5",
        primary:{
          100:"#616ecf",
          200:"#4931A8"
        },
      },
      fontFamily:{
        rajdhani:['Rajdhani','sans serif'],
        poppins:['poppins','sans serif']
      }
    },
  },
  plugins: [],
}

