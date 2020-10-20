import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import CancelIcon from '@material-ui/icons/Cancel';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import { Row, Col } from 'antd';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    '& .MuiButton-containedPrimary': {
      color: '#fff',
      background: '#8845d0',
      outline: 'none',
      border: 'none',
    },
    '& .MuiIconButton-sizeSmall': {
      outline: 'none',
      border: 'none',
    },
  },
}));

const EditName = (props) => {
  const classes = useStyles();

  const { openName, setOpenName } = props;
  const [first_name, setFirstName] = useState(
    localStorage.getItem('lmits_first_name')
  );
  const [last_name, setLastName] = useState(
    localStorage.getItem('lmits_last_name')
  );
  const [msg, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setMsg('');
    setErrorMsg('');

    const name = {
      first_name,
      last_name,
    };
    console.log(name);

    axios
      .post(`${process.env.REACT_APP_EDIT_NAME}`, name, {
        headers: {
          Authorization: localStorage.getItem('lmits_auth_key'),
        },
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.response_code === 200) {
          localStorage.setItem('lmits_first_name', first_name);
          localStorage.setItem('lmits_last_name', last_name);
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
    <div classes={classes.root}>
      <Dialog open={openName}>
        <div>
          <div style={{ display: 'flex' }}>
            <DialogTitle style={{ flexGrow: 1 }}>Edit Details</DialogTitle>
            <Button>
              <CancelIcon
                onClick={() => {
                  setOpenName(false);
                }}
              />
            </Button>
          </div>

          <form onSubmit={onSubmit}>
            <DialogContent>
              <Row>
                <Col>
                  <TextField
                    variant="outlined"
                    value={first_name}
                    required
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextField
                    variant="outlined"
                    required
                    value={last_name}
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>

                {msg !== '' ? <Alert severity="success">{msg}</Alert> : null}
                {errorMsg !== '' ? (
                  <Alert severity="error">{errorMsg}</Alert>
                ) : null}
              </Row>
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
                Update Details
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default EditName;
