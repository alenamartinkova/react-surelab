import { Box, makeStyles, Typography, Container } from "@material-ui/core";

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
}));

function PartnersPreview() {
  const classes = useStyles();

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
            >
              BUDEME TVÍ PARTNEŘI.
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="h5"
              component="p"
            >
              HREJ, ZPÍVEJ, MY SE POSTARÁME O TVOJE AUTORSKÁ PRÁVA A VEŠKEROU
              ADMINISTRATIVU, A TÍM I O VYŠŠÍ VÝDELKY PRO TEBE.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default PartnersPreview;
