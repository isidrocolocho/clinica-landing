/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta esto según la estructura de tu proyecto
  ],
  theme: {
    extend: {
      colors: {
        "verde-musgo": "#527C88", 
        "celeste-aqua": "#89DEE2",
        "azul-navy": "#10217D",
        "verde-aqua": "#009387",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
