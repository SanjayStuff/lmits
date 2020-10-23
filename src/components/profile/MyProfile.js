import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import EditName from './dashboardModals/EditName';
import EditEmail from './dashboardModals/EditEmail';
import EditNumber from './dashboardModals/EditNumber';
import ChangePassword from './dashboardModals/ChangePassword';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography } from 'antd';

const { Title } = Typography;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiButton-containedPrimary': {
      opacity: '.8',
      padding: '.5rem 2.3rem',
      outline: 'none',
      border: 'none',
    },
    '& .MuiCard-root': {
      width: '70%',
    },
    '& .MuiIconButton-sizeSmall': {
      outline: 'none',
      border: 'none',
    },

    '& .MuiCardContent-root': {
      padding: '1.8rem',
    },
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const MyProfile = () => {
  const classes = useStyles();
  const [openName, setOpenName] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  return (
    <div className={classes.root}>
      <Paper elevation={3} style={{ padding: '5px' }}>
        <Title level={4} style={{ margin: '1.2rem 2.7rem' }}>
          My Profile
        </Title>

        <Card variant="outlined" style={{ margin: '1rem 3rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CardContent>
                <TextField
                  margin="dense"
                  id="FirstName"
                  disabled
                  label="First Name"
                  variant="outlined"
                  value={localStorage.getItem('lmits_first_name')}
                />
              </CardContent>
            </Grid>

            <Grid item xs={12} sm={5}>
              <CardContent>
                <TextField
                  margin="dense"
                  id="LastName"
                  disabled
                  label="Last Name"
                  variant="outlined"
                  value={localStorage.getItem('lmits_last_name')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment disableTypography={true} position="start">
                        <IconButton
                          size="small"
                          onClick={() => {
                            setOpenName(true);
                          }}
                        >
                          <CreateOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        <Card elevation={0} style={{ margin: '1rem 3rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" style={{ width: 'auto' }}>
                <CardContent>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="Email"
                    disabled
                    label="Email"
                    variant="outlined"
                    value={localStorage.getItem('lmits_email_id')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          disableTypography={true}
                          position="start"
                        >
                          <IconButton
                            size="small"
                            onClick={() => {
                              setOpenEmail(true);
                            }}
                          >
                            <CreateOutlinedIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card variant="outlined" style={{ width: 'auto' }}>
                <CardContent>
                  <TextField
                    margin="dense"
                    id="Phone Number"
                    disabled
                    label="Phone Number"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          disableTypography={true}
                          position="start"
                        >
                          +91 |
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          disableTypography={true}
                          position="start"
                        >
                          <IconButton
                            size="small"
                            onClick={() => {
                              setOpenPhone(true);
                            }}
                          >
                            <CreateOutlinedIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    value={localStorage.getItem('lmits_mob_num')}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Card>

        <Grid container style={{ margin: '1rem 2rem' }}>
          <Grid item xs={12} sm={10} align="start">
            <div style={{ margin: '15px' }}>
              {/*<Card variant="outlined">*/}
              {/*  <CardContent>*/}
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  setOpenPassword(true);
                }}
              >
                Change Password
              </Button>
              {/*</CardContent>*/}
              {/*</Card>*/}
            </div>
          </Grid>
        </Grid>

        <EditName openName={openName} setOpenName={setOpenName} />
        <EditEmail openEmail={openEmail} setOpenEmail={setOpenEmail} />
        <EditNumber openPhone={openPhone} setOpenPhone={setOpenPhone} />
        <ChangePassword
          openPassword={openPassword}
          setOpenPassword={setOpenPassword}
        />
      </Paper>
    </div>
  );
};

export default MyProfile;
