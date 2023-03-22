/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./index.html"],
  theme: {
    screen:{
      'lg' : '1096px'
    },
    colors:{
      'red' : 'hsl(0, 78%, 62%)',
      'cyan': 'hsl(180, 62%, 55%)',
      'orange': 'hsl(34, 97%, 64%)',
      'blue': 'hsl(212, 86%, 64%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      main: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
         'html': { fontSize: "15px" },
       })
     }),
  ],

  "tailwindCSS.rootFontSize": 15
}
