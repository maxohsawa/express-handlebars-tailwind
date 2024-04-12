/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{html,js,handlebars}",
    "./public/**/*.html",
    // include other directories where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
