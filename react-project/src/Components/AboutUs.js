import {
  Box,
  makeStyles,
  Typography,
  Grid,
  Button,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    background:
      "linear-gradient(143.19deg, rgba(195, 131, 139, 0.13) 40.79%, rgba(46, 164, 197, 0.5) 104.98%)",
  },
  wrapper: {
    padding: "95px",
  },
  maxWidth: {
    maxWidth: "690px",
    margin: "0 auto",
  },
  bold: {
    fontWeight: "bold",
  },
  marginBottom: { marginBottom: "30px" },
  marginBottom90: { marginBottom: "90px" },
  imgWidth: {
    width: "100%",
  },
  padding: {
    paddingRight: "25px",
  },
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <Box position="relative" className={classes.container}>
      <Container className={classes.wrapper}>
        <Box width="100%" textAlign="center" marginBottom="60px">
          <Box>
            <Typography color="primary" variant="h6" component="span">
              O NÁS
            </Typography>
          </Box>
          <Box className={classes.maxWidth}>
            <Typography variant="h5" component="span">
              Jako hudební nakladatelství pomáháme hudebníkům žít si své sny a
              zároveň získat výdělky, které jim za jejich tvorbu právem náleží.
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="​center"
          className={classes.marginBottom90}
        >
          <Grid item md={6} sm={12} className={classes.padding}>
            <img
              className={classes.imgWidth}
              src="./images/zhang-kenny.png"
              alt="zhang"
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography component="p" className={classes.marginBottom}>
              Znáš to: skládáš hudbu, posíláš songy do médií a na streamovací
              servery, hraješ na koncertech.{" "}
              <Typography component="span" className={classes.bold}>
                Je to tvůj svět.
              </Typography>{" "}
              Děje se v něm toho ale hodně. Víš třeba, že vedle honoráře máš z
              každého vystoupení nárok na další odměnu? Zvládneš ohlídat, kdy a
              kde hrála v rádiu tvoje písnička?
            </Typography>

            <Typography component="span" className={classes.bold}>
              Jsme tu pro tebe a pomůžeme ti. Přineseme ti kontrolu nad tím, kde
              se objevila tvoje hudba, a zajistíme ti peníze, které ti z
              muzikantských aktivit plynou. Ty se tak můžeš věnovat tomu, co
              miluješ. Skládej, hrej, o zbytek se postaráme my.
            </Typography>
          </Grid>
        </Grid>
        <Box className={classes.maxWidth} textAlign="center">
          <Typography
            variant="h6"
            component="p"
            className={classes.marginBottom}
          >
            Můžeme být blízcí partněři, nebo jen pomocná ruka na Tvé kariérní
            cestě.
          </Typography>
        </Box>
        <Box
          className={classes.maxWidth}
          display="flex"
          justifyContent="center"
        >
          <Button variant="outlinedSecondary" color="secondary">
            NEZÁVAZNĚ KONTAKTOVAT
          </Button>
          <Box
            spacing={0}
            direction="row"
            alignItems="center"
            display="flex"
            justify="​center"
          >
            <Typography variant="body2" component="p">
              nebo
            </Typography>
          </Box>
          <Button variant="contained" color="primary">
            REGISTROVAT SE
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutUs;
