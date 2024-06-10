/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ["Ribeye", "serif"],
        primary: ["Truculenta", "sans-serif"]
      },
      colors: {
        'blue-dark': '#051923',
        'blue': '#012A4A',
        'blue-light': '#A9D6E5',
        'orange': '#EB5E28'
      }
    },
  },
  plugins: [],
}

