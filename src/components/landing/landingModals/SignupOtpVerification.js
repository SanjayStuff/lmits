import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const SignupOtpVerification = () => {
  const [otp, setOtp] = useState("");

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
      .post(`${process.env.REACT_APP_VERIFY_SIGNUP_OTP}`, otpVerifyData)
      .then(function (response) {
        console.log(response.data);
        if (response.data.response_code == 200) {
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
        <div>
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
        </div>
        <div>
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
        </div>
        <Link style={{ direction: "row-reverse", marginLeft: "2.5em" }}>
          Resend OTP?
        </Link>
      </form>
    </>
  );
};

export default SignupOtpVerification;
