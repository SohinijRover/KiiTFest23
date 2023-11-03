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
        thPink:"#dd78ff",
        thGradBlue:"rgba(122, 219, 239, 1)",
        thGradDBlue:"rgba(11, 80, 119, 1)",
        thGradPink:"rgba(187, 9, 128, 1)",
      },
    },
  },
  plugins: [],
};
