/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundColor: {
        'light-color': '#fff',
        'light-color-alt': '#afb6cd',
        'primary-background-color': '#131417',
        'secondary-background-color': '#252830',
        'transparent-light-color': '#fff/0.05',
        'transparent-dark-color': '#000/50',
      },
      colors: {
        'light-color': '#fff',
        'light-color-alt': '#afb6cd',
        'secondary-background-color': '#252830',
      },
      borderColor: {
        'light-color': '#fff',
        'light-color-alt': '#afb6cd',
        'secondary-background-color': '#252830',

      }
    },
  },
  plugins: [],
}