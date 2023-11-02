/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        thBlue: "#faa7fa",
        thWhite: "#fff",
        thPink:"#e0aae0",
      },
    },
  },
  plugins: [],
};
