/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mountain: "url('./src/assets/image 54.png')",
      },
    },
  },
  plugins: [],
};
