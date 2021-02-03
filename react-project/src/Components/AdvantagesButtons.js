import {
  Box,
  makeStyles,
  Grid,
  Button,
  Container,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "black",
  },
  wrapper: {
    padding: "66px",
  },
  wrapperMobile: {
    padding: "40px",
  },
  textRight: {
    textAlign: "-webkit-right",
  },
  textCenter: {
    textAlign: "-webkit-center",
  },
  buttonRight: {
    display: "block",
    margin: "0 0 20px 20px",
    padding: "6px 40px",
  },
  buttonMobile: {
    padding: "6px 40px",
    display: "block",
    margin: "0 0 20px 0",
  },
  button: {
    display: "block",
    margin: "0 20px 20px 0",
    padding: "6px 40px",
  },
}));

function AdvantagesButtons() {
  const theme = useTheme();
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={classes.container}>
      <Container className={mobile ? classes.wrapperMobile : classes.wrapper}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            className={mobile ? classes.textCenter : classes.textRight}
          >
            <Button
              variant="contained"
              className={mobile ? classes.buttonMobile : classes.button}
            >
              Pohlídáme ti tvůj dosah
            </Button>
            <Button
              variant="contained"
              className={mobile ? classes.buttonMobile : classes.button}
            >
              Postaráme se o&nbsp;administrativu
            </Button>
            <Button
              variant="contained"
              className={mobile ? classes.buttonMobile : classes.button}
            >
              Přineseme ti profit
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className={mobile ? classes.textCenter : undefined}
          >
            <Button
              variant="contained"
              color="primary"
              className={mobile ? classes.buttonMobile : classes.buttonRight}
            >
              Žádné poplatky
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={mobile ? classes.buttonMobile : classes.buttonRight}
            >
              Žádné závazky
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={mobile ? classes.buttonMobile : classes.buttonRight}
            >
              Žádné poroučení
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AdvantagesButtons;
