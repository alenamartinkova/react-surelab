import {
  Box,
  makeStyles,
  Typography,
  Container,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background:
      "linear-gradient(326.53deg, rgba(209, 130, 140, 0.12) 36.29%, rgba(46, 164, 197, 0.5) 105%)",
  },
  wrapper: {
    padding: "95px",
  },
  wrapperMobile: {
    padding: "40px",
  },
  absoluteImg: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  absoluteImgLeft: {
    position: "absolute",
    top: 0,
    left: 234,
  },
  relativeImg: {
    margin: "30px 0 0 100px",
  },
  relativeImgLeft: {
    margin: "30px 0 0 0",
  },
  imageGrid: {
    position: "relative",
  },
  textGrid: {
    justifyContent: "space-between",
    flexDirection: "column",
    display: "flex",
  },
  textGridRight: {
    justifyContent: "space-between",
    flexDirection: "column",
    display: "flex",
    paddingLeft: "100px",
  },
  marginBottom: {
    marginBottom: "90px",
  },
  padding: {
    padding: "0 55px 0 0",
  },
  center: {
    textAlign: "center",
  },
  flexReverse: {
    flexDirection: "column-reverse",
  },
  width: {
    width: "100%",
  },
}));

function Differences() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileXS = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  return (
    <Box position="relative" className={classes.container}>
      <Container className={mobile ? classes.wrapperMobile : classes.wrapper}>
        <Box width="100%" textAlign="center" mb={mobile ? 4 : 7}>
          <Box>
            <Typography color="primary" variant="h6" component="span">
              ROZDÍLY
            </Typography>
          </Box>
          <Box className={classes.maxWidth}>
            <Typography variant="h5" component="span">
              Čím se lišíme od "starých" labelů?
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          className={mobile ? classes.center : classes.marginBottom}
        >
          <Grid item xs={12} md={6} className={classes.textGrid}>
            <Box
              className={!mobile ? classes.padding : undefined}
              mb={mobile ? 4 : 0}
            >
              <Typography color="textSecondary" variant="h5" component="h5">
                SMLOUVY BEZ ZÁVAZKŮ
              </Typography>
              <Typography variant="body1" component="p">
                Smlouva mezi námi&nbsp;a&nbsp;tebou je svobodná jako umění samo.
                Můžeš ji kdykoli vypovědět, a&nbsp;spolupráci s&nbsp;námi tak
                jednoduše ukončit. Ale na&nbsp;rovinu ‒ není proč.
              </Typography>
            </Box>

            <Box
              className={!mobile ? classes.padding : undefined}
              mb={mobile ? 4 : 0}
            >
              <Typography color="textSecondary" variant="h5" component="h5">
                TRANSPARENTNÍ JEDNÁNÍ
              </Typography>
              <Typography variant="body1" component="p">
                Spolupráce s&nbsp;námi je bez rizika – o&nbsp;nic zkrátka
                nepřijdeš. Kromě důvěry po tobě nic nechceme. Žádné paušální
                poplatky, žádné zbytečné papírování. Jen poctivá práce.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imageGrid}>
            {!mobile ? (
              <img
                className={classes.absoluteImg}
                src="./images/differences-first.png"
                alt="singer"
              />
            ) : undefined}
            <img
              className={
                !mobile
                  ? classes.relativeImg
                  : mobileXS
                  ? classes.width
                  : undefined
              }
              src="./images/differences-second.png"
              alt="drums"
            />
          </Grid>
        </Grid>
        <Grid
          container
          className={`${
            mobile ? `${classes.center} ${classes.flexReverse}` : undefined
          }`}
        >
          <Grid item xs={12} md={6} className={classes.imageGrid}>
            {!mobile ? (
              <img
                className={classes.absoluteImgLeft}
                src="./images/differences-third.png"
                alt="singer"
              />
            ) : undefined}
            <img
              className={
                !mobile
                  ? classes.relativeImgLeft
                  : mobileXS
                  ? classes.width
                  : undefined
              }
              src="./images/differences-fourth.png"
              alt="drums"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={!mobile ? classes.textGridRight : undefined}
          >
            <Box mb={mobile ? 4 : 0} mt={mobile ? 4 : 0}>
              <Typography color="textSecondary" variant="h5" component="h5">
                MODERNÍ PŘÍSTUP
              </Typography>
              <Typography variant="body1" component="p">
                Na rozdíl od „starých“ agentur neustále hledáme neotřelá
                řešení&nbsp;a&nbsp;sledujeme světové trendy. Takže nové cesty,
                jak k&nbsp;tobě dostat peníze, najdeme dřív než ony.
              </Typography>
            </Box>

            <Box mb={mobile ? 4 : 0}>
              <Typography color="textSecondary" variant="h5" component="h5">
                UNIKÁTNÍ TECHNOLOGIE
              </Typography>
              <Typography variant="body1" component="p">
                Vyvinuli jsme vlastní software, který hlídá, kdy&nbsp;a&nbsp;kde
                se která skladba hrála, víme o&nbsp;každém přehrátí
                v&nbsp;rádiu, na&nbsp;netu, i&nbsp;o&nbsp;špatně odměněném
                koncertu.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Differences;
