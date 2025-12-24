/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          pgBlue: {
            DEFAULT: '#0056b3', // Основной синий с сайта
            dark: '#003d80',
            light: '#e6f0ff'
          },
          pgOrange: {
            DEFAULT: '#ff6600', // Акцентный оранжевый
            hover: '#e65c00'
          }
        }
      },
    },
    plugins: [],
  }