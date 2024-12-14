/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['36px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['64px', '72px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        coda: ['Coda', 'sans-serif'],
        header: ['Michroma', 'sans-serif'],
        subheader: ['Electrolize', 'sans-serif'],
        body: ['Kanit', 'sans-serif'],
      },
      colors: {
        "black": "#0d0208",
        "charcoal": "#353535",
        "white": "#F6F6F6",
        "dark-green": "#003b00",
        "green": "#008f11",
        "light-green": "#00ff41",
        "marigold-yellow" : "#ebb538",
        "coral-red" : "#f54242",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      animation: {
        matrix: 'matrix 1.5s linear infinite',
      },
      keyframes: {
        matrix: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
      },
    },
  },
  plugins: [],
}