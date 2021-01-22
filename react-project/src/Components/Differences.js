import {
  Box,
  makeStyles,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { findAllByDisplayValue } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  container: {
    background:
      "linear-gradient(326.53deg, rgba(209, 130, 140, 0.12) 36.29%, rgba(46, 164, 197, 0.5) 105%)",
  },
  wrapper: {
    padding: "95px",
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
}));

function Differences() {
  const classes = useStyles();

  return (
    <Box position="relative" className={classes.container}>
      <Container className={classes.wrapper}>
        <Box width="100%" textAlign="center" marginBottom="60px">
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
        <Grid container className={classes.marginBottom}>
          <Grid item sm={12} md={6} className={classes.textGrid}>
            <Box padding="0 55px 0 0">
              <Typography color="textSecondary" variant="h5" component="h5">
                SMLOUVY BEZ ZÁVAZKŮ
              </Typography>
              <Typography variant="body1" component="p">
                Smlouva mezi námi a tebou je svobodná jako umění samo. Můžeš ji
                kdykoli vypovědět, a spolupráci s námi tak jednoduše ukončit.
                Ale na rovinu ‒ není proč.
              </Typography>
            </Box>

            <Box padding="0 55px 0 0">
              <Typography color="textSecondary" variant="h5" component="h5">
                TRANSPARENTNÍ JEDNÁNÍ
              </Typography>
              <Typography variant="body1" component="p">
                Spolupráce s námi je bez rizika – o nic zkrátka nepřijdeš. Kromě
                důvěry po tobě nic nechceme. Žádné paušální poplatky, žádné
                zbytečné papírování. Jen poctivá práce.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} className={classes.imageGrid}>
            <img
              className={classes.absoluteImg}
              src="./images/differences-first.png"
              alt="singer"
            />
            <img
              className={classes.relativeImg}
              src="./images/differences-second.png"
              alt="drums"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12} md={6} className={classes.imageGrid}>
            <img
              className={classes.absoluteImgLeft}
              src="./images/differences-third.png"
              alt="singer"
            />
            <img
              className={classes.relativeImgLeft}
              src="./images/differences-fourth.png"
              alt="drums"
            />
          </Grid>
          <Grid item sm={12} md={6} className={classes.textGridRight}>
            <Box>
              <Typography color="textSecondary" variant="h5" component="h5">
                MODERNÍ PŘÍSTUP
              </Typography>
              <Typography variant="body1" component="p">
                Na rozdíl od „starých“ agentur neustále hledáme neotřelá řešení
                a sledujeme světové trendy. Takže nové cesty, jak k tobě dostat
                peníze, najdeme dřív než ony.
              </Typography>
            </Box>

            <Box>
              <Typography color="textSecondary" variant="h5" component="h5">
                UNIKÁTNÍ TECHNOLOGIE
              </Typography>
              <Typography variant="body1" component="p">
                Vyvinuli jsme vlastní software, který hlídá, kdy a kde se která
                skladba hrála, víme o každém přehrátí v rádiu, na netu, i o
                špatně odměněném koncertu.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Differences;
