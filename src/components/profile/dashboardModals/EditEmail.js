import React, { useState } from 'react';
import axios from 'axios';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import CancelIcon from '@material-ui/icons/Cancel';
import Alert from '@material-ui/lab/Alert';

const EditEmail = (props) => {
  const { openEmail, setOpenEmail } = props;
  const [new_email, setNewEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setMsg('');
    setErrorMsg('');

    const email = {
      old_email: localStorage.getItem('lmits_email_id'),
      new_email,
    };
    console.log(email);

    axios
      .post(`${process.env.REACT_APP_EDIT_EMAIL}`, email, {
        headers: {
          Authorization: localStorage.getItem('lmits_auth_key'),
        },
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.response_code === 200) {
          localStorage.setItem('lmits_email_id', new_email);
          setMsg(response.data.message);
        } else if (
          response.data.response_code &&
          response.data.response_code !== 200
        ) {
          setErrorMsg(response.data.message);
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <>
      <Dialog open={openEmail}>
        <div style={{ display: 'flex' }}>
          <DialogTitle style={{ flexGrow: 1 }}>Edit Details</DialogTitle>
          <Button
            disableRipple={true}
            style={{ outline: 'none', border: 'none' }}
          >
            <CancelIcon
              onClick={() => {
                setOpenEmail(false);
              }}
            />
          </Button>
        </div>
        <form onSubmit={onSubmit}>
          <DialogContent>
            <div>
              <TextField
                variant="outlined"
                disabled
                value={localStorage.getItem('lmits_email_id')}
                fullWidth
                margin="dense"
                id="email"
                label="Current Email"
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                type="email"
                required
                autoFocus
                value={new_email}
                fullWidth
                margin="dense"
                id="emailChange"
                label="Change Email"
                onChange={(e) => setNewEmail(e.target.value)}
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
              }}
              type="submit"
              color="primary"
              variant="contained"
            >
              Update Email
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default EditEmail;
