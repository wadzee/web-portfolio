import { createMuiTheme } from '@material-ui/core/styles'
import Quicksand from './fonts/quicksand'

// Create a theme instance.
let theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    },
    MuiButton: {
      disableElevation: true
    }
  },
  typography: {
    fontFamily: ['Quicksand', 'sans-serif'].join(', '),
    fontSize: 16,
    h1: {
      fontSize: '3rem',
      color: '#e6f1ff',
      lineHeight: 1,
      letterSpacing: 0
    },
    h2: {
      fontSize: '2rem',
      lineHeight: 1,
      letterSpacing: 0
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.375,
      letterSpacing: '0.09px'
    },
    button: {
      fontSize: '.9375rem',
      fontWeight: 500,
      lineHeight: 2,
      letterSpacing: '.02em',
      borderRadius: 4
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [...Quicksand],
        body: {
          '-webkit-overflow-scrolling': 'touch',
          overflowY: 'scroll',
          scrollbarColor: 'red',
          '&::-webkit-scrollbar': {
            width: '.25rem',
            height: '.05rem'
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(100, 255, 218, 0.7)',
            borderRadius: 10
          }
        }
      }
    }
  },
  palette: {
    common: {
      white: '#e6f1ff'
    },
    primary: {
      main: '#64ffda'
    },
    secondary: {
      main: '#6451e1'
    },
    text: {
      primary: '#ccd6f6'
    },
    background: {
      default: '#171c28'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920
    }
  }
})

export default theme
