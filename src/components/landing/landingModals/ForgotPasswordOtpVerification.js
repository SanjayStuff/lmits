import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Link } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router";

const ForgotPasswordOtpVerification = () => {
  const [otp, setOtp] = useState("");

  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

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
          alert(response.data.message);
          history.push("/enternewpass");
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
