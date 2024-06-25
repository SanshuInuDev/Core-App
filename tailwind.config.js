/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
<<<<<<< HEAD
  theme: {
    extend: {
      fontSize: {
        5: "20px",
        7.5: "30px"
      },
      fontFamily: {
        "midnight-sans-rd-36": 'midnight-sans-rd-36-regular-pro',
        "midnight-sans-st-36": 'midnight-sans-st-36-regular-pro',
        "midnight-sans-rd-48": 'midnight-sans-rd-48-regular-pro',
        "midnight-sans-st-48": 'midnight-sans-st-48-regular-pro'
=======
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Midnight: 'Midnight'
>>>>>>> ed3159b7d106a8718cc5dc9080f6a2746ed04823
      },
      colors: {
        base100: '#0d0512',
        base200: '#271631',
        green: '#79D64D',
        tint: '#AF06FF',
        gray: '#6d6870',
<<<<<<< HEAD
        red: '#f24822'
=======
>>>>>>> ed3159b7d106a8718cc5dc9080f6a2746ed04823
      }
    },
  },
  plugins: [],
}

