/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      flex: {
        full: '1'
      },
      fontSize: {
        4: "16px",
        5: "20px",
        7.5: "30px"
      },
      fontFamily: {
        "midnight-sans-rd-36": 'midnight-sans-rd-36-regular-pro',
        "midnight-sans-st-36": 'midnight-sans-st-36-regular-pro',
        "midnight-sans-rd-48": 'midnight-sans-rd-48-regular-pro',
        "midnight-sans-st-48": 'midnight-sans-st-48-regular-pro'
      },
      colors: {
        'base-100': '#0d0512',
        'base-200': '#271631',
        green: '#79D64D',
        tint: '#AF06FF',
        gray: '#6d6870',
        red: '#f24822'
      }
    },
  },
  plugins: [],
}

