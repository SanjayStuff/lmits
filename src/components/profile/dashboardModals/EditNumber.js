import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import CancelIcon from '@material-ui/icons/Cancel';
import Alert from '@material-ui/lab/Alert';
import InputAdornment from '@material-ui/core/InputAdornment';
import EditNumberOtpVerification from './EditNumberOtpVerification';
import Link from '@material-ui/core/Link';

const EditNumber = (props) => {
  const { openPhone, setOpenPhone } = props;
  const [new_phone, setNewPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [msg, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [counter, setCounter] = useState(0);
  const [changeDet, setChangeDet] = useState(true);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  const submitNumber = (e) => {
    e.preventDefault();
    setOtpSent(false);
    setMsg('');
    setErrorMsg('');

    if (new_phone.length === 10) {
      const number = {
        mobile_number: new_phone,
        controller: 'users',
        action: 'verify_mobile',
        user: {
          mobile_number: new_phone,
        },
      };
      console.log(number);

      axios
        .post(`${process.env.REACT_APP_SIGNUP_WITH_OTP}`, number)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            localStorage.setItem('lmits_login_mob', new_phone);
            localStorage.setItem(
              'lmits_otp_details',
              response.data.otp.Details
            );
            setOtpSent(true);
            setCounter(15);
          } else if (
            response.data.response_code &&
            response.data.response_code !== 200
          ) {
            setErrorMsg(response.data.message);
            setNewPhone('');
          }
        })
        .catch((err) => alert(err));
    } else {
      setErrorMsg('Enter a valid Mobile Number');
      setNewPhone('');
    }
  };

  return (
    <>
      <Dialog open={openPhone}>
        <div style={{ display: 'flex' }}>
          <DialogTitle style={{ flexGrow: 1 }}>Edit Details</DialogTitle>
          <Button>
            <CancelIcon
              onClick={() => {
                setOpenPhone(false);
                setOtpSent(false);
              }}
            />
          </Button>
        </div>
        <DialogContent>
          <div>
            <TextField
              variant="outlined"
              value={new_phone}
              type="number"
              autoFocus
              fullWidth
              required
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment disableTypography="true" position="start">
                    +91 |
                  </InputAdornment>
                ),
              }}
              id="newNumber"
              label="Update Phone Number"
              onChange={(e) => {
                setNewPhone(e.target.value);
                setOtpSent(false);
              }}
            />
          </div>
          {msg !== '' ? <Alert severity="success">{msg}</Alert> : null}
          {errorMsg !== '' ? <Alert severity="error">{errorMsg}</Alert> : null}
        </DialogContent>
        <form onSubmit={submitNumber}>
          <div style={{ margin: '15px 0 15px 22px' }}>
            <Button
              style={{
                background: '#8845d0',
                outline: 'none',
                border: 'none',
                opacity: '0.7',
              }}
              type="submit"
              color="primary"
              variant="contained"
              disabled={otpSent}
            >
              Send OTP
            </Button>
          </div>
        </form>

        {otpSent ? <EditNumberOtpVerification /> : null}

        <div>
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
              <Link onClick={submitNumber}>
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
      </Dialog>
    </>
  );
};

export default EditNumber;
