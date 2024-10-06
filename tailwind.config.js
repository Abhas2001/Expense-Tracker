/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        'custom-white': '0 4px 6px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}

