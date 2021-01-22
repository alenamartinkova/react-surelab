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
    padding: "66px",
  },
  maxWidth: {
    maxWidth: "690px",
    margin: "30px auto",
    textAlign: "center",
  },
  line: {
    width: "calc( 50% - 30px )",
    height: 2,
    background: theme.palette.text.secondary,
    margin: "auto 0",
  },
  circleIcon: {
    height: 60,
    width: 60,
    border: `2px solid ${theme.palette.text.secondary}`,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
  },
  flex: {
    display: "flex",
  },
  box: {
    textAlign: "center",
    maxWidth: "350px",
    margin: "0 auto",
  },
}));

function Plan() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Container className={classes.wrapper}>
        <Box className={classes.maxWidth}>
          <Typography variant="body1" component="p">
            Jsou za tebou desítky koncertů, nebo tě teprve čekají? Hrají se
            tvoje songy v rádiích, nebo se chystáš je tam poslat? Věnuješ se
            popu, rapu, opeře, electru, rocku nebo jazzu?
          </Typography>
        </Box>
        <Box className={classes.maxWidth}>
          <Typography variant="h6" component="span">
            Na tom nezáleží. Máš-li ambice a velké sny, můžeme ti pomoci.
          </Typography>
        </Box>
        <Box className={classes.maxWidth}>
          <Typography variant="body1" component="p">
            Pomůžeme ti dostat odpovídající finanční ohodnocení. Budeme tvý
            parťáci a porosteme s tebou. Ty se můžeš věnovat hudbě naplno, o
            zbytek se postaráme my.
          </Typography>
        </Box>
        <Box margin="10px 0">
          <Grid container>
            <Grid item xs={12} md={4} className={classes.flex}>
              <Box className={classes.circleIcon} ml="auto">
                <img src="./images/key.svg" alt="key" />
              </Box>
              <Box className={classes.line} />
            </Grid>
            <Grid item xs={12} md={4} className={classes.flex}>
              <Box className={classes.line} />
              <Box className={classes.circleIcon}>
                <img src="./images/monitoring.svg" alt="monitoring" />
              </Box>
              <Box className={classes.line} />
            </Grid>
            <Grid item xs={12} md={4} className={classes.flex}>
              <Box className={classes.line} />
              <Box className={classes.circleIcon} mr="auto">
                <img src="./images/money.svg" alt="money" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box margin="10px 0">
          <Grid container>
            <Grid item xs={12} md={4} className={classes.flex}>
              <Box className={classes.box}>
                <Typography variant="h5" component="h5">
                  Promluvíme si spolu
                </Typography>
                <Typography variant="body1" component="p">
                  Nejprve se potkáme, abychom ti vysvětlili, jak to celé
                  funguje. Seznámíme se, povíme si, co od sebe očekáváme, a
                  stanovíme si cíle.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} className={classes.flex}>
              <Box className={classes.box}>
                <Typography variant="h5" component="h5">
                  Promluvíme si spolu
                </Typography>
                <Typography variant="body1" component="p">
                  Následně začneme sledovat a zapisovat každou tvou hudební
                  aktivitu.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} className={classes.flex}>
              <Box className={classes.box}>
                <Typography variant="h5" component="h5">
                  Plusové čísla
                </Typography>
                <Typography variant="body1" component="p">
                  Díky tomu ti každým rokem zajistíme peníze, které ti dosud
                  unikaly. Možná ani nevíš, že na ně máš právo.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Plan;
