import React, { useState } from "react";
import lmitsLogo from "../../../assets/images/Logo.png";
import { Button, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Alert } from "@material-ui/lab";
import { Row, Col } from "antd";
import styles from "../../../styles/landing/SignUpForm.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8845d0",
    },
  },
  asterisk: {
    color: "red",
  },
}));

const SignUpForm = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // const [image, setImage] = useState(null);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const onSubmit = (e) => {
    e.preventDefault();
    setMsg("");
    setErrorMsg("");

    if (password === password_confirmation) {
      const signUp = {
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
        mobile_number: localStorage.getItem("lmits_login_mob"),
        image: null,
      };
      setErrorMsg("");
      console.log(signUp);
      axios
        .post(`${process.env.REACT_APP_SIGNUP_DATA}`, signUp)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            // alert(response.data.message);
            setMsg(response.data.message);
          } else if (
            response.data.response_code &&
            response.data.response_code !== 200
          ) {
            // alert(response.data.message);
            setErrorMsg(response.data.message);
          }
        })
        .catch((err) => alert(err));
    } else {
      // alert("Passwords do not match");
      setPassword("");
      setPasswordConfirmation("");
      setErrorMsg("Passwords Do Not Match!");
    }
  };

  return (
    <>
      <Row>
        <Col>
          <div className={styles.sign_up__img}>
            <img alt="LMiTS Logo" src={lmitsLogo} />
            <h3 className={styles.sign_up__title}>Sign Up</h3>
          </div>
        </Col>
      </Row>

      <form onSubmit={onSubmit}>
        <div className={styles.sign_up__error}>
          {msg !== "" ? (
            <div>
              <Alert severity="success">{msg}</Alert>
            </div>
          ) : null}
          {errorMsg !== "" ? (
            <div>
              <Alert severity="error">{errorMsg}</Alert>
            </div>
          ) : null}
        </div>

        <div className={styles.sign_up__form__div}>
          <TextField
            className={`${styles.sign_up__textfield} ${classes.root}`}
            id="FirstName"
            variant="outlined"
            label="First Name"
            value={first_name}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
            }}
            size="small"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.sign_up__form__div}>
          <TextField
            className={`${styles.sign_up__textfield} ${classes.root}`}
            id="LastName"
            variant="outlined"
            label="Last Name"
            value={last_name}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
            }}
            size="small"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles.sign_up__form__div}>
          <TextField
            className={`${styles.sign_up__textfield} ${classes.root}`}
            id="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            label="Email"
            size="small"
          />
        </div>
        <div className={styles.sign_up__form__div}>
          <TextField
            className={`${styles.sign_up__textfield} ${classes.root}`}
            error={
              password !== password_confirmation &&
              password_confirmation.length > 0
            }
            id="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMsg("");
            }}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
            }}
            variant="outlined"
            label="Password"
            size="small"
          />
        </div>
        <div className={styles.sign_up__form__div}>
          <TextField
            className={`${styles.sign_up__textfield} ${classes.root}`}
            error={
              password !== password_confirmation &&
              password_confirmation.length > 0
            }
            id="ConfirmPassword"
            type="password"
            value={password_confirmation}
            onChange={(e) => {
              setPasswordConfirmation(e.target.value);
              setErrorMsg("");
            }}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
            }}
            variant="outlined"
            label="Confirm Password"
            size="small"
          />
        </div>

        <div
          className={`custom-control custom-checkbox ${styles.sign_up__checkbox}`}
        >
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            required
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            I accept the{" "}
            <span onClick={handleClickOpen("paper")}>Terms and Conditions</span>
          </label>
        </div>

        <Dialog
          classes={{ paper: classes.paper }}
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">
            Terms and Conditions
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join("\n")}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <div className={styles.sign_up__btn_div}>
          <Button
            className={styles.sign_up__btn}
            type="submit"
            variant="contained"
            color="primary"
          >
            SignUp
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
