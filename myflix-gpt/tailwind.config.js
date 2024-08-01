/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ipad': '820px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}