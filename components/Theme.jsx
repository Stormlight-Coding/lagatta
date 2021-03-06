import { colors } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";

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
  fontFamily: "Gotham",
  fontWeight: 200,
  h1: { fontSize: "36px", lineHeight: "44px", fontWeight: 600 },
  h2: {
    fontSize: "22px",
    lineHeight: "30px",
    letterSpacing: "1.32px",
    fontWeight: 600 // medium
    // paddingBottom: "35px"
  },
  h3: {
    fontSize: "18px",
    lineHeight: "21px",
    letterSpacing: "0.36px",
    fontWeight: 600 // medium
    // paddingBottom: "17px"
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
    fontWeight: 200 // light
  },
  body2: { fontSize: "14px", fontWeight: 200 },
  caption: {
    textTransform: "uppercase",
    fontSize: "12px",
    lineHeight: "22px",
    letterSpacing: "1.5px",
    fontWeight: 200 // light
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

    outlinedPrimary: {
      borderColor: "#FFFFFF",
      color: "#FFFFFF"
    }
  },
  MuiListItem: {
    root: {
      fontSize: "16px",
      fontFamily: "Gotham",

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

const { breakpoints: breakpointsCalculated } = theme;

const responsiveTheme = {
  ...theme,
  overrides: {
    MuiTypography: {
      body1: {
        [breakpointsCalculated.only("md")]: {
          fontSize: "14px",
          lineHeight: "24px"
        },
        [breakpointsCalculated.down("sm")]: {
          fontSize: "11px",
          lineHeight: "19px"
        }
      },
      h2: {
        [breakpointsCalculated.down("sm")]: {
          fontSize: "15px",
          lineHeight: "19px",
          letterSpacing: "0.3px"
        }
      },
      paragraph: {
        marginBottom: "35px"
      }
    },

    MuiButton: {
      text: {
        [breakpointsCalculated.down("sm")]: {
          fontSize: "10px",
          lineHeight: "22px",
          fontWeight: 600
        }
      },
      sizeLarge: {
        borderColor: "#FFFFFF",
        color: "#FFFFFF",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "35px",
        paddingLeft: "48px",
        paddingRight: "48px",
        borderRadius: 0,
        [breakpointsCalculated.down("sm")]: {
          fontSize: "11px",
          padding: "6px 32px"
        }
      },
      sizeSmall: {
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "22px",
        padding: "8px 12px",
        borderRadius: 0
      }
    },
    MuiDialog: {
      paperScrollBody: {
        maxWidth: "100% !important",
        width: "100% !important",
        margin: "0 !important",
        [breakpointsCalculated.only("xs")]: {}
      }
    },
    MuiContainer: {
      root: {
        [breakpointsCalculated.down("sm")]: {
          padding: "0 25px"
        }
      }
    }
  }
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={responsiveTheme}>{children}</ThemeProvider>;
};

export default Theme;
