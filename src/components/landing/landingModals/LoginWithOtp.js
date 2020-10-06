import React, { useContext, useState } from "react";
import lmitsLogo from "../../../assets/images/Logo.png";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Link } from "@material-ui/core";
import LoginWithMail from "./LoginWithMail";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import LoginOtpVerification from "./LoginOtpVerification";
import { useHistory } from "react-router";

const LoginWithOtp = (props) => {
  const [mobile_number, setMobile_Number] = useState("");
  const [isOtpLogin, setIsOtpLogin] = useContext(UserContext);

  let history = useHistory();

  const handleClick = () => {
    setIsOtpLogin(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

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
          localStorage.setItem("lmits_otp_details", response.data.otp.Details);
          alert(response.data.message);
          history.push("/loginotpverification");
        } else if (
          response.data.response_code &&
          response.data.response_code !== 200
        ) {
          alert(response.data.message);
          setMobile_Number("");
        }
      })
      .catch((err) => alert(err));
  };

  return !isOtpLogin ? (
    <LoginWithMail />
  ) : (
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
      <h3
        style={{
          margin: "0.5em",
          padding: "0.5rem",
          marginTop: "0",
          paddingTop: "0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Hello, Welcome Back
      </h3>
      <h6>
        We will send you a OTP(One Time Password) to verify the below mobile
        number provided by you
      </h6>
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
            label="Mobile Number"
            size="small"
            style={{ minWidth: "15vw" }}
          />
        </div>
        <Grid container style={{ maxWidth: "15vw" }}>
          <Grid item xs={12}>
            <Link
              style={{ direction: "row", marginLeft: "1em" }}
              onClick={handleClick}
            >
              Login with Email/Mobile Number
            </Link>
          </Grid>
        </Grid>
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
            Generate OTP
          </Button>
        </div>
        <Grid container style={{ marginLeft: "0.5em", marginBottom: "1.5em" }}>
          New to Lmits? SignUp
        </Grid>
      </form>
    </>
  );
};

export default LoginWithOtp;
