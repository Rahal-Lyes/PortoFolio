/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Mode sombre via la classe "dark"
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        sixty: ["rouge", "cursive"],
      },
      boxShadow: {
        '3xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // ton shadow-3xl perso
        '4xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',  // encore plus profond
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',     // effet lumineux bleu
      },
    },
  },
  plugins: [],
}
