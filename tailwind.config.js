/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
   extend:{
    container: {
      center: true,
    },
keyframes:{
  moveRight:{
    "0%":{transform:"translateX(0)"},
    "50%":{transform:"translateX(10px)"},
    "100%":{transform:"translateX(0)"}
  }
},
animation:{
  moveRight:"moveRight 1s ease-in-out infinite"
  
}
   }
  },
  plugins: [],
}