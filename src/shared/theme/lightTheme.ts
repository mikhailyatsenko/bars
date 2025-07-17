import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  typography: {
    fontFamily: 'Source Sans Pro',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
    text: {
      primary: '#222',
      secondary: '#555',
    },
  },
  cssVariables: true,
});

export default lightTheme; 