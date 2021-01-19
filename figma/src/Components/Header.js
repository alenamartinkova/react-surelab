import {
    AppBar,
    Box,
    Container,
    Grid,
    Typography,
    makeStyles,
    Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    linkText: {
      fontWeight: "bold",
      marginRight: 15,
    },
    link: {
      color: "unset",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    bold: {
      fontWeight: "bold",
    },
    logo: {
      height: 45,
      display: "flex",
    },
    hideSelectIcon: {
      display: "none",
    },
    select: {
      background: "none",
      paddingRight: "10px !important",
    },
  }));

function Header() {
    const classes = useStyles();

    // LINKS NOT WORKING
  return (
    <>
        <AppBar position="fixed">
            <Container disableGutters>
                <Grid container>
                    <Grid item xs={8} sm={6}>
                    
                            <a
                            href="/"
                            title="Figma"
                            style={{
                                textDecoration: "none",
                                display: "flex"
                            }}
                            >
                                <img src="./images/logo.png" className={classes.logo} alt="Logo"/>
                            </a>
                        
                    </Grid>
                    <Grid item xs={4} sm={6}>
                        <Box display="flex" justifyContent="flex-end" height="100%">
                            <Box display="flex" alignItems="center" mr={3}>
                                <Typography
                                variant="body2"
                                component="span"
                                >
                                    
                                        <a href="/" title={"O nás"}>
                                            O nás
                                        </a>
                                    
                                </Typography>
                                <Typography
                                variant="body2"
                                component="span"
                                >
                                
                                        <a href="/" title={"Jak to funguje"}>
                                        Jak to funguje
                                        </a>
                                    
                                </Typography>
                                <Typography
                                variant="body2"
                                component="span"
                                >
                                    
                                        <a href="/" title={"Kontakt"}>
                                        Kontakt
                                        </a>
                                    
                                </Typography>
                            </Box>
                            <Box mr={1}>
                                <Button
                                    variant="outlined"
                                    className={classes.bold}
                                >
                                    Přihlásit se
                                </Button>
                            </Box>
                            <Box mr={1}>
                                <Button
                                    variant="outlined"
                                    className={classes.bold}
                                >
                                    Registrovat
                                </Button>
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