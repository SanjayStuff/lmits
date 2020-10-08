import React, { useContext, useState } from 'react';
import lmitsLogo from '../../../assets/images/Logo.png';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Link, makeStyles } from '@material-ui/core';
import LoginWithOtp from './LoginWithOtp';
import axios from 'axios';
import { useHistory } from 'react-router';
import { UserContext } from '../../../context/UserContext';

const useStyles = makeStyles((theme) => ({
  loginButton: {
    color: '#fff',
    background: '#8845d0',
    textTransform: 'capitalize',

    fontSize: '15px',
    padding: '0.5rem 7rem',
    outline: 'none',
    border: 'none',
    color: '#fff',
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

const LoginWithMail = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOtpLogin, setIsOtpLogin] = useContext(UserContext);

  // let history = useHistory();

  const handleClick = () => {
    setIsOtpLogin(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const signIn = {
      session: {
        email,
        password,
      },
    };
    console.log(signIn.session);
    axios
      .post(`${process.env.REACT_APP_LOGIN_WITH_USER}`, signIn)
      .then(function (response) {
        console.log(response.data);
        if (response.data.response_code === 200) {
          localStorage.setItem('lmits_auth_key', response.data.auth_token);
          alert(response.data.message);
          // history.push("/dashboard");
        } else if (
          response.data.response_code &&
          response.data.response_code !== 200
        ) {
          alert(response.data.message);
        }
      })
      .catch((err) => alert(err));
  };

  return isOtpLogin ? (
    <LoginWithOtp />
  ) : (
    <>
      <div>
        <img
          className="login-img"
          src={lmitsLogo}
          style={{
            width: '25%',
            margin: '0.5em',
            padding: '0.5rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <h3
          style={{
            fontSize: '20px',
            margin: '0.5em',
            padding: '0.5rem',
            marginTop: '0',
            paddingTop: '0',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Hello, Welcome Back
        </h3>
      </div>
      <form container onSubmit={onSubmit} className="form">
        <div
          className="form__div"
          style={{
            margin: '0.5em',
            padding: '0.5rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField
            id="Email"
            type="email"
            value={email}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
              style: { fontSize: 15 },
            }}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            label="Email/Mobile Number"
            size="small"
            style={{ minWidth: '100%' }}
          />
        </div>
        <div
          className="form__div"
          style={{
            margin: '0.5em',
            padding: '0.5em',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField
            id="Password"
            type="password"
            value={password}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
              },
              style: { fontSize: 15 },
            }}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            label="Password"
            size="small"
            style={{ minWidth: '100%' }}
          />
        </div>

        <div className="form__div otp-forget mt-2 mb-0 pb-0 m-2 p-2">
          <div className="d-inline-block">
            <Link onClick={handleClick}>
              <p
                className="login-card-description f-12"
                style={{ color: '#000', cursor: 'pointer' }}
              >
                Login with OTP
              </p>
            </Link>
          </div>

          <div className="pb-0 mb-0">
            <p
              className="login-card-description f-12"
              style={{ color: '#ee4a4a', cursor: 'pointer' }}
            >
              Forgot Password?
            </p>
          </div>
        </div>
        <div
          className="text-center mt-0 pt-0"
          style={{
            margin: '.5rem',
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
            Login
          </Button>
        </div>
        <div className="text-center">
          <p>
            New to LMiTS?{' '}
            <a href="" className="text-black">
              SignUp
            </a>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginWithMail;
