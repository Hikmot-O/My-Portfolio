/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      visibility: ["group-hover"]
    },
    backgroundImage: {
      'first': "url('/src/assets/Screenshot.png')"
    }
  },
  plugins: [],
}
