/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['DM Sans']
      },

      colors: {
        Purple100: 'hsl(254, 88%, 90%)',
        Purple500: 'hsl(256, 67%, 59%)',
        Yellow100: 'hsl(31, 66%, 93%)',
        Yellow500: 'hsl(39, 100%, 71%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 7%)',
      }
    },
  },
  plugins: [],
}

