const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    options: {
      fontFace: false, // stops it removing @font-faces
      safelist: [
        
      ]
    }
  },
  darkMode: 'class', // 'media' or 'class'
  theme: {
    cursor: {
      'crosshair': 'crosshair',
      'ew-resize': 'ew-resize',
      ...defaultTheme.cursor,
    },
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
        'cool-gray': colors.coolGray,
        gray: colors.gray,
        'true-gray': colors.trueGray,
        'warm-gray': colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        'light-blue': colors.lightBlue,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose
      },
      // fontFamily: {
      //   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      // }
    },
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    typography: (theme) => ({
      default: {
        css: {
          a: {
            color: theme('colors.green.500'),
            '&:hover': {
              color: theme('colors.green.500'),
              textDecoration: 'underline'
            },
            '&:focus': {
              color: theme('colors.green.500'),
              textDecoration: 'underline'
            }
          },
        },
      },
    })
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus'],
      backgroundOpacity: ['dark', 'group-hover'],
      borderWidth: ['dark'],
      divideColor: ['dark'],
      fontWeight: ['dark'],
      opacity: ['dark'],
      ringColor: ['dark'],
      ringOffsetWidth: ['hover'],
      textColor: ['group-focus', 'group-hover'],
      translate: ['group-hover'],
      visibility: ['group-focus', 'group-hover']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}
