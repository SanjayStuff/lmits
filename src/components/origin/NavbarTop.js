import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png';
import appStoreImg from '../../assets/images/navicons/Appstore.png';
import playStoreImg from '../../assets/images/navicons/Playstore.png';
import profileImg from '../../assets/images/navicons/profile.png';
import loginImg from '../../assets/images/login.svg';
import lmitsLogo from '../../assets/images/Logo.png';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import { Button, Grid, Dialog } from '@material-ui/core';
import CloseIcon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import LoginWithMail from '../landing/landingModals/LoginWithMail';

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    borderRadius: 0,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    position: 'relative',
    maxWidth: '60vw',
    maxHeight: '90vh',
    // minHeight: "75vh",
    // minWidth: 600,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    borderRadius: 0,
    overlay: 'hidden',
  },
}));

const NavbarTop = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [scroll, setScroll] = React.useState('paper');

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
          <img src={loginImg} style={{ height: '100%', width: '100%' }} />
        </Grid>
        <Grid item xs={7} style={{ marginTop: '15px' }}>
          <LoginWithMail />
        </Grid>
      </Grid>
    </div>
  );

  const authentication = (
    <div className="dv-desktop-menu__login-button b-header__login-button header-login-action p-2">
      <div className="dv-button dv-button-colorless dv-button--small">
        <a href="#popupotplogin">
          <Button disableRipple="true">Login / Sign Up</Button>
        </a>
      </div>
      {/* <Modal open={open} onClose={handleOpen} disableBackdropClick={true}>
        {body}
      </Modal> */}
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
              style={{ color: '#9da9bb' }}
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
          {!localStorage.getItem('lmits_auth_key')
            ? authentication
            : profHolder}
        </div>
        <section>
          <div className="row">
            <div className="container">
              <div className="popup" id="popupotplogin">
                <div className="popup-inner">
                  <div className="popup__photo col-md-5">
                    <img src={loginImg} alt="" />
                  </div>
                  <div className="popup__text col-md-7">
                    <div className="card-body">
                      <LoginWithMail />
                    </div>
                  </div>
                  <a className="popup__close" href="#">
                    <i className="fa fa-close"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default NavbarTop;
