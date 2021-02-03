import {
  Box,
  makeStyles,
  Typography,
  Container,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  preview1: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "linear-gradient(270.35deg, #2EA4C5 3.29%, rgba(0, 0, 0, 0) 99.69%), url(./images/popov.png)",
    display: "flex",
  },
  flex: {
    display: "flex",
  },
  fontSize: {
    fontSize: "18px",
  },
}));

function PartnersPreview() {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box height="50vh">
      <Box height="100%" width="100%" className={classes.preview1}>
        <Container className={classes.flex}>
          <Box margin="auto">
            <Typography
              align="center"
              color="textPrimary"
              variant="h5"
              component="p"
              className={mobile ? classes.fontSize : undefined}
            >
              BUDEME TVÍ PARTNEŘI.
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="h5"
              component="p"
              className={mobile ? classes.fontSize : undefined}
            >
              HREJ, ZPÍVEJ, MY SE POSTARÁME O&nbsp;TVOJE AUTORSKÁ
              PRÁVA&nbsp;A&nbsp;VEŠKEROU ADMINISTRATIVU, A&nbsp;TÍM I
              O&nbsp;VYŠŠÍ VÝDELKY PRO TEBE.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default PartnersPreview;
