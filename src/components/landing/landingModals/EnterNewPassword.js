import React, { useState } from 'react';
import lmitsLogo from '../../../assets/images/Logo.png';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';

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

const EnterNewPassword = () => {
  const classes = useStyles();
  const [new_password, setNewPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [msg, setMsg] = useState('');
  const [validated, setValidated] = useState(false);

  // let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setMsg('');

    if (new_password === password_confirmation) {
      const changePass = {
        update_password_params: {
          phone: localStorage.getItem('lmits_login_mob'),
          new_password,
          password_confirmation,
        },
      };
      console.log(changePass.update_password_params);
      axios
        .post(`${process.env.REACT_APP_FORGOT_CHANGE_PASS}`, changePass)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            // alert(response.data.message);
            localStorage.removeItem('lmits_login_mob');
            setMsg('Password has been changed');
            // history.push("/");
          } else if (
            response.data.response_code &&
            response.data.response_code !== 200
          ) {
            // alert(response.data.message);
            setErrorMsg(response.data.message);
          }
        })
        .catch((err) => alert(err));
    } else {
      setNewPassword('');
      setPasswordConfirmation('');
      setErrorMsg('Passwords Do Not Match!');
    }
  };

  return (
    <>
      <img
        src={lmitsLogo}
        style={{
          width: '25%',
          margin: '0.5em',
          padding: '0.5rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <h4
        className="text-black f-18"
        style={{
          marginLeft: '0.8em',
        }}
      >
        Change Forgot Password
      </h4>
      <form onSubmit={onSubmit}>
        <div className="pl-3 text-center">
          <>
            {errorMsg !== '' ? (
              <p style={{ color: '#ee4a4a' }}>{errorMsg}</p>
            ) : null}
          </>
          <>{msg !== '' ? <p>{msg}</p> : null}</>
        </div>
        <div
          style={{
            margin: '0.5em',
            padding: '0.5em',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField
            error={
              new_password !== password_confirmation &&
              password_confirmation.length > 0
            }
            id="new_Password"
            type="password"
            value={new_password}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
              style: { fontSize: 15 },
            }}
            variant="outlined"
            label="Enter New Password"
            size="small"
            style={{ minWidth: '100%' }}
          />
        </div>
        <div
          style={{
            margin: '0.5em',
            padding: '0.5em',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField
            error={
              new_password !== password_confirmation &&
              password_confirmation.length > 0
            }
            id="Password_Confirmation"
            type="password"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
              style: { fontSize: 15 },
            }}
            variant="outlined"
            label="Confirm New Password"
            size="small"
            style={{ minWidth: '100%' }}
          />
        </div>
        <div
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
              minWidth: '100%',
            }}
          >
            Change Password
          </Button>
        </div>
      </form>
    </>
  );
};

export default EnterNewPassword;
