import React, { useContext, useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Button, makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { UserContext } from "../../../context/UserContext";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8845d0",
    },
  },
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

const SignupOtpVerification = () => {
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
        .post(`${process.env.REACT_APP_VERIFY_SIGNUP_OTP}`, otpVerifyData)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            // alert(response.data.message);
            setUserAuth("6");
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
      {/*<p>*/}
      {/*  Enter the 6 digit OTP you received on the mobile number you provided and*/}
      {/*  click on the 'Submit' button to verify your mobile number and login to*/}
      {/*  your account.*/}
      {/*</p>*/}
      <div
        style={{
          marginLeft: "1rem",
        }}
      >
        <p className="login-card-description mb-0 pb-0">
          Enter the 6 digit OTP you received.
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
            className={classes.root}
            id="OTP"
            autoFocus
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
              },
              style: { fontSize: 15 },
            }}
            variant="outlined"
            label="Enter OTP"
            size="small"
            style={{ minWidth: "100%" }}
          />
        </div>

        {isSubmitted && errorMsg !== "" ? (
          <div className="pl-3">
            <Alert severity="error">{errorMsg}</Alert>
          </div>
        ) : null}

        <div
          className="text-center"
          style={{
            margin: "0.5em",
            padding: "0.5rem",
          }}
        >
          <Button
            className={classes.loginButton}
            type="submit"
            variant="contained"
            color="primary"
            style={{
              minWidth: "50%",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignupOtpVerification;
