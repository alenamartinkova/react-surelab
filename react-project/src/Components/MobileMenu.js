import { Link } from "react-router-dom";
import { Box, Button, Typography, makeStyles } from "@material-ui/core";

import { useContactContext } from "../Contexts/ContactContext";

const useStyles = makeStyles({
  linkText: {
    fontWeight: "bold",
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  hideSelectIcon: {
    display: "none",
  },
  select: {
    background: "none",
    paddingRight: "10px !important",
  },
});

const MobileMenu = ({ onClose }) => {
  const classes = useStyles();
  const { setOpen } = useContactContext();

  return (
    <Box position="fixed" top={0} left={0} right={0} bottom={0} zIndex={2}>
      <Box
        pt={15}
        pb={6}
        boxShadow="0px 5px 20px 0px rgba(0,0,0,0.75)"
        bgcolor="rgba(0, 0, 0, 0.87);"
      >
        <Box mt={5}>
          <Typography
            className={classes.linkText}
            align="center"
            onClick={onClose}
          >
            <Link to="/" className={classes.link}>
              O NÁS
            </Link>
          </Typography>
        </Box>
        <Box mt={5}>
          <Typography
            className={classes.linkText}
            align="center"
            onClick={onClose}
          >
            <Link to="/jak-to-funguje" className={classes.link}>
              JAK TO FUNGUJE
            </Link>
          </Typography>
        </Box>
        <Box mt={5} display="flex" justifyContent="center">
          <Button
            variant="outlined"
            className={classes.bold}
            onClick={() => {
              onClose();
              setOpen(true);
            }}
          >
            KONTAKT
          </Button>
        </Box>
      </Box>
      <Box height="100%" onClick={onClose} style={{ background: "#0007" }} />
    </Box>
  );
};

export default MobileMenu;
