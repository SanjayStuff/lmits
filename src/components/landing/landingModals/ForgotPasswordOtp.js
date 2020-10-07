import React, { useState } from "react";
import lmitsLogo from "../../../assets/images/Logo.png";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import ForgotPasswordOtpVerification from "./ForgotPasswordOtpVerification";

const ForgotPasswordOtp = () => {
  const [mobile_number, setMobile_Number] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const number = {
      mobile_number,
    };
    console.log(number);
    axios
      .post(`${process.env.REACT_APP_FORGOT_PASS_OTP}`, mobile_number)
      .then(function (response) {
        console.log(response.data);
        if (response.data.response_code === 200) {
          localStorage.setItem("lmits_login_mob", mobile_number);
          localStorage.setItem("lmits_otp_details", response.data.otp.Details);
          alert(response.data.message);
          setOtpSent(true);
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
      <h4>Verification</h4>
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
            onChange={(e) => setMobile_Number(e.target.value)}
            required
            variant="outlined"
            label="Enter Mobile Number"
            size="small"
            style={{ minWidth: "15vw" }}
          />
        </div>
        <div
          style={{
            margin: "1rem",
          }}
        >
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
            Get OTP
          </Button>
        </div>
      </form>
      {otpSent ? <ForgotPasswordOtpVerification /> : null}
    </>
  );
};

export default ForgotPasswordOtp;
