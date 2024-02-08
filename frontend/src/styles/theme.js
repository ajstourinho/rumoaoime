import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  // Palette for color scheme
  palette: {
    primary: {
      main: '#26279B',
      contrastText: '#fff',
    },
    // secondary: {
    //   main: '#19857b',
    // },
    // error: {
    //   main: '#f44336',
    // },
    // warning: {
    //   main: '#ffa726',
    // },
    // info: {
    //   main: '#2196f3',
    // },
    // success: {
    //   main: '#4caf50',
    // },
    // background: {
    //   default: '#f7f7f7',
    //   paper: '#fff',
    // },
    // text: {
    //   primary: '#333',
    //   secondary: '#555',
    // },
    rumoaoimeCustomColors: {
      darkBlue: '#26279B',
      darkerBlue: '#1a1b6e',
      matematica: '#7884CB',
      fisica: '#CB9178',
      quimica: '#B2C8AC',
      portugues: '#D9D67D',
      ingles: '#9D6C9B',
      redacao: '#607880',
      lightGrey: grey[300],
      grey: grey[400],
      darkGrey: grey[500],
      darkerGrey: grey[600]
    }
  },

  // You can also include custom properties
  custom: {
    sideBarWidth: '230px',
    topBarHeight: '64px',
    footerHeight: '20px',
    footerAndTopBarHeight: '84px'
  },

  // // Typography for text styling
  // typography: {
  //   fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //   fontSize: 14,
  //   h1: {
  //     fontSize: '2.5rem',
  //   },
  //   h2: {
  //     fontSize: '2rem',
  //   },
  //   h3: {
  //     fontSize: '1.75rem',
  //   },
  //   // ... more styles for h4, h5, h6, subtitle1, subtitle2, body1, body2, etc.
  // },

  // // Custom breakpoints for responsive design
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 960,
  //     lg: 1280,
  //     xl: 1920,
  //   },
  // },

  // // Custom spacing
  // spacing: 8, // This is the base value, and the spacing unit can be a function as well

  // // Shape for common rounded corners
  // shape: {
  //   borderRadius: 4,
  // },

  // // Overrides for specific components
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         textTransform: 'none',
  //         // You can also include states like '&:hover', etc.
  //       },
  //     },
  //   },
  //   // You can include overrides for other components as well
  // },

  // // You can also include custom properties
  // custom: {
  //   myCustomProperty: 'value',
  // },

  // // Any other global properties you want to define
  // // ...
});

export default theme;
