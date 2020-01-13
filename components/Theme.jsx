import { colors } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'

const spacing = factor => [0, 3, 8, 15, 20, 30, 85, 90][factor];

const breakpoints = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1440 };

const palette = {
  primary: {
    main: "#262E3B",
    contrastText: "#FFFFFF"
  },
  secondary: {
    main: "#48505C",
    contrastText: "#FFFFFF"
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF"
  },
  background: {
    default: "#FFFFFF"
  }
};

const typography = {
  // fontFamily: "Gotham",
  fontWeight: 200,
  h1: { fontSize: "36px", lineHeight: "44px" },
  h2: {
    fontSize: "22px",
    lineHeight: "30px",
    letterSpacing: "1.32px",
    fontWeight: 400, // book
    paddingBottom: `${spacing * 2}px`
  },
  h3: {
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.36px",
    fontWeight: 400, // book
    paddingBottom: `${spacing}px`
  },
  h4: {
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "3px",
    textTransform: "uppercase"
  },
  h5: { fontSize: "16px", fontWeight: 600 },
  subtitle1: {},
  subtitle2: {},
  body1: {
    fontSize: "16px",
    lineHeight: "30px",
    letterSpacing: "0.06px",
    fontWeight: 400 // book
  },
  body2: { fontSize: "14px", fontWeight: 200 },
  caption: {
    textTransform: "uppercase",
    fontSize: "12px",
    lineHeight: "22px",
    letterSpacing: "1.5px",
    fontWeight: 400 // book
  },
  button: {
    textTransform: "capitalize",
    fontWeight: 400, //book
    letterSpacing: "2px",
    lineHeight: "35px",
    fontSize: "16px"
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
      // backgroundColor: "transparent"
    }
  },
  MuiTypography: {
    paragraph: {
      marginBottom: "35px"
    }
  },
  MuiButton: {
    root: {},
    sizeLarge: {
      paddingRight: "32px",
      paddingLeft: "32px"
    },
    sizeSmall: {},
    outlinedPrimary: {
      borderColor: "#FFFFFF",
      color: "#FFFFFF"
    }
  },
  MuiListItem: {
    root: {
      fontSize: "16px",
      // fontFamily: "Gotham",

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
  spacing,
  palette,
  typography,
  shadows,
  breakpoints,
  overrides
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
