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
        '@font-face': [...Quicksand]
      }
    }
  },
  palette: {
    common: {
      white: '#fff',
      black: '#333'
    },
    primary: {
      main: '#171c28'
    },
    secondary: {
      main: '#6451e1'
    },
    text: {
      primary: 'rgb(204,214,246)'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1152,
      lg: 1280,
      xl: 1920
    }
  }
})

export default theme
