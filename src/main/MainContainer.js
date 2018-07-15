import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey, blueGrey } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[300],
      main: grey[400],
      dark: grey[700],
      contrastText: grey[700]
    },
    secondary: {
      light: blueGrey[200],
      main: blueGrey[400],
      dark: blueGrey[600],
      contrastText: grey[600]
    }
  }
});

function MainContainer(Component) {
  function MainContainer(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return MainContainer;
}

export default MainContainer;
