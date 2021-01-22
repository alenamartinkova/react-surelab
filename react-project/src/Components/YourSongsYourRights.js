import {
  Box,
  makeStyles,
  Typography,
  Grid,
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
  imageBox: {
    display: "inline-block",
    margin: "auto 15px",
  },
}));

function YourSongsYourRights() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Container className={classes.wrapper}>
        <Box display="flex">
          <Box className={classes.imageBox}>
            <img src="./images/singer-1.png" alt="singer-1" />
          </Box>
          <Box className={classes.imageBox}>
            <img src="./images/singer-2.png" alt="singer-2" />
          </Box>
          <Box className={classes.imageBox}>
            <img src="./images/singer-3.png" alt="singer-3" />
          </Box>
          <Box className={classes.imageBox}>
            <img src="./images/singer-4.png" alt="singer-4" />
          </Box>
        </Box>
        <Box className={classes.maxWidth}>
          <Typography variant="body1" component="p">
            Jsme tady, abychom ti dali naději, že s námi se můžeš věnovat své
            tvorbě naplno. Postaráme se o administrativu, a tak ti zajistíme
            více peněz z koncertů i dalších hudebních aktivit.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
export default YourSongsYourRights;
