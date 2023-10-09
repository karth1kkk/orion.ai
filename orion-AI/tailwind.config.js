/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
      margin: {
        'auto':'auto',
        '30': '7.5rem',
        '40': '10rem',
        '50': '12.5rem',
        '60': '15rem',
        '70': '18.5rem',
        '80': '40.5rem',
        '100': '45.5rem',
        '200': '65.5rem',
        '300': '70.5rem',
        '400': '85.5rem',
        '500': '95rem',
        '600': '225.5rem'
      },
    },
  },
  plugins: [],
};
