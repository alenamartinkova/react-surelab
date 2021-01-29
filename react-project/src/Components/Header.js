import {
  AppBar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import { useContactContext } from "../Contexts/ContactContext";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(2)}px 0`,
  },
  linkText: {
    color: "white",
    marginRight: 40,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  logo: {
    height: 45,
    display: "flex",
  },
  bold: {
    fontWeight: "bold",
  },
}));

function Header() {
  const classes = useStyles();
  const { setOpen } = useContactContext();

  return (
    <>
      <AppBar position="absolute" className={classes.container}>
        <Container disableGutters>
          <Grid container>
            <Grid item xs={8} sm={5}>
              <Link to="/">
                <img
                  src="./images/logo.png"
                  className={classes.logo}
                  alt="Logo"
                />
              </Link>
            </Grid>
            <Grid item xs={4} sm={7}>
              <Box display="flex" justifyContent="flex-end" height="100%">
                <Box display="flex" alignItems="center" mr={3}>
                  <a href="#aboutUs" className={classes.linkText}>
                    <Typography
                      color="textPrimary"
                      variant="body1"
                      component="span"
                      className={classes.bold}
                    >
                      O NÁS
                    </Typography>
                  </a>
                  <Link to="/jak-to-funguje" className={classes.linkText}>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      component="span"
                    >
                      JAK TO FUNGUJE
                    </Typography>
                  </Link>
                  <Typography
                    variant="body1"
                    component="span"
                    onClick={() => setOpen(true)}
                    className={classes.linkText}
                  >
                    KONTAKT
                  </Typography>
                </Box>
                <Box mr={1}>
                  <Button variant="contained" color="primary">
                    PŘIHLÁSIT SE
                  </Button>
                </Box>
                <Box mr={1}>
                  <Button variant="outlined">REGISTROVAT</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
