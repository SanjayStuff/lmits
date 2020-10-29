import React, { useState } from "react";
import axios from "axios";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import { Alert } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import { Row, Col } from "antd";
import styles from "../../../styles/profile/dashboardModals/EditNumberOtpVerification.module.css";

const EditNumberOtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setMsg("");
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
            const newPhoneData = {
              old_phone: localStorage.getItem("lmits_mob_num"),
              new_phone: localStorage.getItem("lmits_login_mob"),
            };
            console.log(newPhoneData);
            axios
              .post(`${process.env.REACT_APP_EDIT_NUMBER}`, newPhoneData, {
                headers: {
                  Authorization: localStorage.getItem("lmits_auth_key"),
                },
              })
              .then(function (response) {
                console.log(response.data);
                if (response.data.response_code === 200) {
                  setIsSubmitted(true);
                  setMsg(response.data.message);
                  localStorage.setItem(
                    "lmits_mob_num",
                    localStorage.getItem("lmits_login_mob")
                  );
                  localStorage.removeItem("lmits_login_mob");
                  localStorage.removeItem("lmits_otp_details");
                } else if (
                  response.data.response_code &&
                  response.data.response_code !== 200
                ) {
                  setIsSubmitted(true);
                  setErrorMsg(response.data.message);
                }
              })
              .catch((err) => alert(err));
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
      <form onSubmit={onSubmit}>
        <DialogContent>
          <div>
            <p>Enter the 6 digit OTP you received</p>
          </div>
          <Row>
            <Col className={styles.edit_num_otp__error}>
              {isSubmitted && errorMsg !== "" ? (
                <Alert severity="error">{errorMsg}</Alert>
              ) : null}

              {isSubmitted && msg !== "" ? (
                <Alert severity="success">{msg}</Alert>
              ) : null}
            </Col>
          </Row>
          <div>
            <TextField
              id="OTP"
              autoFocus
              type="number"
              value={otp}
              required
              size="small"
              variant="outlined"
              label="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        </DialogContent>

        <div className={styles.edit_num_otp_btn_div}>
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default EditNumberOtpVerification;
