import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  Grid,
  InputLabel,
  TextField,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import {
  CheckBoxSharp as CheckBoxSharpIcon,
  CheckCircleRounded as CheckCircleRoundedIcon,
  MailOutline as MailOutlineIcon,
  Phone as PhoneIcon,
  Room as RoomIcon,
  HighlightOff as CloseIcon,
} from "@material-ui/icons";

import { useContactContext } from "../Contexts/ContactContext";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: `${theme.spacing(3)}px ${theme.spacing(6)}px`,
    [theme.breakpoints.down("sm")]: {
      overflowX: "hidden",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "calc(100% - 64px)",
      padding: `${theme.spacing(10)}px ${theme.spacing(20)}px`,
    },
  },
  bold: {
    fontWeight: "bold",
  },
  leftSpace: {
    paddingLeft: 10,
  },
  rightSpace: {
    paddingRight: 10,
  },
  spaceBottom: {
    paddingBottom: 20,
  },
  customIcon: {
    fontSize: "1.25rem",
    width: "1em",
    height: "1em",
  },
  iconColor: {
    color: "#cacaca",
  },
  error: {
    boxShadow: "0px 0px 3px 1px rgba(255,0,0,1)",
  },
  succesCheck: {
    fontSize: "10rem",
    color: theme.palette.success.main,
    margin: "auto",
  },
}));

const ContactDialog = ({}) => {
  const classes = useStyles();
  const { open, setOpen } = useContactContext();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [step, setStep] = useState(1);
  const [showValidation, setShowValidation] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
    newsletter: false,
  });

  useEffect(() => {
    if (open) {
      setData({
        name: "",
        phone: "",
        email: "",
        question: "",
        newsletter: false,
      });
      setStep(1);
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (data.name && data.email && data.question) {
      console.log(data);
      setStep(2);
    } else {
      setShowValidation(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ className: classes.dialog }}
      fullScreen={mobile}
      fullWidth={mobile}
    >
      {mobile && (
        <Box position="absolute" right={20} top={15} onClick={handleClose}>
          <CloseIcon />
        </Box>
      )}
      <Box marginTop={3} maxWidth={675}>
        {step === 1 && (
          <>
            <Typography
              color="primary"
              variant="h6"
              align="center"
            ></Typography>
            <Box mt={1}></Box>
            <Box marginY={9}>
              <Typography align="center" className={classes.bold}></Typography>
              <Typography align="center"></Typography>
              <Box marginY={6}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className={`${mobile ? "" : classes.rightSpace} ${
                      classes.spaceBottom
                    }`}
                  >
                    <InputLabel></InputLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="name"
                      value={data.name}
                      onChange={(e) => {
                        setShowValidation(false);
                        setData({ ...data, name: e.target.value });
                      }}
                      className={
                        showValidation && !data.name ? classes.error : undefined
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className={`${mobile ? "" : classes.leftSpace} ${
                      classes.spaceBottom
                    }`}
                  >
                    <InputLabel></InputLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="tel"
                      value={data.phone}
                      onChange={(e) => {
                        setShowValidation(false);
                        setData({ ...data, phone: e.target.value });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.spaceBottom}>
                    <InputLabel></InputLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="email"
                      value={data.email}
                      onChange={(e) => {
                        setShowValidation(false);
                        setData({ ...data, email: e.target.value });
                      }}
                      className={
                        showValidation && !data.email
                          ? classes.error
                          : undefined
                      }
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.spaceBottom}>
                    <InputLabel></InputLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={5}
                      value={data.question}
                      onChange={(e) => {
                        setShowValidation(false);
                        setData({ ...data, question: e.target.value });
                      }}
                      className={
                        showValidation && !data.question
                          ? classes.error
                          : undefined
                      }
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.spaceBottom}>
                    <Box display="flex">
                      <Box display="block">
                        <Checkbox
                          disableRipple
                          icon={
                            <svg
                              className={classes.customIcon}
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M21 3H3v18h18V3z" fill="#dedede" />
                            </svg>
                          }
                          checkedIcon={<CheckBoxSharpIcon fontSize="small" />}
                          checked={data.newsletter}
                          onChange={(e) => {
                            setShowValidation(false);
                            setData({ ...data, newsletter: e.target.checked });
                          }}
                        />
                      </Box>
                      <Box ml={2} display="flex">
                        <Typography variant="caption"></Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end">
                      <Button
                        variant="outlined"
                        onClick={handleSubmit}
                      ></Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box marginX="-40px">
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Box m={3} display="flex" flexDirection="column">
                      <img
                        src="logo.png"
                        height="50"
                        style={{ margin: "auto" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" m={3} pl={3}>
                      <RoomIcon className={classes.iconColor} />
                      <Box ml={2}>
                        <Typography>Ketschenbacher Straße 104a</Typography>
                        <Typography>96465 Neustadt bei Coburg</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box m={3}>
                      <Typography
                        align="center"
                        className={classes.bold}
                      ></Typography>
                      <Typography align="center">{`Thomas Sesselmann & Konstantin Rupp`}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" m={3} pl={3}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        flexDirection="column"
                      >
                        <PhoneIcon className={classes.iconColor} />
                        <MailOutlineIcon className={classes.iconColor} />
                      </Box>
                      <Box ml={2}>
                        <Typography>
                          Tel.:{" "}
                          <a
                            href="tel:09568 / 89687-12"
                            className={classes.link}
                          >
                            09568 / 89687-12
                          </a>
                        </Typography>
                        <Typography>Fax : 09568 / 89687-18</Typography>
                        <Typography>
                          E-Mail:{" "}
                          <a
                            href="mailto:info@dieartwert.de"
                            className={classes.link}
                          >
                            info@dieartwert.de
                          </a>
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </>
        )}
        {step === 2 && (
          <Box display="flex" flexDirection="column">
            <CheckCircleRoundedIcon className={classes.succesCheck} />
            <Typography variant="h6" className={classes.bold}></Typography>
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

export default ContactDialog;
