/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", 'sans-serif'],
      
          sixty: ['rouge', 'cursive'],
      

      
      },
    },
  },
  plugins: [],
}

