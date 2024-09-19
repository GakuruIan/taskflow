/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightmode:{
          50:"#FAF6F5",
          100:"#EFEFF5"
        },
        dark:{
          100:"#262730",
          200:'#14131a',
          300:"#16151C",
        },
        light:"#EFEFF5",
        primary:{
          100:"#616ecf",
          200:"#4931A8"
        },
      },
      fontFamily:{
        saira:['Saira Condensed','sans serif'],
        poppins:['poppins','sans serif']
      }
    },
  },
  plugins: [],
}

