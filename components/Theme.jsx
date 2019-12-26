import { colors } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'

const palette = {
  primary: {
    main: "#10AFD0",
    contrastText: "#FFFFFF"
  },
  secondary: {
    main: "#294657",
    contrastText: "#FFFFFF"
  },
  text: {
    primary: "#294657",
    secondary: "#294657"
  },
  background: {
    default: "#FFFFFF"
  }
};

const typography = {
  fontFamily: "Avenir",
  fontWeight: 200,
  h1: { fontSize: "36px", lineHeight: "44px" },
  h2: { fontSize: "32px", lineHeight: "40px" },
  h3: { fontSize: "24px", lineHeight: "32px" },
  h4: {
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "3px",
    textTransform: "uppercase"
  },
  h5: { fontSize: "16px", fontWeight: 600 },
  subtitle1: {},
  subtitle2: {},
  body1: { fontSize: "16px", fontWeight: 200 },
  body2: { fontSize: "14px", fontWeight: 200 },
  captin: {},
  button: {
    textTransform: "capitalize",
    fontWeight: 600
  }
};

const shadows = [
  `none`,
  `0 0 0 1px ${colors.grey[300]}`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `0 0 0 1px ${colors.grey[300]}`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`,
  `none`
];

const overrides = {
  MuiAppBar: {
    root: {
      backgroundColor: "transparent"
    }
  },
  MuiButton: {
    root: {},
    sizeLarge: {
      paddingRight: "32px",
      paddingLeft: "32px"
    },
    sizeSmall: {}
  },
  MuiListItem: {
    root: {
      fontSize: "16px",
      fontFamily: "Avenir",

      backgroundColor: "transparent !important",
      "&$selected": {
        backgroundColor: "transparent !important",
        fontWeight: "bold !important"
      },
      "&$selected:hover": {
        backgroundColor: "transparent !important"
      },
      "&:hover": {
        backgroundColor: "transparent !important",
        fontWeight: "bold !important"
      }
    }
  }
};

const theme = createMuiTheme({
  spacing: 8,
  palette,
  typography,
  shadows,
  overrides
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
