import { Box, makeStyles, Grid, Button, Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    background: "black",
  },
  wrapper: {
    padding: "66px",
  },
  textAlign: {
    textAlign: "-webkit-right",
  },
  buttonRight: {
    display: "block",
    margin: "0 0 20px 20px",
    padding: "6px 40px",
  },
  button: {
    display: "block",
    margin: "0 20px 20px 0",
    padding: "6px 40px",
  },
}));

function AdvantagesButtons() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Container className={classes.wrapper}>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.textAlign}>
            <Button
              variant="contained"
              color="textPrimary"
              className={classes.button}
            >
              Pohlídáme ti tvůj dosah
            </Button>
            <Button
              variant="contained"
              color="textPrimary"
              className={classes.button}
            >
              Postaráme se o administrativu
            </Button>
            <Button
              variant="contained"
              color="textPrimary"
              className={classes.button}
            >
              Přineseme ti profit
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonRight}
            >
              Žádné poplatky
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonRight}
            >
              Žádné závazky
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonRight}
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
