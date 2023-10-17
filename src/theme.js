import { createTheme } from '@mui/material/styles';
import Colors from './constants/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(124, 89, 216, 1)',
      light: 'rgba(209, 196, 245, 0.6)'
    },
    error: {
      main: Colors.orRed,
    },
    secondary:{
      main: Colors.orBlue,
      light: Colors.orLightBlue,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '3.4rem',
      color: '#313b46',
      letterSpacing: '0.01em'
    },
    h2: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '2.4em',
      color: '#313b46'
    },
    h3: {
      fontFamily: 'Inter',
      fontWeight: '600',
      fontSize: '1.4em',
      color: '#313b46'
    },
    h4: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '2em',
      color: '#313b46'

    },
    h5: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '1.8em',
      color: '#313b46'

    },
    h6: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '1.2em',
      color: '#313b46'
    },
    subtitle1: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '1.2em',
      color: Colors.orPurple
    },
    subtitle2: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '1em',
      textTransform: 'capitalize',
      color: '#313b46',
    },
    body1: {
      fontFamily: 'Inter',
      fontWeight: '400',
      fontSize: '1em',
      color: '#313b46'
    },
    body2: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '0.8em',
      color: '#7C8694',
      letterSpacing: '0.02em'
    },
    button: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '1em',
      color: '#313b46',
      textTransform: 'none',
      letterSpacing: '0.04em'
    },
    caption: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '1em',
      color: '#313b46'
    },
    overline: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '1em',
      color: '#313b46'
    },
  },
});

export default theme;
