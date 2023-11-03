/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {
      background: '#2C7784',
      backgroundClear: '#2c779a',
      orange: '#FCB62D',
      white: '#FFFF',
      red: {
        DEFAULT: '#FF3030',
        dark: '#BF1D33',
      },
      yellow: {
        DEFAULT: '#FFEA30',
        dark: '#EACC1F'
      } ,
      green: {
        DEFAULT: '#30FF38',
        dark: '#57A22B',
      },
      blue: {
        DEFAULT: '#3083FF',
        dark: '#004D9E',
      },
      text: '#2B2B2B',
    },
    fontFamily: {
      font: ['Josefin Sans', 'italic']
    }
  },
  plugins: [],
}

