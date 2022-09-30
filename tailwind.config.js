/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/angular-cdk-playground/src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': '#000000',
      'white': '#ffffff',
      'primary': {
        DEFAULT: '#03449E',
        100: '#E6F6FF',
        200: '#BAE3FF',
        300: '#7CC4FA',
        400: '#47A3F3',
        500: '#2186EB',
        600: '#0967D2',
        700: '#0552B5',
        800: '#03449E',
        900: '#01337D',
        1000: '#002159'
      },
      'accent': {
        DEFAULT: '#e4548b',
        100: '#fadde8',
        200: '#f4bbd1',
        300: '#ef98b9',
        400: '#e976a2',
        500: '#e4548b',
        600: '#cd4c7d',
        700: '#a03b61',
        800: '#722a46',
        900: '#44192a'
      },
      'neutral': {
        DEFAULT: '#7B8794',
        100: '#F5F7FA',
        200: '#E4E7EB',
        300: '#CBD2D9',
        400: '#9AA5B1',
        500: '#7B8794',
        600: '#616E7C',
        700: '#52606D',
        800: '#3E4C59',
        900: '#323F4B',
        1000: '#1F2933'
      },
      'info': {
        DEFAULT: '#1CD4D4',
        100: '#E1FCF8',
        200: '#C1FEF6',
        300: '#92FDF2',
        400: '#62F4EB',
        500: '#3AE7E1',
        600: '#1CD4D4',
        700: '#0FB5BA',
        800: '#099AA4',
        900: '#07818F',
        1000: '#05606E'
      },
      'success': {
        DEFAULT: '#3EBD93',
        100: '#EFFCF6',
        200: '#C6F7E2',
        300: '#8EEDC7',
        400: '#65D6AD',
        500: '#3EBD93',
        600: '#27AB83',
        700: '#199473',
        800: '#147D64',
        900: '#0C6B58',
        1000: '#014D40'
      },
      'alert': {
        DEFAULT: '#F7C948',
        100: '#FFFBEA',
        200: '#FFF3C4',
        300: '#FCE588',
        400: '#FADB5F',
        500: '#F7C948',
        600: '#F0B429',
        700: '#DE911D',
        800: '#CB6E17',
        900: '#B44D12',
        1000: '#8D2B0B'
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
        900: '#8A041A',
        1000: '#610316'
      }
    },
    extend: {
      spacing: {
        'xs': '0.25rem', // 4px
        's': '0.5rem', // 8px
        'm': '1rem', // 16px
        'l': '1.5rem', // 24px
        'xl': '2rem', // 32px
        '2xl': '2.5rem', // 40px
        '3xl': '3rem' // 48px
      }
    }
  },
  plugins: []
}
