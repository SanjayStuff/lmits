import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Link } from "@material-ui/core";
import axios from "axios";

const ForgotPasswordOtpVerification = () => {
  const [otp, setOtp] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const otpVerifyData = {
      otp,
      details: localStorage.getItem("lmits_login_details"),
      controller: "users",
      action: "verify_otp",
    };
    console.log(otpVerifyData);
    axios
      .post(`${process.env.REACT_APP_VERIFY_FORGOT_PASS}`, otpVerifyData)
      .then(function (response) {
        console.log(response.data);
      });
  };

  return (
    <>
      <h5>Verify Mobile Number</h5>
      <p>
        we sent a verification code to {localStorage.getItem("lmits_login_mob")}
        Enter the Code Below
      </p>
      <form onSubmit={onSubmit}>
        <TextField
          id="OTP"
          type="number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          variant="outlined"
          label="Password"
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
          Verify
        </Button>
        <Link style={{ direction: "row-reverse", marginLeft: "2.5em" }}>
          Resend OTP?
        </Link>
      </form>
    </>
  );
};

export default ForgotPasswordOtpVerification;
