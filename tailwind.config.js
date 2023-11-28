/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      colors: {
        "custom-primary-blue": "#1e40af",
        "custom-secondary-blue": "#06b6d4",
        "custom-thirtuary-blue": "#082f49",
        "custom-primary-yellow": "#F39200", 
        
        "custom-secondary": "#c27500"

      },
    },
  },
plugins:[],
}