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
    body2: {
      margin: "0px 20px",
    },
    caption: {
      fontFamily: "Montserrat",
      marginBottom: "5px",
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
        padding: "10px 25px",
      },
      containedPrimary: {
        color: "white",
      },
      outlined: {
        color: "white",
        borderRadius: 55,
        padding: "10px 22px",
        border: "1px solid white",
      },
      outlinedSecondary: {
        color: "black",
        borderRadius: 55,
        padding: "10px 40px",
        border: "1px solid black",
      },
    },
    MuiInputLabel: {
      root: {
        textTransform: "uppercase",
        fontWeight: 600,
      },
    },
    MuiFilledInput: {
      input: {
        padding: 10,
        color: "black",
      },
      root: {
        marginTop: 5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      },
    },
    MuiSvgIcon: {
      root: {
        color: "white",
      },
    },
  },
});

export default theme;
