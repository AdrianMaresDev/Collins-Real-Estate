/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        "off-white": "#F5F4F2",
        "dark-yellow": "#EDAB1E"
      },
    },
  },
  plugins: [],
}

