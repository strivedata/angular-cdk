/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'blue': '<%= blue %>'
    },
    extend: {}
  },
  plugins: []
}
