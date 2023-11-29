/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      colors: {
        "custom-primary-blue": "#001F3F",
        "custom-secondary-brown": "#603434",
        "custom-secondary-blue": "#06b6d4",
        "custom-thirtuary-blue": "#082f49",
        "custom-primary-yellow": "#c8831a", 
        "custom-secondary-yellow": "#c27500",
        "custom-secondary": "#c27500"

      },
    },
  },
plugins:[],
}