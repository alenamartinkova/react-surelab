import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  preview1: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url(./images/background.png)",
  },
}));

function MainPreview() {
  const classes = useStyles();

  return (
    <Box height="150vh" position="relative">
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
