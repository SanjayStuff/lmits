import React, { useContext, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles, Container } from '@material-ui/core';
import { UserContext } from '../../../context/UserContext';
import { Alert } from '@material-ui/lab';
import styles from '../../../styles/SignupOtpVerification.module.css';

// Ant Design
import { Row, Col } from 'antd';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#8845d0',
    },
  },

  asterisk: {
    display: 'none',
  },
}));

const SignupOtpVerification = () => {
  const classes = useStyles();
  const [otp, setOtp] = useState('');
  const [userAuth, setUserAuth] = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitted(false);

    if (otp.length === 6) {
      const otpVerifyData = {
        otp,
        details: localStorage.getItem('lmits_otp_details'),
        controller: 'users',
        action: 'verify_otp',
      };
      console.log(otpVerifyData);
      axios
        .post(`${process.env.REACT_APP_VERIFY_SIGNUP_OTP}`, otpVerifyData)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            // alert(response.data.message);
            setUserAuth('6');
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
      setErrorMsg('Enter valid OTP');
      setOtp('');
    }
  };

  return (
    <>
      {/*<p>*/}
      {/*  Enter the 6 digit OTP you received on the mobile number you provided and*/}
      {/*  click on the 'Submit' button to verify your mobile number and login to*/}
      {/*  your account.*/}
      {/*</p>*/}
      <Row>
        <Col>
          <h5 className={styles.signup_otp_title}>
            Enter the 6 digit OTP you received.
          </h5>
        </Col>
      </Row>

      <form container onSubmit={onSubmit}>
        <Row>
          <Col className={styles.signup_otp__error}>
            {isSubmitted && errorMsg !== '' ? (
              <div>
                <Alert severity="error">{errorMsg}</Alert>
              </div>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col>
            <TextField
              className={styles.signup_otp__textfield}
              classes={classes.root}
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
              }}
              variant="outlined"
              label="Enter OTP"
              size="small"
            />
          </Col>
        </Row>

        <Row>
          <Col className={styles.signup_otp__btn_div}>
            <Button
              className={styles.signup_otp__btn}
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default SignupOtpVerification;
