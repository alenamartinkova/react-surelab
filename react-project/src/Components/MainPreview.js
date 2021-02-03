import { Box, makeStyles, IconButton } from "@material-ui/core";
import { ArrowDropDown as ArrowDropDownIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  preview1: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url(./images/background.png)",
  },
  white: {
    color: theme.palette.text.primary,
  },
  absoluteIcon: {
    bottom: 0,
    left: "calc(50% - 22px)",
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
      >
        <Box
          margin="0 auto"
          position="absolute"
          className={classes.absoluteIcon}
        >
          <IconButton
            onClick={() =>
              window.scroll({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <ArrowDropDownIcon fontSize="small" className={classes.white} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default MainPreview;
