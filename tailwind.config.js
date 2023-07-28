/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-purple':'hsl(230,80%,71%)',
      }
    },
   
  },
  plugins: [],
}