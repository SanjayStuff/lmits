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
    marginLeft: 'auto',
    fontSize: '18px',
    padding: '0.5rem 1rem',
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
  formFont: {
    fontFamily: `"Poppins", 'sans-serif'`,
  },
}));

const LoginWithMail = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOtpLogin, setIsOtpLogin] = useContext(UserContext);
  const classes = useStyles();

  let history = useHistory();

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
            className={classes.formFont}
            id="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            label="Email"
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
                className="login-card-forgot f-12"
                style={{ color: '#000', cursor: 'pointer' }}
              >
                Login with OTP
              </p>
            </Link>
          </div>

          <div className="pb-0 mb-0">
            <p className="login-card-forgot f-12" style={{ color: '#ee4a4a' }}>
              Forgot Password?
            </p>
          </div>
        </div>

        {/* <Grid container>
          <Grid item xs={6}>
            <Link style={{ direction: 'row' }} onClick={handleClick}>
              <p className="p-0 m-0 pt-0 mt-0" style={{ cursor: 'pointer' }}>
                Login with OTP
              </p>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link style={{ direction: 'row-reverse', marginLeft: '2.5em' }}>
              Forgot Password?
            </Link>
          </Grid>
        </Grid> */}
        <div
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
        <Grid container style={{ marginLeft: '0.5em', marginBottom: '1.5em' }}>
          <p>
            New to LMiTS?{' '}
            <a href="" className="text-black">
              SignUp
            </a>
          </p>
        </Grid>
      </form>
    </>
  );
};

export default LoginWithMail;
