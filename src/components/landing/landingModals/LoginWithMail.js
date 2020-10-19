import React, { useContext, useState } from 'react';
import lmitsLogo from '../../../assets/images/Logo.png';
import TextField from '@material-ui/core/TextField';
import { Button, Link, makeStyles } from '@material-ui/core';
import LoginWithOtp from './LoginWithOtp';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import Alert from '@material-ui/lab/Alert';

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
    fontSize: '15px',
    padding: '0.5rem 7rem',
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
  errMsg: {
    borderRadius: '10px',
    padding: '10px',
    color: '#000',
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
  },
}));

const LoginWithMail = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userAuth, setUserAuth] = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [msg, setMsg] = useState('');
  const [changeDet, setChangeDet] = useState(true);

  // let history = useHistory();

  const handleClick = () => {
    setUserAuth('2');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setChangeDet(false);
    setMsg('');
    setErrorMsg('');

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
          setMsg(response.data.message);
          // alert(response.data.message);
        } else if (
          response.data.response_code &&
          response.data.response_code !== 200
        ) {
          // alert(response.data.message);
          setErrorMsg(response.data.message);
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <div>
        <img
          className="login-img"
          src={lmitsLogo}
          style={{
            width: '25%',
            marginLeft: '0.8em',
            padding: '0.5rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <h3
          className="text-black"
          style={{
            fontSize: '20px',
            margin: '0.5em',
            padding: '0.5rem',
            paddingBottom: '0px',
          }}
        >
          Hello, Welcome Back
        </h3>
      </div>
      <form container onSubmit={onSubmit} className="form">
        <div className="text-center" style={{ margin: '0.8em' }}>
          {!changeDet && errorMsg !== '' ? (
            <Alert severity="error">{errorMsg}</Alert>
          ) : null}
          {!changeDet && msg !== '' ? (
            <Alert severity="success">{msg}</Alert>
          ) : null}
        </div>

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
            className={classes.root}
            id="Email"
            // type="email"
            value={email}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
              style: { fontSize: 15 },
            }}
            onChange={(e) => {
              setEmail(e.target.value);
              setChangeDet(true);
            }}
            variant="outlined"
            required
            label="Email/Phone Number"
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
            className={classes.root}
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
            onChange={(e) => {
              setPassword(e.target.value);
              setChangeDet(true);
            }}
            variant="outlined"
            label="Password"
            required
            size="small"
            style={{ minWidth: '100%' }}
          />
        </div>

        <div
          className="form__div otp-forget "
          style={{
            margin: '.5rem !important',
            padding: '.5rem !important',
          }}
        >
          <div>
            <Link onClick={handleClick}>
              <p
                className="login-card-description "
                style={{ color: '#000', cursor: 'pointer' }}
              >
                Login with OTP
              </p>
            </Link>
          </div>

          <div>
            <p
              className="login-card-description"
              style={{ color: '#ee4a4a', cursor: 'pointer' }}
              onClick={() => {
                setUserAuth('3');
              }}
            >
              Forgot Password?
            </p>
          </div>
        </div>

        <div
          align="middle"
          style={{
            margin: '.8rem',
          }}
        >
          <Button
            className={classes.loginButton}
            type="submit"
            variant="contained"
            color="primary"
            style={{
              minWidth: '50%',
            }}
          >
            Login
          </Button>
        </div>
        <div className="text-center">
          <p>
            New to LMiTS? {''}
            <span
              className="text-black"
              onClick={() => {
                setUserAuth('5');
              }}
              style={{ cursor: 'pointer' }}
            >
              SignUp
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginWithMail;
