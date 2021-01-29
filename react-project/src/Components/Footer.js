import {
  Box,
  makeStyles,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
  },
  wrapper: {
    padding: "30px 95px 30px 95px",
  },
  hr: {
    margin: "20px 0",
  },
  img: {
    maxWidth: "20px",
    marginRight: "10px",
  },
  flex: {
    alignSelf: "flex-end",
  },
  logo: {
    maxWidth: "112px",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <>
      <Box width="100%" className={classes.container}>
        <Container className={classes.wrapper}>
          <Grid container>
            <Grid item sm={6} xs={12}>
              <Box display="inline-block" marginRight="30px">
                <Typography variant="caption" component="p" color="textPrimary">
                  MEMBER OF SURE.lab GROUP
                </Typography>
                <Typography variant="caption" component="p" color="textPrimary">
                  info@surelab.cz
                </Typography>
              </Box>
              <Box display="inline-block">
                <Typography variant="caption" component="p" color="textPrimary">
                  Ostrava - Nádražní 923/118
                </Typography>
                <Typography variant="caption" component="p" color="textPrimary">
                  702 02
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12} className={classes.flex}>
              <Box display="flex" justifyContent="flex-end" marginRight="10px">
                <img
                  className={classes.img}
                  src="./images/instagram.png"
                  alt="instagram"
                />
                <img
                  className={classes.img}
                  src="./images/facebook.png"
                  alt="facebook"
                />
              </Box>
            </Grid>
          </Grid>
          <hr className={classes.hr} />
          <Grid container>
            <Grid item sm={6} xs={12}>
              <Typography variant="caption" component="p" color="textPrimary">
                SURE.lab Copyright © Surelab-publishers 2020. All Rights
                Reserved
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12} className={classes.flex}>
              <Box display="flex" justifyContent="flex-end" marginRight="10px">
                <img
                  className={classes.logo}
                  src="./images/logo-footer.png"
                  alt="logo"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
