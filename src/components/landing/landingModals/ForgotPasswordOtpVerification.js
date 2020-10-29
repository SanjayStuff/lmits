import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, makeStyles } from "@material-ui/core";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
import { Alert } from "@material-ui/lab";
import styles from "../../../styles/landing/ForgotPasswordOtpVerification.module.css";
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

const ForgotPasswordOtpVerification = () => {
  const classes = useStyles();
  const [otp, setOtp] = useState("");
  const [userAuth, setUserAuth] = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitted(false);

    if (otp.length === 6) {
      const otpVerifyData = {
        otp,
        details: localStorage.getItem("lmits_otp_details"),
        controller: "users",
        action: "verify_otp",
      };
      console.log(otpVerifyData);
      axios
        .post(`${process.env.REACT_APP_VERIFY_FORGOT_PASS}`, otpVerifyData)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            localStorage.removeItem("lmits_otp_details");
            // alert(response.data.message);
            setUserAuth("4");
          } else if (
            response.data.response_code &&
            response.data.response_code !== 200
          ) {
            // alert(response.data.message);
            setIsSubmitted(true);
            setErrorMsg(response.data.message);
          }
        })
        .catch((err) => alert(err));
    } else {
      setIsSubmitted(true);
      setErrorMsg("Enter valid OTP");
      setOtp("");
    }
  };

  return (
    <>
      <div>
        <h5 className={styles.login_forgot_otp_title}>Verify Mobile Number</h5>
        <p>
          we sent a verification code to{" "}
          {localStorage.getItem("lmits_login_mob")} <br />
          Enter the Code Below
        </p>
      </div>

      <form container onSubmit={onSubmit}>
        <Row>
          <Col className={styles.login_forgot_otp__error}>
            {isSubmitted && errorMsg !== "" ? (
              <div>
                <Alert severity="error">{errorMsg}</Alert>
              </div>
            ) : null}
          </Col>
        </Row>

        <div>
          <TextField
            className={`${styles.login_forgot_otp__textfield} ${classes.root}`}
            id="OTP"
            type="number"
            autoFocus
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
              setIsSubmitted(false);
            }}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
              },
            }}
            variant="outlined"
            label="Enter OTP"
            size="small"
          />
        </div>

        <div className={styles.login_forgot_otp__btn_div}>
          <Button
            className={styles.login_forgot_otp__btn}
            type="submit"
            variant="contained"
            color="primary"
          >
            Verify
          </Button>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordOtpVerification;
