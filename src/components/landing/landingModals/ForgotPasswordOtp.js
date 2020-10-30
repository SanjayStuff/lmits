import React, { useEffect, useState } from "react";
import lmitsLogo from "../../../assets/images/Logo.png";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Button, Link, makeStyles } from "@material-ui/core";
import ForgotPasswordOtpVerification from "./ForgotPasswordOtpVerification";
import InputAdornment from "@material-ui/core/InputAdornment";
import Alert from "@material-ui/lab/Alert";
import { Row, Col } from "antd";
import styles from "../../../styles/landing/ForgotPasswordOtp.module.css";

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

const ForgotPasswordOtp = () => {
  const classes = useStyles();
  const [mobile_number, setMobile_Number] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [counter, setCounter] = useState(0);
  const [changeDet, setChangeDet] = useState(true);
  const [otpCounter, setOtpCounter] = useState(0);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  useEffect(() => {
    const otpTimer =
      otpCounter > 0 && setInterval(() => setOtpCounter(otpCounter - 1), 1000);
    return () => {
      clearInterval(otpTimer);
    };
  }, [otpCounter]);

  const onSubmit = (e) => {
    e.preventDefault();
    setOtpSent(false);
    setErrorMsg("");
    setChangeDet(false);

    if (mobile_number.length === 10) {
      const mobileNumber = {
        mobile_number,
      };

      console.log(mobileNumber);
      axios
        .post(`${process.env.REACT_APP_FORGOT_PASS_OTP}`, mobileNumber)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            localStorage.setItem("lmits_login_mob", mobile_number);
            localStorage.setItem(
              "lmits_otp_details",
              response.data.otp.Details
            );
            setOtpSent(true);
            setCounter(15);
            setOtpCounter(3);
          } else if (
            response.data.response_code &&
            response.data.response_code !== 200
          ) {
            setErrorMsg(response.data.message);
            setMobile_Number("");
          }
        })
        .catch((err) => alert(err));
    } else {
      setErrorMsg("Enter a valid Mobile Number");
      setMobile_Number("");
    }
  };

  const resendOtp = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (mobile_number.length === 10) {
      const mobileNumber = {
        mobile_number,
      };

      console.log(mobileNumber);
      axios
        .post(`${process.env.REACT_APP_FORGOT_PASS_OTP}`, mobileNumber)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            localStorage.setItem("lmits_login_mob", mobile_number);
            localStorage.setItem(
              "lmits_otp_details",
              response.data.otp.Details
            );
            setCounter(15);
            setOtpCounter(3);
          } else if (
            response.data.response_code &&
            response.data.response_code !== 200
          ) {
            // alert(response.data.message);
            setErrorMsg(response.data.message);
            setMobile_Number("");
          }
        })
        .catch((err) => alert(err));
    } else {
      setErrorMsg("Enter a valid Mobile Number");
      setMobile_Number("");
    }
  };

  return (
    <>
      <Row>
        <Col>
          <div className={styles.login_forgot__img}>
            <img src={lmitsLogo} alt="LMiTS Logo" />

            <h3 className={styles.login_forgot__title}>Forgot Password</h3>

            <p className={styles.login_forgot__para}>
              We will send you a OTP(One Time Password) to verify the below
              mobile number provide by you.
            </p>
          </div>
        </Col>
      </Row>
      <form onSubmit={onSubmit} noValidate autoComplete="off">
        <Row>
          <Col xs={24} md={22}>
            <div className={styles.login_forgot__error}>
              {!otpSent ? (
                !changeDet && errorMsg !== "" ? (
                  <div>
                    <Alert severity="error">{errorMsg}</Alert>
                  </div>
                ) : null
              ) : null}

              {otpCounter !== 0 ? (
                <Alert severity="success">Otp Sent Successfully</Alert>
              ) : null}
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={24} md={22}>
            <div className={styles.login_forgot__form__div}>
              <TextField
                className={`${styles.login_forgot__textfield} ${classes.root}`}
                id="MobileNumber"
                type="number"
                value={mobile_number}
                onChange={(e) => {
                  setMobile_Number(e.target.value);
                  setOtpSent(false);
                  setChangeDet(true);
                }}
                required
                InputLabelProps={{
                  classes: {
                    asterisk: classes.asterisk,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment disableTypography={true} position="start">
                      +91 |
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                label="Enter Mobile Number"
                size="small"
              />
            </div>
            <div align="middle" className={styles.login_forgot__btn_div}>
              <Button
                className={styles.login_forgot__btn}
                disabled={otpSent}
                type="submit"
                variant="contained"
                color="primary"
              >
                Send OTP
              </Button>
            </div>
          </Col>
        </Row>
      </form>
      <Row>
        <Col className={styles.login_forgot__resend_div}>
          {otpSent ? <ForgotPasswordOtpVerification /> : null}
          <div>
            {otpSent && counter !== 0 ? (
              <p className={styles.login_forgot__resend}>
                Resend OTP in {counter} sec
              </p>
            ) : null}

            {otpSent && counter === 0 ? (
              <Link onClick={resendOtp}>
                <p className={styles.login_forgot__resend}>Resend OTP</p>
              </Link>
            ) : null}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ForgotPasswordOtp;
