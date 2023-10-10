// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontSize } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/components/**/*.@(ts|tsx)',
    './src/stories/**/*.@(ts|tsx)',
    './src/styles/**/*.@(ts|tsx)'
  ],
  plugins: [],
  theme: {
    colors: {
      ...colors
    },
    fontSize: {
      ...fontSize
    },
    fontFamily: {
      primary: ['Press Start 2P', 'Arial', 'sans-serif'],
      secondary: ['IBM Plex Mono', 'Arial', 'sans-serif']
    }
  },
  extend: {
    minHeight: {
      '3xs': '12rem',
      '2xs': '16rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem'
    },
    maxHeight: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem'
    },
    minWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem'
    },
    maxWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem'
    }
  },
  variants: {
    variantOrder: [
      'first',
      'last',
      'odd',
      'even',
      'visited',
      'checked',
      'group-hover',
      'group-focus',
      'focus-within',
      'hover',
      'focus',
      'focus-visible',
      'active',
      'disabled'
    ]
  }
};
