/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Midnight: 'Midnight'
      },
      colors: {
        base100: '#0d0512',
        base200: '#271631',
        green: '#79D64D',
        tint: '#AF06FF',
        gray: '#6d6870',
      }
    },
  },
  plugins: [],
}

