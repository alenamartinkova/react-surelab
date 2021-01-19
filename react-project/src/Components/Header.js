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
    container: {
      backgroundColor: "black"
    },
    link: {
      color: "unset",      
      marginRight: 15,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    linkText: {
      color: "unset",      
      marginRight: 15,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    button: { 
      borderRadius: 20,
      color: "white"
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
        <AppBar position="fixed" className={classes.container}>
            <Container disableGutters>
                <Grid container>
                    <Grid item xs={8} sm={6}>
                    
                            <a
                            href="/"
                            title="React"
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
                                    
                                        <a className={classes.link} href="/" title={"O nás"}>
                                            O NÁS
                                        </a>
                                    
                                </Typography>
                                <Typography
                                variant="body2"
                                component="span"
                                >
                                
                                        <a className={classes.linkText} href="/" title={"Jak to funguje"}>
                                        JAK TO FUNGUJE
                                        </a>
                                    
                                </Typography>
                                <Typography
                                variant="body2"
                                component="span"
                                >
                                    
                                        <a className={classes.linkText} href="/" title={"Kontakt"}>
                                        KONTAKT
                                        </a>
                                    
                                </Typography>
                            </Box>
                            <Box mr={1}>
                                <Button
                                    variant="contained" color="primary"
                                    className={classes.button}
                                >
                                    PŘIHLÁSIT SE
                                </Button>
                            </Box>
                            <Box mr={1}>
                                <Button
                                    variant="outlined" className={classes.button}
                                >
                                    REGISTROVAT
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