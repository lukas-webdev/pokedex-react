module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': {'min': '280px', 'max': '639px'},
      'md': {'min': '640px', 'max': '767px'},
      'lg': {'min': '768px', 'max': '1023px'},
      'xl': {'min': '1024px', 'max': '1279px'},
      '2xl': {'min': '1280px', 'max': '1535px'},
      '3xl': {'min': '1536px', 'max': '1649px'},
      '4xl': {'min': '1650px'},
    },
    scale: {
      '100': '1.00',
      '105': '1.04',
      '110': '1.1',
      '125': '1.25',
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        }
      },
      animation: {
        fadeIn: 'fadeIn 700ms ease-in-out 1s both'
      },
      colors: {
        darkGray: '#252525',
      },
      maxWidth: {
        '8xl': '118.75rem',
      },
      padding: {
        '100': '10vw',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(270px, 1fr))',
      },
      width: {
        '47/100': '47%',
        '140/100': '140%'
      },
    },
  },
  variants: {
    extend: {
      width: ['hover'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
