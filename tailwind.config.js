/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", //root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all filess in the src sufolders folder
    "./src/*.{js,ts,jsx,tsx}", // Include all files in the src folder,
   
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
