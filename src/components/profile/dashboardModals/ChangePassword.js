import React, { useState } from 'react';
import axios from 'axios';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import CancelIcon from '@material-ui/icons/Cancel';
import Alert from '@material-ui/lab/Alert';

const ChangePassword = (props) => {
  const { openPassword, setOpenPassword } = props;
  const [current_password, setCurrentPassword] = useState('');
  const [new_password, setNewPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [msg, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setMsg('');
    setErrorMsg('');

    if (new_password === password_confirmation) {
      const password = {
        update_password_params: {
          current_password,
          new_password,
          password_confirmation,
        },
      };
      console.log(password.update_password_params);

      axios
        .post(`${process.env.REACT_APP_EDIT_PASSWORD}`, password, {
          headers: {
            Authorization: localStorage.getItem('lmits_auth_key'),
          },
        })
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            setMsg(response.data.message);
          } else if (
            response.data.response_code &&
            response.data.response_code !== 200
          ) {
            setErrorMsg(response.data.message);
          }
        })
        .catch((err) => alert(err));
    } else {
      setNewPassword('');
      setPasswordConfirmation('');
      setErrorMsg('Passwords Do Not Match');
    }
  };

  return (
    <>
      <Dialog open={openPassword}>
        <div style={{ display: 'flex' }}>
          <DialogTitle style={{ flexGrow: 1 }}>Edit Details</DialogTitle>
          <Button
            disableRipple={true}
            style={{ outline: 'none', border: 'none' }}
          >
            <CancelIcon
              onClick={() => {
                setOpenPassword(false);
              }}
            />
          </Button>
        </div>
        <form onSubmit={onSubmit}>
          <DialogContent>
            <div>
              <TextField
                variant="outlined"
                value={current_password}
                required
                autoFocus
                fullWidth
                margin="dense"
                id="CurrentPassword"
                label="Enter Current Password"
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                value={new_password}
                required
                error={
                  new_password !== password_confirmation &&
                  password_confirmation.length > 0
                }
                fullWidth
                margin="dense"
                id="newPassword"
                label="Enter New Password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                value={password_confirmation}
                required
                error={
                  new_password !== password_confirmation &&
                  password_confirmation.length > 0
                }
                fullWidth
                margin="dense"
                id="confirmPassword"
                label="Re-Enter New Password"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
            {msg !== '' ? <Alert severity="success">{msg}</Alert> : null}
            {errorMsg !== '' ? (
              <Alert severity="error">{errorMsg}</Alert>
            ) : null}
          </DialogContent>

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
            >
              Change Password
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default ChangePassword;
