import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
  paper: { maxWidth: '800px' },
  asterisk: {
    color: 'red',
  },
}));

const SignUpForm = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  // const [image, setImage] = useState(null);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const onSubmit = (e) => {
    e.preventDefault();
    setMsg('');
    setErrorMsg('');

    if (password === password_confirmation) {
      const signUp = {
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
        mobile_number: localStorage.getItem('lmits_login_mob'),
        image: null,
      };
      setErrorMsg('');
      console.log(signUp);
      axios
        .post(`${process.env.REACT_APP_SIGNUP_DATA}`, signUp)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            // alert(response.data.message);
            setMsg(response.data.message);
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
      // alert("Passwords do not match");
      setPassword('');
      setPasswordConfirmation('');
      setErrorMsg('Passwords Do Not Match!');
    }
  };

  return (
    <>
      <h3
        className="text-black f-20"
        style={{
          margin: '0.5em',
          padding: '0.5rem',
          marginTop: '0',
          paddingTop: '0',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Sign Up
      </h3>
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
            className={classes.root}
            id="FirstName"
            variant="outlined"
            label="First Name"
            value={first_name}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
              style: { fontSize: 15 },
            }}
            size="small"
            style={{ minWidth: '100%' }}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
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
            id="LastName"
            variant="outlined"
            label="Last Name"
            value={last_name}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
              style: { fontSize: 15 },
            }}
            size="small"
            style={{ minWidth: '100%' }}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
          style={{
            margin: '0.5em',
            padding: '0.5rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField
            className={classes.root}
            error={
              password !== password_confirmation &&
              password_confirmation.length > 0
            }
            id="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMsg('');
            }}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
              style: { fontSize: 15 },
            }}
            variant="outlined"
            label="Password"
            size="small"
            style={{ minWidth: '100%' }}
          />
        </div>
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
            error={
              password !== password_confirmation &&
              password_confirmation.length > 0
            }
            id="ConfirmPassword"
            type="password"
            value={password_confirmation}
            onChange={(e) => {
              setPasswordConfirmation(e.target.value);
              setErrorMsg('');
            }}
            required
            InputLabelProps={{
              classes: {
                asterisk: classes.asterisk,
                input: classes.resize,
              },
              style: { fontSize: 15 },
            }}
            variant="outlined"
            label="Confirm Password"
            size="small"
            style={{ minWidth: '100%' }}
          />
        </div>
        <div className="custom-control custom-checkbox ml-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            I accept the{' '}
            <span
              className="login-card-description f-10"
              style={{ color: '#8845d0', cursor: 'pointer' }}
              onClick={handleClickOpen('paper')}
            >
              Terms and Conditions
            </span>
          </label>
        </div>

        <Dialog
          classes={{ paper: classes.paper }}
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">
            Terms and Conditions
          </DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <div
          style={{
            margin: '0.5em',
            padding: '0.5rem',
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
            Register
          </Button>
        </div>
        <div className="pl-3 text-center">
          {msg !== '' ? (
            <div>
              <p style={{ color: '#0ebc7d' }}>{msg}</p>
            </div>
          ) : null}
          {errorMsg !== ' ' ? (
            <div>
              <p style={{ color: '#ee4a4a' }}>{errorMsg}</p>
            </div>
          ) : null}
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
