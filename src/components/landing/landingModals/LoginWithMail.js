import React, { useContext, useState } from 'react';
import lmitsLogo from '../../../assets/images/Logo.png';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Link } from '@material-ui/core';
import LoginWithOtp from './LoginWithOtp';
import axios from 'axios';
import { useHistory } from 'react-router';
import { UserContext } from '../../../context/UserContext';

const LoginWithMail = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOtpLogin, setIsOtpLogin] = useContext(UserContext);

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
            id="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            required
            variant="outlined"
            label="Password"
            size="small"
            style={{ minWidth: '100%' }}
          />
        </div>
        <Grid container>
          <Grid item xs={6}>
            <Link
              style={{ direction: 'row', marginLeft: '1em' }}
              onClick={handleClick}
            >
              Login with OTP
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link style={{ direction: 'row-reverse', marginLeft: '2.5em' }}>
              Forgot Password?
            </Link>
          </Grid>
        </Grid>
        <div
          style={{
            margin: '1rem',
          }}
        >
          <Button
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
