import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
import appStoreImg from "../../assets/images/navicons/Appstore.png";
import playStoreImg from "../../assets/images/navicons/Playstore.png";
import profileImg from "../../assets/images/navicons/profile.png";
import loginImg from "../../assets/images/login.svg";
import lmitsLogo from "../../assets/images/Logo.png";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import { Button, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "scroll",
    borderRadius: 0,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    maxWidth: 800,
    maxHeight: 700,
    // minWidth: 600,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
  },
}));

const NavbarTop = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={5}>
          <img src={loginImg} style={{ height: "100%", width: "100%" }} />
        </Grid>
        <Grid item xs={7} style={{ marginTop: "15px" }}>
          <img
            src={lmitsLogo}
            // style={{ }}
            style={{
              width: "25%",
              margin: "0.5em",
              padding: "0.5rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <h3
            style={{
              margin: "0.5em",
              padding: "0.5rem",
              marginTop: "0",
              paddingTop: "0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Hello, Welcome Back
          </h3>
          <form>
            <div
              style={{
                margin: "0.5em",
                padding: "0.5rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                id="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="outlined"
                label="Email"
                style={{ minWidth: "350px" }}
              />
            </div>
            <div
              style={{
                margin: "0.5em",
                padding: "0.5em",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                id="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="outlined"
                label="Password"
                style={{ minWidth: "350px" }}
              />
            </div>
            <Grid container>
              <Grid item xs={6}>
                <span style={{ direction: "row", marginLeft: "1em" }}>
                  Login with OTP
                </span>
              </Grid>
              <Grid item xs={6}>
                <span style={{ direction: "row-reverse" }}>
                  Forgot Password?
                </span>
              </Grid>
            </Grid>
            <div
              style={{
                margin: "1rem",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  paddingRight: "4rem",
                  paddingLeft: "4rem",
                  paddingTop: "1rem",
                  fontSize: "1rem",
                  minWidth: "350px",
                }}
              >
                Login
              </Button>
            </div>
            <Grid
              container
              xs={12}
              style={{ marginLeft: "0.5em", marginBottom: "1.5em" }}
            >
              New to Lmits? SignUp
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );

  const authentication = (
    <div className="dv-desktop-menu__login-button b-header__login-button header-login-action p-2">
      <div className="dv-button dv-button-colorless dv-button--small">
        <Button onClick={handleOpen}>Login / Sign Up</Button>
      </div>
      <Modal open={open} onClose={handleClose} disableBackdropClick={true}>
        {body}
      </Modal>
    </div>
  );

  const profHolder = (
    <div className="header_img">
      <a href="">
        <img src={profileImg} alt="" />
      </a>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky">
      <div className="container">
        <a href className="navbar-brand logo">
          <img src={logo} alt="LMiTS" height={20} />
        </a>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ui className="navbar-nav ml-auto navbar-center" id="mySidenav"></ui>
          <div className="nav-item">
            <a
              className="font-weight-medium pb-0 mb-0 nav-name"
              style={{ color: "#9da9bb" }}
            >
              Download
            </a>
            <a
              className="ml-2"
              href="https://www.apple.com/in/ios/app-store/"
              target="_blank"
            >
              <img src={appStoreImg} alt="LMiTS" height={25} />
            </a>
            <a href="https://play.google.com/store?hl=en_IN" target="_blank">
              <img src={playStoreImg} alt="LMiTS" height={25} />
            </a>
          </div>
          {!localStorage.getItem("lmits_auth_key")
            ? authentication
            : profHolder}
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;

// ==============
// <<<<<<< HEAD
//     import React, { useState } from "react";
// import { Button, Container } from "@material-ui/core";
// import Modal from "@material-ui/core/Modal";
// import makeStyles from "@material-ui/core/styles/makeStyles";
// // import LoginWithMail from "../landing/landingModals/LoginWithMail";
// // import { useHistory } from "react-router";
//
// function getModalStyle() {
// return {
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
// };
// }
//
// const useStyles = makeStyles((theme) => ({
// paper: {
//   position: "absolute",
//   width: 400,
//   backgroundColor: theme.palette.background.paper,
//   border: "2px solid #000",
//   boxShadow: theme.shadows[5],
//   padding: theme.spacing(2, 4, 3),
// },
// }));
//
// const NavbarTop = () => {
// const classes = useStyles();
// const [open, setOpen] = useState(false);
// const [modalStyle] = useState(getModalStyle);
//
// const handleOpen = () => {
// setOpen(true);
// };
//
// const handleClose = () => {
// setOpen(false);
// };
//
// const body = (
//     <div style={modalStyle} className={classes.paper}>
//     <Container>
//     <h3>Modal is working</h3>
// </Container>
// </div>
// );
//
// return (
// <>
// <>Navbar</>
// <Button onClick={handleOpen} variant="contained" color="primary">
// Login/signUp
// </Button>
// <Modal open={open} onClose={handleClose} disableBackdropClick={true}>
// {body}
// </Modal>
// </>
// =======
