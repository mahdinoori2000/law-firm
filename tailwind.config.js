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
        "custom-secondary-blue": "#001932",
        "custom-primary-yellow": "#c8831a", 
        "custom-secondary-yellow": "#c27500",
      },
    },
  },
plugins:[],
}