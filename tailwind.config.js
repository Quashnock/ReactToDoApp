/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora' , serif",
        inter: "'Inter', serif",
        Merienda: "'Merienda', serif"

      }
    },
  },
  plugins: [],
}

