import { createTheme, Theme } from '@material-ui/core';

export default createTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    }
  }
});

export interface AppTheme extends Theme {
  colors: {
    primary: string;
    border: string;
    error: string;
    placeholder: string;
  };
  /** Default width settings */
  width: {
    input: number;
  };
}
