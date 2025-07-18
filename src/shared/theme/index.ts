'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data',
  },
  typography: {
    fontFamily: 'Source Sans Pro',
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: { main: '#1976d2' },
        secondary: { main: '#9c27b0' },
        background: { default: '#f5f5f5', paper: '#fff' },
        text: { primary: '#222', secondary: '#555' },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: { main: '#90caf9' },
        secondary: { main: '#ce93d8' },
        background: { default: '#121212', paper: '#1e1e1e' },
        text: { primary: '#fff', secondary: '#bbb' },
      },
    },
  },
});

export default theme;
