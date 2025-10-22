/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B8E3E9',
        secondary: '#93B1B5',
        accent: '#4F7C82',
        dark: '#0B2E33',
      },
    },
  },
  plugins: [],
}