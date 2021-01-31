import {
  Box,
  makeStyles,
  Typography,
  useMediaQuery,
  Container,
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
  imageBox: {
    display: "inline-block",
    margin: "auto 15px",
  },
}));

function YourSongsYourRights() {
  const theme = useTheme();
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={classes.container}>
      <Container className={mobile ? classes.wrapperMobile : classes.wrapper}>
        <Box display="flex" overflow="scroll">
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
