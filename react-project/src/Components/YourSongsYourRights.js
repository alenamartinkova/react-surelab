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
  wrapperMobileImage: {
    padding: "40px 0",
  },
  wrapperMobile: {
    padding: "0 20px",
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
      <Container
        className={mobile ? classes.wrapperMobileImage : classes.wrapper}
      >
        <Box display="flex" overflow="scroll">
          <Box className={classes.imageBox} paddingLeft={2}>
            <img src="./images/singer-1.png" alt="singer-1" />
          </Box>
          <Box className={classes.imageBox}>
            <img src="./images/singer-2.png" alt="singer-2" />
          </Box>
          <Box className={classes.imageBox}>
            <img src="./images/singer-3.png" alt="singer-3" />
          </Box>
          <Box className={classes.imageBox} paddingRight={4}>
            <img src="./images/singer-4.png" alt="singer-4" />
          </Box>
        </Box>
        <Box className={classes.wrapperMobile}>
          <Box className={classes.maxWidth}>
            <Typography variant="body1" component="p">
              Jsme tady, abychom ti dali naději, že s&nbsp;námi se můžeš věnovat
              své tvorbě naplno. Postaráme se o&nbsp;administrativu, a&nbsp;tak
              ti zajistíme více peněz z&nbsp;koncertů&nbsp;i&nbsp;dalších
              hudebních aktivit.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default YourSongsYourRights;
