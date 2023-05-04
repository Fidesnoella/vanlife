/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mountain:
          "url('https://res.cloudinary.com/dg5l9o6id/image/upload/v1683204303/image_54_xrrf7e.png')",
      },
    },
  },
  plugins: [],
};
