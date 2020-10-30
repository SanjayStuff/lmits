import React, { useContext, useEffect, useState } from "react";
import lmitsLogo from "../../../assets/images/Logo.png";
import TextField from "@material-ui/core/TextField";
import { Button, Link, makeStyles } from "@material-ui/core";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import LoginOtpVerification from "./LoginOtpVerification";
import InputAdornment from "@material-ui/core/InputAdornment";
import Alert from "@material-ui/lab/Alert";
import { Row, Col } from "antd";
import styles from "../../../styles/landing/LoginWithOtp.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8845d0",
    },
    "& .makeStyles-root-1 .MuiDialogContent-root": {
      overFlow: "visible",
    },
  },
  asterisk: {
    display: "none",
  },
}));

const LoginWithOtp = () => {
  const classes = useStyles();
  const [mobile_number, setMobile_Number] = useState("");
  const [userAuth, setUserAuth] = useContext(UserContext);
  const [otpSent, setOtpSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [counter, setCounter] = useState(0);
  const [changeDet, setChangeDet] = useState(true);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  const onSubmit = (e) => {
    e.preventDefault();
    setOtpSent(false);
    setErrorMsg("");
    setChangeDet(false);

    if (mobile_number.length === 10) {
      const otpData = {
        mobile_number,
      };
      console.log(otpData);
      axios
        .post(`${process.env.REACT_APP_LOGIN_WITH_OTP}`, otpData)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            localStorage.setItem("lmits_login_mob", mobile_number);
            localStorage.setItem(
              "lmits_otp_details",
              response.data.otp.Details
            );
            // alert(response.data.message);
            setOtpSent(true);
            setCounter(15);
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
          <div className={styles.login_otp__img}>
            <img src={lmitsLogo} alt="LMiTS Logo" />

            <h3 className={styles.login_otp__title}>Login with OTP</h3>

            <p className={styles.login_otp__para}>
              We will send you a OTP(One Time Password) to verify the below
              mobile number provide by you.
            </p>
          </div>
        </Col>
      </Row>
      <form
        onSubmit={onSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <Row>
          <Col xs={24} md={21}>
            <div className={styles.login_otp__error}>
              {!otpSent ? (
                !changeDet && errorMsg !== "" ? (
                  <div>
                    <Alert severity="error">{errorMsg}</Alert>
                  </div>
                ) : null
              ) : null}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={21}>
            <div className={styles.login_otp__form__div}>
              <TextField
                className={`${styles.login_otp__textfield} ${classes.root}`}
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
                      +91 -
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                label="Enter Mobile Number"
                size="small"
              />
            </div>

            <div className={styles.login_otp__btn__div}>
              <Button
                className={styles.login_otp__btn}
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

      <div>
        <Row>
          <Col xs={24} md={21}>
            <div className={styles.login_otp__div_signup}>
              {!otpSent ? (
                <p>
                  New to LMiTS?{" "}
                  <span
                    className={styles.login_otp__txt_signup}
                    onClick={() => {
                      setUserAuth("5");
                    }}
                  >
                    SignUp
                  </span>
                </p>
              ) : null}
            </div>
          </Col>
          <Col xs={24} md={21} className={styles.login_otp__resend_div}>
            {otpSent ? <LoginOtpVerification /> : null}
            {otpSent && counter !== 0 ? (
              <div>
                <p className={styles.login_otp__resend}>
                  Resend OTP in {counter} sec
                </p>
              </div>
            ) : null}

            {otpSent && counter === 0 ? (
              <div>
                <Link onClick={onSubmit}>
                  <p className={styles.login_otp__resend}>Resend OTP</p>
                </Link>
              </div>
            ) : null}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LoginWithOtp;
