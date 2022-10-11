/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/angular-cdk-playground/src/**/*.{html,ts}",
    "./projects/angular-cdk-docs/src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontSize: {
      'xs': '0.75rem', // 12px (small text app)
      'sm': '0.875rem', // 14px (body text app + small text marketing)
      'base': '1rem', // 16px (body text marketing + large text app)
      'lg': '1.125rem', // 18px (section headline app + large text marketing)
      'xl': '1.5rem', // 24px (page headline app)
      '2xl': '2rem', // 32px (section headline marketing)
      '3xl': '4rem' // 64px (page headline marketing)
    },
    borderRadius: {
      DEFAULT: '0.25rem',
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px'
    },
    spacing: {
      '0': '0', // 0px
      '1/4': '0.125rem', // 2px
      '1/2': '0.25rem', // 4px
      '1': '0.5rem', // 8px
      '2': '1rem', // 16px
      '3': '1.5rem', // 24px
      '4': '2rem',// 32px
      '8': '4rem', // 64px
      '16': '8rem', // 128px
      '20': '12rem', // 192px
      '24': '16rem' // 256px
    },
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': '#000000',
      'white': '#ffffff',
      'primary': {
        DEFAULT: '#5dd8c4',
        100: "#dff7f3",
        200: "#beefe7",
        300: "#9ee8dc",
        400: "#7de0d0",
        500: "#5dd8c4",
        600: "#4aad9d",
        700: "#388276",
        800: "#25564e",
        900: "#132b27"
      },
      'accent': {
        DEFAULT: '#8583c4',
        100: "#e7e6f3",
        200: "#cecde7",
        300: "#b6b5dc",
        400: "#9d9cd0",
        500: "#8583c4",
        600: "#6a699d",
        700: "#504f76",
        800: "#35344e",
        900: "#1b1a27"
      },
      'neutral': {
        DEFAULT: '#FFFFFF',
        50: '#FFFFFF',
        100: '#FAFBFC',
        200: '#F4F5F7',
        300: '#C2C5CC',
        400: '#ACB0BA',
        500: '#969BA7',
        600: '#515761',
        700: '#383C43',
        800: '#383C43', // default text color, shade-1 in dark mode
        900: '#1E2024',
        1000: '#050506'
      },
      'info': {
        DEFAULT: '#5486c1',
        100: "#dde7f3",
        200: "#bbcfe6",
        300: "#98b6da",
        400: "#769ecd",
        500: "#5486c1",
        600: "#436b9a",
        700: "#325074",
        800: "#22364d",
        900: "#111b27"
      },
      'confirm': {
        DEFAULT: '#3EBD93',
        100: '#EFFCF6',
        200: '#C6F7E2',
        300: '#8EEDC7',
        400: '#65D6AD',
        500: '#3EBD93',
        600: '#27AB83',
        700: '#199473',
        800: '#147D64',
        900: '#0C6B58'
      },
      'warn': {
        DEFAULT: '#F7C948',
        100: '#FFFBEA',
        200: '#FFF3C4',
        300: '#FCE588',
        400: '#FADB5F',
        500: '#F7C948',
        600: '#F0B429',
        700: '#DE911D',
        800: '#CB6E17',
        900: '#B44D12'
      },
      'error': {
        DEFAULT: '#E12D39',
        100: '#FFE3E3',
        200: '#FFBDBD',
        300: '#FF9B9B',
        400: '#F86A6A',
        500: '#EF4E4E',
        600: '#E12D39',
        700: '#CF1124',
        800: '#AB091E',
        900: '#8A041A'
      }
    },
    extend: { }
  },
  plugins: []
}
