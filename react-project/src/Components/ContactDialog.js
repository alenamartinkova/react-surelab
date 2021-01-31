import { useEffect, useState } from "react";
import {
  Box,
  Dialog,
  Grid,
  InputLabel,
  TextField,
  Typography,
  makeStyles,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import {
  HighlightOff as CloseIcon,
  CheckCircleRounded as CheckCircleRoundedIcon,
  MailOutline as MailOutlineIcon,
  Phone as PhoneIcon,
  Room as RoomIcon,
} from "@material-ui/icons";

import { useContactContext } from "../Contexts/ContactContext";

const useStyles = makeStyles((theme) => ({
  dialog: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "calc(100% - 64px)",
      padding: `${theme.spacing(0)}px ${theme.spacing(20)}px`,
      overflowX: "hidden",
    },
    [theme.breakpoints.down("sm")]: {
      padding: `${theme.spacing(0)}px ${theme.spacing(6)}px`,
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
  error: {
    boxShadow: "0px 0px 3px 1px rgba(255,0,0,1)",
  },
  succesCheck: {
    fontSize: "10rem",
    color: theme.palette.success.main,
    margin: "auto",
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
  marginY: {
    margin: "auto 0",
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  noBorder: {
    borderRadius: 0,
  },
  iconColor: {
    color: "#cacaca",
    marginRight: "10px",
  },
  button: {
    borderRadius: 0,
    padding: "10px 30px",
  },
  thankYouText: {
    fontWeight: "bold",
    margin: "10px auto 30px",
  },
  center: {
    textAlign: "center",
    marginBottom: 30,
  },
}));

const ContactDialog = ({}) => {
  const classes = useStyles();
  const { open, setOpen } = useContactContext();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      <Box marginTop={8} maxWidth={675}>
        {step === 1 && (
          <>
            <Typography color="primary" variant="h6" align="center">
              Máš otázky? Napiš nám.
            </Typography>
            <Box marginY={9}>
              <Typography
                align="center"
                color="secondary"
                className={classes.bold}
              >
                Napiš nám dotaz, či připomínku do formuláře. Ozveme se co
                nejdříve to půjde.
              </Typography>
              <Typography align="center" color="secondary">
                All the data we collect are subject to the protection of
                personal data of our website.
              </Typography>
              <Box marginY={6}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    className={`${mobile ? "" : classes.rightSpace} ${
                      classes.spaceBottom
                    }`}
                  >
                    <InputLabel>Jméno</InputLabel>
                    <TextField
                      variant="filled"
                      fullWidth
                      id="name"
                      value={data.name}
                      onChange={(e) => {
                        setShowValidation(false);
                        setData({ ...data, name: e.target.value });
                      }}
                      InputProps={{
                        disableUnderline: true,
                      }}
                      className={
                        showValidation && !data.name ? classes.error : undefined
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    className={`${mobile ? "" : classes.leftSpace} ${
                      classes.spaceBottom
                    }`}
                  >
                    <InputLabel>Telefonní číslo</InputLabel>
                    <TextField
                      variant="filled"
                      fullWidth
                      type="tel"
                      value={data.phone}
                      InputProps={{
                        disableUnderline: true,
                      }}
                      onChange={(e) => {
                        setShowValidation(false);
                        setData({ ...data, phone: e.target.value });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.spaceBottom}>
                    <InputLabel>Email</InputLabel>
                    <TextField
                      variant="filled"
                      fullWidth
                      type="email"
                      value={data.email}
                      InputProps={{
                        disableUnderline: true,
                      }}
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
                    <InputLabel>Tvá zpráva</InputLabel>
                    <TextField
                      variant="filled"
                      fullWidth
                      multiline
                      rows={5}
                      value={data.question}
                      InputProps={{
                        disableUnderline: true,
                      }}
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
                </Grid>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    variant="outlinedSecondary"
                    className={classes.button}
                    onClick={handleSubmit}
                  >
                    Poslat
                  </Button>
                </Box>
              </Box>
              <Box>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    className={` ${mobile ? classes.center : undefined} ${
                      classes.flex
                    }`}
                  >
                    <Box>
                      <img src="./images/logo-form.png" height="50" />
                    </Box>

                    <Box>
                      <Typography color="secondary" className={classes.bold}>
                        Kontaktní osoba:
                      </Typography>

                      <Typography color="secondary">
                        {"Marek Pavlík & Lucie Přikrylová"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      display="flex"
                      pl={mobile ? 0 : 3}
                      justifyContent={`${mobile ? "center" : undefined}`}
                    >
                      <Box display="flex">
                        <RoomIcon className={classes.iconColor} />
                        <Typography color="secondary">
                          Kdo ví, Ostrava
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      display="flex"
                      pl={mobile ? 0 : 3}
                      justifyContent={`${mobile ? "center" : undefined}`}
                    >
                      <Box my={4} display="flex">
                        <PhoneIcon className={classes.iconColor} />
                        <Typography color="secondary">
                          Tel.:{" "}
                          <a
                            href="tel:09568 / 89687-12"
                            className={classes.link}
                          >
                            09568 / 89687-12
                          </a>
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      pl={mobile ? 0 : 3}
                      justifyContent={`${mobile ? "center" : undefined}`}
                    >
                      <Box display="flex">
                        <MailOutlineIcon className={classes.iconColor} />
                        <Typography color="secondary">
                          E-Mail:{" "}
                          <a
                            href="mailto:info@surelab.cz"
                            className={classes.link}
                          >
                            info@surelab.cz
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
            <Typography
              variant="h6"
              className={classes.thankYouText}
              color="textSecondary"
            >
              Děkujeme
            </Typography>
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

export default ContactDialog;
