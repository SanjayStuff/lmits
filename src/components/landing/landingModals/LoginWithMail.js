import React, { useState } from "react";
import NavbarTop from "../../origin/NavbarTop";
import Modal from "@material-ui/core/Modal";

const LoginWithMail = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavbarTop />
      <Modal open={open} onClose={handleClose}>
        <h3>Login with Mail, or Phone Number with Password</h3>
      </Modal>
    </>
  );
};

export default LoginWithMail;
