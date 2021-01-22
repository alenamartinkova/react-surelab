import { Box, Typography, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(2)}px 0`,
  },
  preview1: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url(./images/background.png)",
  },
}));

function MainPreview() {
  const classes = useStyles();

  return (
    <Box height="100vh" position="relative">
      <Box
        position="absolute"
        height="100%"
        width="100%"
        className={classes.preview1}
      />
    </Box>
  );
}

export default MainPreview;
