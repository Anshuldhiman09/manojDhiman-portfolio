/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22d3ee",
          50: "#ecfeff"
        }
      }
    },
  },
  plugins: [],
}
