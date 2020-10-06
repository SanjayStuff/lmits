import React, { useState } from "react";
import lmitsLogo from "../../../assets/images/Logo.png";
import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";

const LoginWithOtp = (props) => {
  const [mobile_number, setMobile_Number] = useState("");
  const [isOtpLogin, setIsOtpLogin] = useState(props);

  const handleClick = () => {
    setIsOtpLogin(false);
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
      <form>
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
            <Button
              style={{ direction: "row", marginLeft: "1em" }}
              onClick={handleClick}
            >
              Login with Email/Mobile Number
            </Button>
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
        <Grid
          container
          xs={12}
          style={{ marginLeft: "0.5em", marginBottom: "1.5em" }}
        >
          New to Lmits? SignUp
        </Grid>
      </form>
    </>
  );
};

export default LoginWithOtp;
