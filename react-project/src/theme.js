import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2EA4C5",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  },
  typography: {
    fontFamily: "Work Sans",

    h5: {
      fontSize: "26px",
      lineHeight: "35px",
      letterSpacing: "-0.015em",
      fontWeight: 500,
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#3131314C",
      },
    },
    MuiButton: {
      root: {
        borderRadius: 55,
        padding: "11px 22px",
      },
      containedPrimary: {
        color: "white",
      },
      outlined: {
        color: "white",
        borderRadius: 55,
        padding: "11px 22px",
        border: "1px solid white",
      },
    },
  },
});

export default theme;
