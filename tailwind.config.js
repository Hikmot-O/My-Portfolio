/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      visibility: ["group-hover"],
      animation: {
        blob: "blob 10s infinite ",
        blob_1: "blob_1 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1.2)",
          },
          "33%": {
            transform: "translate(-200px, -50px) scale(1.25)",
          },
          "66%": {
            transform: "translate(-900px, 20px) scale(1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1.2)",
          },
        },
        blob_1: {
          "0%": {
            transform: "translate(0px, 0px) scale(1.2)",
          },
          "33%": {
            transform: "translate(200px, -50px) scale(1.25)",
          },
          "66%": {
            transform: "translate(900px, 20px) scale(1.1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1.2)",
          },
        },
      }
    },
    backgroundImage: {
      'first': "url('/src/assets/Screenshot.png')"
    }
  },
  plugins: [],
}
