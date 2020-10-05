import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import makeStyles from "@material-ui/core/styles/makeStyles";
// import LoginWithMail from "../landing/landingModals/LoginWithMail";
// import { useHistory } from "react-router";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
        <h3>Modal is working</h3>
      </Container>
    </div>
  );

  return (
    <>
      <>Navbar</>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Login/signUp
      </Button>
      <Modal open={open} onClose={handleClose} disableBackdropClick={true}>
        {body}
      </Modal>
    </>
  );
};

export default NavbarTop;
