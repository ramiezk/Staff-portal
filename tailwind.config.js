/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from 'tailwind-scrollbar'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeGray: '#B1B2B2',
        themeDarkGray: '#797A7B',
        themeLightGray: '#F2F2F2'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        sora: ['Sora', 'sans-serif']
      }
    },
  },
  plugins: [
    scrollbarPlugin({ nocompatible: true })
  ],
}

