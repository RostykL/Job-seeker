/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "rgb(30 32 36)",
        primaryGray: "rgb(143 144 146)",
        gray100: "rgb(245 248 253)",
      },
    },
  },
  plugins: [],
};
