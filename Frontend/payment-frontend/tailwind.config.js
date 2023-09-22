/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': "#4A5568",
        'secondary': "#E2E8F0",
        'third':"#F7FAFC",
        'fourth':"#718096",
        'fifth':"#3182CE"
        
      },
      fontFamily:{
        'primary': ['Inter'],
      },

      fontSize: {
        xss: '0.60rem',
      }
    },
  },

  plugins: [],
};
