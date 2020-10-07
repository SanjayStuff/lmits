import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Link } from "@material-ui/core";
import axios from "axios";

const LoginOtpVerification = () => {
  const [otp, setOtp] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const otpVerifyData = {
      Details: localStorage.getItem("lmits_otp_details"),
      otp,
      mobile_number: localStorage.getItem("lmits_login_mob"),
    };
    console.log(otpVerifyData);
    axios
      .post(`${process.env.REACT_APP_VERIFY_LOGIN_OTP}`, otpVerifyData)
      .then(function (response) {
        console.log(response.data);
        if (response.data.response_data == 200) {
          alert(response.data.message);
        } else if (
          response.data.response_code &&
          response.data.response_code !== 200
        ) {
          alert(response.data.message);
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      {/*<p>*/}
      {/*  Enter the 6 digit OTP you received on the mobile number you provided and*/}
      {/*  click on the 'Submit' button to verify your mobile number and login to*/}
      {/*  your account.*/}
      {/*</p>*/}
      <form onSubmit={onSubmit}>
        <TextField
          id="OTP"
          type="number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          variant="outlined"
          label="Enter OTP"
          size="small"
          style={{ minWidth: "350px" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            paddingRight: "4rem",
            paddingLeft: "4rem",
            paddingTop: "1rem",
            fontSize: "1rem",
            minWidth: "350px",
          }}
        >
          Submit
        </Button>
        <Link style={{ direction: "row-reverse", marginLeft: "2.5em" }}>
          Resend OTP?
        </Link>
        <Grid container style={{ marginLeft: "0.5em", marginBottom: "1.5em" }}>
          New to Lmits? SignUp
        </Grid>
      </form>
    </>
  );
};

export default LoginOtpVerification;
