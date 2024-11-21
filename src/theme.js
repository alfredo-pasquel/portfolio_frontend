// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgba(0, 0, 0, 0.5)',
    },
    // ...other palette settings
  },
  // Remove the components.MuiCssBaseline.styleOverrides if it's only setting the background image
  // If you have other global styles, you can keep them here
});

export default theme;
