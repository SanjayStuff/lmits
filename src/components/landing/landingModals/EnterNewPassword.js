import React, { useState } from "react";
import lmitsLogo from "../../../assets/images/Logo.png";
import TextField from "@material-ui/core/TextField";
import { Button, makeStyles } from "@material-ui/core";
import axios from "axios";
import { Alert } from "@material-ui/lab";
import styles from "../../../styles/landing/EnterNewPassword.module.css";
import { Row, Col } from "antd";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8845d0",
    },
  },
  asterisk: {
    display: "none",
  },
}));

const EnterNewPassword = () => {
  const classes = useStyles();
  const [new_password, setNewPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  // const [userAuth, setUserAuth] = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  // const [validated, setValidated] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setMsg("");

    if (new_password === password_confirmation) {
      const changePass = {
        update_password_params: {
          phone: localStorage.getItem("lmits_login_mob"),
          new_password,
          password_confirmation,
        },
      };
      console.log(changePass.update_password_params);
      axios
        .post(`${process.env.REACT_APP_FORGOT_CHANGE_PASS}`, changePass)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            // alert(response.data.message);
            localStorage.removeItem("lmits_login_mob");
            setMsg("Password has been changed");
            // history.push("/");
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
      setNewPassword("");
      setPasswordConfirmation("");
      setErrorMsg("Passwords Do Not Match!");
    }
  };

  return (
    <>
      <Row>
        <Col>
          <div className={styles.new_pass__img}>
            <img alt="LMiTS Logo" src={lmitsLogo} />
            <h3 className={styles.new_pass__title}>Change Forgot Password</h3>
          </div>
        </Col>
      </Row>

      <form onSubmit={onSubmit}>
        <div className={styles.new_pass__error}>
          <>
            {errorMsg !== "" ? (
              <Alert severity="error">{errorMsg}</Alert>
            ) : null}
          </>

          <>{msg !== "" ? <Alert severity="success">{msg}</Alert> : null}</>
        </div>
        <div className={styles.new_pass__form__div}>
          <TextField
            className={`${styles.new_pass__textfield} ${classes.root}`}
            error={
              new_password !== password_confirmation &&
              password_confirmation.length > 0
            }
            id="new_Password"
            type="password"
            value={new_password}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
            }}
            variant="outlined"
            label="Enter New Password"
            size="small"
          />
        </div>
        <div className={styles.new_pass__form__div}>
          <TextField
            className={`${styles.new_pass__textfield} ${classes.root}`}
            error={
              new_password !== password_confirmation &&
              password_confirmation.length > 0
            }
            id="Password_Confirmation"
            type="password"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
            }}
            variant="outlined"
            label="Confirm New Password"
            size="small"
          />
        </div>
        <div className={styles.new_pass__btn_div}>
          <Button
            className={styles.new_pass__btn}
            type="submit"
            variant="contained"
            color="primary"
          >
            Change Password
          </Button>
        </div>
      </form>
    </>
  );
};

export default EnterNewPassword;
