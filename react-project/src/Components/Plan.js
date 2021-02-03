import {
  Box,
  makeStyles,
  Typography,
  Grid,
  Hidden,
  Container,
  useMediaQuery,
} from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background:
      "linear-gradient(143.19deg, rgba(195, 131, 139, 0.13) 40.79%, rgba(46, 164, 197, 0.5) 104.98%)",
  },
  wrapper: {
    padding: "66px",
  },
  wrapperMobile: {
    padding: "40px",
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
  image: {
    maxWidth: 22,
  },
  imageSmaller: {
    maxWidth: 15,
  },
  marginY: {
    margin: "30px auto",
  },
}));

function Plan() {
  const theme = useTheme();
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={classes.container}>
      <Container className={mobile ? classes.wrapperMobile : classes.wrapper}>
        <Box className={classes.maxWidth}>
          <Typography variant="body1" component="p">
            Jsou za tebou desítky koncertů, nebo tě teprve čekají? Hrají se
            tvoje songy v&nbsp;rádiích, nebo se chystáš je tam poslat? Věnuješ
            se popu, rapu, opeře, electru, rocku nebo jazzu?
          </Typography>
        </Box>
        <Box className={classes.maxWidth}>
          <Typography variant="h6" component="span">
            Na tom nezáleží. Máš-li ambice&nbsp;a&nbsp;velké sny, můžeme ti
            pomoci.
          </Typography>
        </Box>
        <Box className={classes.maxWidth}>
          <Typography variant="body1" component="p">
            Pomůžeme ti dostat odpovídající finanční ohodnocení. Budeme tvý
            parťáci a&nbsp;porosteme s&nbsp;tebou. Ty se můžeš věnovat hudbě
            naplno, o&nbsp;zbytek se postaráme my.
          </Typography>
        </Box>
        <Box margin="10px 0">
          <Hidden smDown>
            <Grid container>
              <Grid item xs={12} md={4} className={classes.flex}>
                <Box className={classes.circleIcon} ml="auto">
                  <img
                    src="./images/key.svg"
                    alt="key"
                    className={classes.image}
                  />
                </Box>
                <Box className={classes.line} />
              </Grid>
              <Grid item xs={12} md={4} className={classes.flex}>
                <Box className={classes.line} />
                <Box className={classes.circleIcon}>
                  <img
                    src="./images/monitoring.svg"
                    alt="monitoring"
                    className={classes.image}
                  />
                </Box>
                <Box className={classes.line} />
              </Grid>
              <Grid item xs={12} md={4} className={classes.flex}>
                <Box className={classes.line} />
                <Box className={classes.circleIcon} mr="auto">
                  <img
                    src="./images/money.svg"
                    alt="money"
                    className={classes.imageSmaller}
                  />
                </Box>
              </Grid>
            </Grid>
          </Hidden>
        </Box>
        <Box margin="10px 0">
          <Grid container>
            <Grid item xs={12} md={4} className={classes.flex}>
              <Box
                className={`${mobile ? classes.marginY : undefined} ${
                  classes.box
                }`}
              >
                <Typography variant="h5" component="h5">
                  Promluvíme si spolu
                </Typography>
                {mobile ? (
                  <Box
                    height={3}
                    width={55}
                    bgcolor="secondary.main"
                    margin="0 auto 10px"
                  />
                ) : undefined}
                <Typography variant="body1" component="p">
                  Nejprve se potkáme, abychom ti vysvětlili, jak to celé
                  funguje. Seznámíme se, povíme si, co od sebe očekáváme,
                  a&nbsp;stanovíme si cíle.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} className={classes.flex}>
              <Box
                className={`${mobile ? classes.marginY : undefined} ${
                  classes.box
                }`}
              >
                <Typography variant="h5" component="h5">
                  Promluvíme si spolu
                </Typography>
                {mobile ? (
                  <Box
                    height={3}
                    width={55}
                    bgcolor="secondary.main"
                    margin="0 auto 10px"
                  />
                ) : undefined}
                <Typography variant="body1" component="p">
                  Následně začneme sledovat&nbsp;a&nbsp;zapisovat každou tvou
                  hudební aktivitu.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} className={classes.flex}>
              <Box
                className={`${mobile ? classes.marginY : undefined} ${
                  classes.box
                }`}
              >
                <Typography variant="h5" component="h5">
                  Plusové čísla
                </Typography>
                {mobile ? (
                  <Box
                    height={3}
                    width={55}
                    bgcolor="secondary.main"
                    margin="0 auto 10px"
                  />
                ) : undefined}
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
