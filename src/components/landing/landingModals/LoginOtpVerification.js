import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const LoginOtpVerification = () => {
  const [otp, setOtp] = useState("");

  return (
    <>
      <p>
        Enter the 6 digit OTP you received on the mobile number you provided and
        click on the 'Submit' button to verify your mobile number and login to
        your account.
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
          Submit
        </Button>
      </form>
    </>
  );
};

export default LoginOtpVerification;
