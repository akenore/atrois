/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        captura: ["Captura", "cursive"],
        capturaItalic: ["Captura-italic", "cursive"],
        myriadpro: ["MyriadPro", "cursive"],
        myriadproSemi: ["MyriadPro-semi", "cursive"],
      },
      fontSize: {
        '2xl': ['64', {
          fontWeight: '700'
        }]
      },
      colors: {
        'custom-purple' : '#646FD4'
        // custom_purple: {
        //   light: '#646FD4',
        //   DEFAULT: '#646FD4',
        //   dark: '#646FD4'
        // }
      }
      // backgroundImage: {
      //   'bg' : "url('./src/assets/bg.svg')"
      // }
    },
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'media',
}