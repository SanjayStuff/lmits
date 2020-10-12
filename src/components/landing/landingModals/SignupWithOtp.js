import React, { useEffect, useState } from 'react';
import lmitsLogo from '../../../assets/images/Logo.png';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import SignupOtpVerification from './SignupOtpVerification';
import LoginOtpVerification from './LoginOtpVerification';
import Link from '@material-ui/core/Link';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#8845d0',
    },
  },
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
  const [msg, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  const onSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setMsg('');
    setOtpSent(false);

    if (mobile_number.length === 10) {
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
            localStorage.setItem(
              'lmits_otp_details',
              response.data.otp.Details
            );
            setOtpSent(true);
            setMsg(response.data.message);
            setCounter(15);
            // alert(response.data.message);
          } else if (
            response.data.response_code &&
            response.data.response_code !== 200
          ) {
            // alert(response.data.message);
            setMobile_Number('');
            setErrorMsg(response.data.message);
          }
        })
        .catch((err) => alert(err));
    } else {
      setErrorMsg('Enter a valid Mobile Number');
      setMobile_Number('');
    }
  };

  return (
    <>
      <div className="pb-1">
        <img
          src={lmitsLogo}
          style={{
            width: '25%',
            margin: '0.5em',
            padding: '0.5rem',
          }}
          alt="LogoImg"
        />
        <h3
          className="text-black"
          style={{
            fontSize: '16px',
            paddingLeft: '0.8rem',
          }}
        >
          Sign Up with OTP
        </h3>
      </div>
      <form onSubmit={onSubmit}>
        {errorMsg !== ' ' ? (
          <div className="pl-3">
            <p style={{ color: 'red' }}>{errorMsg}</p>
          </div>
        ) : null}
        <div
          style={{
            margin: '0.5em',
            padding: '0.5rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField
            className={classes.root}
            id="MobileNumber"
            type="number"
            value={mobile_number}
            onChange={(e) => {
              setMobile_Number(e.target.value);
              setOtpSent(false);
            }}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
              },
              style: { fontSize: 15 },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment disableTypography="true" position="start">
                  +91 |
                </InputAdornment>
              ),
            }}
            variant="outlined"
            label="Enter Mobile Number"
            size="small"
            style={{ minWidth: '100%' }}
          />
        </div>
        <div
          className="text-center"
          style={{
            margin: '1rem',
          }}
        >
          <Button
            disabled={otpSent}
            className={classes.loginButton}
            type="submit"
            variant="contained"
            color="primary"
            style={{
              minWidth: '50%',
            }}
          >
            Generate OTP
          </Button>
        </div>
      </form>
      {otpSent ? <SignupOtpVerification /> : null}
      <div className="form__div otp-forget mt-2 mb-0 pb-0 m-2 p-2">
        {otpSent && counter !== 0 ? (
          <div className="d-inline-block">
            <p
              className="login-card-forgot f-12"
              style={{ color: '#000', fontVariantNumeric: 'tabular-nums' }}
            >
              Resend OTP in {counter} sec
            </p>
          </div>
        ) : null}

        {otpSent && counter === 0 ? (
          <div className="d-inline-block">
            <Link onClick={onSubmit}>
              <p
                className="login-card-forgot f-12"
                style={{ color: '#000', cursor: 'pointer' }}
              >
                Resend OTP
              </p>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SignupWithOtp;
