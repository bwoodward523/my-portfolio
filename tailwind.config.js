/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'computer-pattern': "url('/src/images/computerbg.jpg')"
      }
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
      transitionProperty: ['hover'],
    },
  },
  plugins: [],
}

