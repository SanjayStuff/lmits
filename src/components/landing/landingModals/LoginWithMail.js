import React, { useContext, useState } from 'react';
import lmitsLogo from '../../../assets/images/Logo.png';
import TextField from '@material-ui/core/TextField';
import { Button, Link, makeStyles } from '@material-ui/core';
import LoginWithOtp from './LoginWithOtp';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router';
import { Row, Col } from 'antd';
import styles from '../../../styles/landing/LoginWithMail.module.css';

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

const LoginWithMail = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userAuth, setUserAuth] = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [msg, setMsg] = useState('');
  const [changeDet, setChangeDet] = useState(true);

  let history = useHistory();

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

          history.push('/dashboard');
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
      <Row>
        <Col>
          <div className={styles.login__img}>
            <img src={lmitsLogo} alt="LMiTS Logo" />
          </div>
          <h3 className={styles.login__title}>Hello, Welcome Back</h3>
        </Col>
      </Row>
      <form container onSubmit={onSubmit}>
        <Row>
          <Col className={styles.login__error}>
            {!changeDet && errorMsg !== '' ? (
              <Alert severity="error">{errorMsg}</Alert>
            ) : null}
            {!changeDet && msg !== '' ? (
              <Alert severity="success">{msg}</Alert>
            ) : null}
          </Col>
        </Row>

        <div className={styles.login__form__div}>
          <TextField
            className={styles.login__textfield}
            classes={classes.root}
            id="Email"
            // type="email"
            value={email}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
            }}
            onChange={(e) => {
              setEmail(e.target.value);
              setChangeDet(true);
            }}
            variant="outlined"
            required
            label="Email/Phone Number"
            size="small"
          />
        </div>
        <div className={styles.login__form__div}>
          <TextField
            className={styles.login__textfield}
            classes={classes.root}
            id="Password"
            type="password"
            value={password}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
              },
            }}
            onChange={(e) => {
              setPassword(e.target.value);
              setChangeDet(true);
            }}
            variant="outlined"
            label="Password"
            required
            size="small"
          />
        </div>

        <div className={styles.login__otp__forget}>
          <Link onClick={handleClick}>
            <p className={styles.login__with_otp}>Login with OTP</p>
          </Link>

          <p
            className={styles.login__forgot_pass}
            onClick={() => {
              setUserAuth('3');
            }}
          >
            Forgot Password?
          </p>
        </div>

        <div align="middle">
          <Button
            className={styles.login__btn}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </div>
        <div align="middle" className={styles.login__div_signup}>
          <p>
            New to LMiTS? {''}
            <span
              className={styles.login__txt_signup}
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
