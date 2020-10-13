import React, { useContext } from 'react';
import logo from '../../assets/images/Logo.png';
import appStoreImg from '../../assets/images/navicons/Appstore.png';
import playStoreImg from '../../assets/images/navicons/Playstore.png';
import profileImg from '../../assets/images/navicons/profile.png';
import loginImg from '../../assets/images/login.svg';
import { Button } from '@material-ui/core';
import LoginWithMail from '../landing/landingModals/LoginWithMail';
import { UserContext } from '../../context/UserContext';
import LoginWithOtp from '../landing/landingModals/LoginWithOtp';
import ForgotPasswordOtp from '../landing/landingModals/ForgotPasswordOtp';
import EnterNewPassword from '../landing/landingModals/EnterNewPassword';
import SignupWithOtp from '../landing/landingModals/SignupWithOtp';
import SignUpForm from '../landing/landingModals/SignUpForm';

// Dialog
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const NavbarTop = () => {
  const [userAuth, setUserAuth] = useContext(UserContext);
  // Dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const authentication = (
    <div className="dv-desktop-menu__login-button b-header__login-button header-login-action">
      <div className="dv-button dv-button-colorless dv-button--small">
        <a href="#popupotplogin">
          <Button
            style={{ outline: 'none' }}
            onClick={() => {
              setUserAuth('1');
            }}
            disableRipple="true"
          >
            Login / Sign Up
          </Button>
        </a>
      </div>
    </div>
  );

  const profHolder = (
    <div className="header_img">
      <a href="">
        <img src={profileImg} alt="" />
      </a>
    </div>
  );

  const modalComponent = () => {
    switch (userAuth) {
      case '1':
        return <LoginWithMail />;
      case '2':
        return <LoginWithOtp />;
      case '3':
        return <ForgotPasswordOtp />;
      case '4':
        return <EnterNewPassword />;
      case '5':
        return <SignupWithOtp />;
      case '6':
        return <SignUpForm />;
      default:
        return <LoginWithMail />;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky">
      <div className="container p-1">
        <a href className="navbar-brand logo">
          <img src={logo} alt="LMiTS" height={20} />
        </a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ui className="navbar-nav ml-auto navbar-center" id="mySidenav"></ui>
          <div className="nav-item">
            <a
              onClick={handleClickOpen}
              className="font-weight-medium pb-0 mb-0 nav-name"
              style={{ color: '#9da9bb' }}
            >
              Download
            </a>
            <a
              className="ml-2 app-store"
              href="https://www.apple.com/in/ios/app-store/"
              target="_blank"
            >
              <img src={appStoreImg} alt="LMiTS" height={25} />
            </a>
            <a
              className="play-store"
              href="https://play.google.com/store?hl=en_IN"
              target="_blank"
            >
              <img src={playStoreImg} alt="LMiTS" height={25} />
            </a>
          </div>
          {/*{!localStorage.getItem("lmits_auth_key")*/}
          {/*  ? authentication*/}
          {/*  : profHolder}*/}
          {authentication}
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
                    <div className="card-body">{modalComponent()}</div>
                  </div>
                  <a className="popup__close" href="#">
                    <i className="fa fa-close"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Dialog
          className={styles.root}
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          disableBackdropClick="true"
        >
          <DialogActions>
            <a onClick={handleClose} className="popup__close m-4" href="#">
              <i className="fa fa-close"></i>
            </a>
          </DialogActions>

          <DialogContent>
            <div className="container dialog-anim">
              <div className="row ">
                <div className="popup__photo col-md-5 m-auto">
                  <img src={loginImg} alt="" />
                </div>
                <div className="popup__text col-md-7">
                  <div className="card-body p-0">{modalComponent()}</div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default NavbarTop;
