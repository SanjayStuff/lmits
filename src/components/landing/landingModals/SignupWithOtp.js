import React, { useState } from 'react';
import lmitsLogo from '../../../assets/images/Logo.png';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import SignupOtpVerification from './SignupOtpVerification';
import LoginOtpVerification from './LoginOtpVerification';

const useStyles = makeStyles((theme) => ({
  loginButton: {
    color: '#fff',
    background: '#8845d0',
    textTransform: 'capitalize',
    marginLeft: 'auto',
    fontSize: '15px',
    padding: '0.5rem 1rem',
    outline: 'none',
    border: 'none',
    borderRadius: '0.5rem',
    opacity: '0.7',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      border: 'none',
      background: '#8845d0',
      boxShadow: '0 10px 36px rgba(0, 0, 0, 0.15)',
    },
  },
  asterisk: {
    display: 'none',
  },
}));

const SignupWithOtp = () => {
  const classes = useStyles();
  const [mobile_number, setMobile_Number] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const otpSignUpData = {
      mobile_number,
      controller: 'users',
      action: 'verify_mobile',
      user: {
        mobile_number,
      },
    };
    console.log(otpSignUpData);
    axios
      .post(`${process.env.REACT_APP_SIGNUP_WITH_OTP}`, otpSignUpData)
      .then(function (response) {
        console.log(response.data);
        if (response.data.response_code === 200) {
          localStorage.setItem('lmits_login_mob', mobile_number);
          localStorage.setItem('lmits_otp_details', response.data.otp.Details);
          setOtpSent(true);
          alert(response.data.message);
        } else if (
          response.data.response_code &&
          response.data.response_code !== 200
        ) {
          alert(response.data.message);
          setMobile_Number('');
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <div>
        <img
          src={lmitsLogo}
          style={{
            width: '25%',
            margin: '0.5em',
            padding: '0.5rem',
          }}
          alt="LogoImg"
        />
        {/* <h5
          className="text-black"
          style={{
            paddingLeft: '0.8rem',
          }}
        >
          Verification
        </h5> */}
      </div>
      <form onSubmit={onSubmit}>
        <div
          style={{
            margin: '0.5em',
            padding: '0.5rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField
            id="MobileNumber"
            type="number"
            value={mobile_number}
            onChange={(e) => setMobile_Number(e.target.value)}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
              },
              style: { fontSize: 15 },
            }}
            variant="outlined"
            label="Enter Mobile Number"
            size="small"
            style={{ minWidth: '100%' }}
          />
        </div>
        <div
          style={{
            margin: '1rem',
          }}
        >
          <Button
            className={classes.loginButton}
            type="submit"
            variant="contained"
            color="primary"
            style={{
              minWidth: '100%',
            }}
          >
            Generate OTP
          </Button>
        </div>
      </form>
      {otpSent ? <SignupOtpVerification /> : null}
    </>
  );
};

export default SignupWithOtp;
