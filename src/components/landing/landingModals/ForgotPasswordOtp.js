import React, { useState } from "react";
import lmitsLogo from "../../../assets/images/Logo.png";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Button, Link, makeStyles } from "@material-ui/core";
import ForgotPasswordOtpVerification from "./ForgotPasswordOtpVerification";

const useStyles = makeStyles((theme) => ({
  loginButton: {
    color: "#fff",
    background: "#8845d0",
    textTransform: "capitalize",
    marginLeft: "auto",
    fontSize: "15px",
    padding: "0.5rem 1rem",
    outline: "none",
    border: "none",
    borderRadius: "0.5rem",
    opacity: "0.7",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      border: "none",
      background: "#8845d0",
      boxShadow: "0 10px 36px rgba(0, 0, 0, 0.15)",
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

  const onSubmit = (e) => {
    e.preventDefault();
    setOtpSent(false);
    setErrorMsg("");

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
          localStorage.setItem("lmits_otp_details", response.data.otp.Details);
          // alert(response.data.message);
          setOtpSent(true);
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
  };

  return (
    <>
      <div>
        <img
          src={lmitsLogo}
          style={{
            width: "25%",
            margin: "0.5em",
            padding: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        />

        <p
          className="login-card-description mb-0 pb-0"
          style={{
            margin: "0.5em",
            padding: "0.5rem",
          }}
        >
          We will send you a OTP(One Time Password) to verify the below mobile
          number provide by you.
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div
          style={{
            margin: "0.5em",
            padding: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="MobileNumber"
            type="number"
            value={mobile_number}
            onChange={(e) => {
              setMobile_Number(e.target.value);
              setOtpSent(false);
            }}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
              },
              style: { fontSize: 15 },
            }}
            variant="outlined"
            label="Enter Mobile Number"
            size="small"
            style={{ minWidth: "100%" }}
          />
        </div>
        <div
          style={{
            margin: "1rem",
          }}
        >
          <Button
            disabled={otpSent}
            className={classes.loginButton}
            type="submit"
            variant="contained"
            color="primary"
            style={{
              minWidth: "100%",
            }}
          >
            Get OTP
          </Button>
        </div>
        {errorMsg !== " " ? (
          <div>
            <p style={{ color: "red" }}>{errorMsg}</p>
          </div>
        ) : null}
        {otpSent ? <ForgotPasswordOtpVerification /> : null}
        <div className="form__div otp-forget mt-2 mb-0 pb-0 m-2 p-2">
          <div className="d-inline-block">
            <Link onClick={onSubmit}>
              <p
                className="login-card-forgot f-12"
                style={{ color: "#000", cursor: "pointer" }}
              >
                Resend OTP?
              </p>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordOtp;
