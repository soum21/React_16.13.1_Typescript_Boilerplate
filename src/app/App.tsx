import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './config/theme';
// const useStyles = makeStyles(styles, { classNamePrefix: "Main" });

function App() {
  //   const classes = useStyles();

  return <ThemeProvider theme={theme}>Hello World</ThemeProvider>;
}

export default App;
