/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./public/index.html",
    "./public/src/components/Home.jsx",
    './src/**/*.{js,jsx,ts,tsx}'
             
],
    theme: {
        colors:{
          'black':'#000000',
          'blue-900':'#003399',
          'indigo-600':'#3E3BEE',
          'white': '#f9fafb',
          'gray-claro': '#d1d5db', 
        },
      extend: {},
    },
    plugins: [],
  }