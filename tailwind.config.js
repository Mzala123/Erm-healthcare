/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{ts,js,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            Poppins: ['Poppins'],
            Martian: ['Martian']
        }
    },
  },
  plugins: [],
}

