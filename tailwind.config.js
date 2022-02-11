module.exports = {
  purge: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        88: '22rem',
      },
      boxShadow: {
        'form': '0 15px 35px 0 rgba(60,66,87,.08), 0 5px 15px 0 rgba(0,0,0,.12)',
        'inputfocus': "0 0 0 2px #F472B6"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
