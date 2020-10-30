import React, { useContext } from "react";
import logo from "../../assets/images/Logo.png";
import appStoreImg from "../../assets/images/navicons/Appstore.png";
import playStoreImg from "../../assets/images/navicons/Playstore.png";
import profileImg from "../../assets/images/navicons/profile.png";
import loginImg from "../../assets/images/login.svg";
import { Button, Container } from "@material-ui/core";
import LoginWithMail from "../landing/landingModals/LoginWithMail";
import { UserContext } from "../../context/UserContext";
import LoginWithOtp from "../landing/landingModals/LoginWithOtp";
import ForgotPasswordOtp from "../landing/landingModals/ForgotPasswordOtp";
import EnterNewPassword from "../landing/landingModals/EnterNewPassword";
import SignupWithOtp from "../landing/landingModals/SignupWithOtp";
import SignUpForm from "../landing/landingModals/SignUpForm";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Menu, Typography, Row, Col } from "antd";

const styles = (theme) => ({
  root: {
    overflowX: "hidden",
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#fff",
    backgroundColor: "#8845d0",
    "& :hover": {
      color: "#8845d0",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialog-container": {
      transition: " 0.64s ease-in-out !important",
    },
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "700px",
    },
    "& .MuiDialogContent-root": {
      overflow: "visible",
    },
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle className={classes.root} {...other}>
      {onClose ? (
        <IconButton
          style={{ outline: "none" }}
          disableRipple={true}
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const NavbarTop = () => {
  const [userAuth, setUserAuth] = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const { Text } = Typography;

  const handleClickOpen = () => {
    setOpen(true);
    setUserAuth("1");
  };
  const handleClose = () => {
    setOpen(false);
  };

  const modalComponent = () => {
    switch (userAuth) {
      case "1":
        return <LoginWithMail />;
      case "2":
        return <LoginWithOtp />;
      case "3":
        return <ForgotPasswordOtp />;
      case "4":
        return <EnterNewPassword />;
      case "5":
        return <SignupWithOtp />;
      case "6":
        return <SignUpForm />;
      default:
        return <LoginWithMail />;
    }
  };

  const authentication = (
    <Menu.Item>
      <Button onClick={handleClickOpen} className="login_signup">
        Login <span className="f-10"> / </span> SignUp
      </Button>

      <Dialog
        className={classes.root}
        disableBackdropClick={true}
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></DialogTitle>
        <DialogContent>
          <Container>
            <Row>
              <Col md={10} className="popup__photo m-auto">
                <img src={loginImg} alt="LMiTS Login" />
              </Col>
              <Col md={13} className="popup__text">
                <div className="card-body p-0">{modalComponent()}</div>
              </Col>
            </Row>
          </Container>
        </DialogContent>
      </Dialog>
    </Menu.Item>
  );

  return (
    <div className="header-fluid">
      <div className="header">
        <div className="logo">
          <Link to="">
            <img src={logo} alt="LMiTS Logo" height={20} />
          </Link>
        </div>

        <Menu mode="horizontal" className="flex-setting">
          <Menu.Item className="ant_text_disable nav-name">
            <Text className="font-weight-medium" style={{ color: "#303952" }}>
              Download
            </Text>
          </Menu.Item>

          <Menu.Item>
            <Row>
              <Col>
                <Link
                  className="app-store"
                  to={{ pathname: "https://www.apple.com/in/ios/app-store/" }}
                  target="_blank"
                >
                  <img src={appStoreImg} alt="App Store" width={30} />
                </Link>
              </Col>
              <Col>
                <Link
                  className="play-store"
                  to={{ pathname: "https://play.google.com/store?hl=en_IN" }}
                  target="_blank"
                >
                  <img src={playStoreImg} alt="Play Store" width={30} />
                </Link>
              </Col>
            </Row>
          </Menu.Item>

          {authentication}
        </Menu>
      </div>
    </div>
  );
};

export default NavbarTop;
