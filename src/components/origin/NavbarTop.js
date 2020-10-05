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

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "scroll",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    maxWidth: 1200,
    maxHeight: 700,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));

const NavbarTop = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Container>
        <Grid container="true" spacing={2}>
          <Grid item xs={5}>
            <img src={loginImg} style={{ height: "100%", width: "100%" }} />
            {/*<Paper className={classes.paper}>*/}
          </Grid>
          <Grid item xs={7} style={{ marginTop: "15px" }}>
            <img src={lmitsLogo} style={{ width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              aperiam aspernatur atque consectetur consequatur consequuntur
              dolores earum ex, fugiat iure labore nesciunt odit, perspiciatis
              placeat praesentium quidem, sed veniam voluptate.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              consequuntur culpa eaque fugit impedit nisi odio repudiandae.
              Alias consequatur consequuntur delectus eligendi esse pariatur
              quae reprehenderit saepe ullam! Commodi, quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              consequuntur culpa eaque fugit impedit nisi odio repudiandae.
              Alias consequatur consequuntur delectus eligendi esse pariatur
              quae reprehenderit saepe ullam! Commodi, quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              consequuntur culpa eaque fugit impedit nisi odio repudiandae.
              Alias consequatur consequuntur delectus eligendi esse pariatur
              quae reprehenderit saepe ullam! Commodi, quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              consequuntur culpa eaque fugit impedit nisi odio repudiandae.
              Alias consequatur consequuntur delectus eligendi esse pariatur
              quae reprehenderit saepe ullam! Commodi, quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              consequuntur culpa eaque fugit impedit nisi odio repudiandae.
              Alias consequatur consequuntur delectus eligendi esse pariatur
              quae reprehenderit saepe ullam! Commodi, quaerat.
            </p>
          </Grid>
        </Grid>
      </Container>
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
          <div className="dv-desktop-menu__login-button b-header__login-button header-login-action p-2">
            <div className="dv-button dv-button-colorless dv-button--small">
              <Button onClick={handleOpen}>Login / Sign Up</Button>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              disableBackdropClick={true}
            >
              {body}
            </Modal>
          </div>
          <div className="header_img">
            <a href="">
              <img src={profileImg} alt="" />
            </a>
          </div>
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
