/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"], // Make sure it covers your files properly
    theme: {
      extend: {
        colors: {
          customDark: '#2f3441', // Added customDark color
        },
        fontFamily: {
          ultra: ['Ultra', 'sans-serif'], // Added Ultra font here
        },
      },
    },
    plugins: [],
  }
  