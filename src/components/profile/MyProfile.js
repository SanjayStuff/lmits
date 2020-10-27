import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Card, Container } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import EditName from './dashboardModals/EditName';
import EditEmail from './dashboardModals/EditEmail';
import EditNumber from './dashboardModals/EditNumber';
import ChangePassword from './dashboardModals/ChangePassword';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography, Row, Col } from 'antd';
import styles from '../../styles/profile/MyProfile.module.css';

const { Title } = Typography;

const useStyles = makeStyles((theme) => ({
  root: {
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
    <Paper elevation={2} className={styles.paper_padd}>
      <Row>
        <Col md={12}>
          <Title level={4} className={styles.title_padd}>
            My Profile
          </Title>
        </Col>

        <Col>
          <Card variant="outlined" className={styles.card_padd}>
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
                        <InputAdornment
                          disableTypography={true}
                          position="start"
                        >
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

          <Card elevation={0} className={styles.card_padd}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
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
                <Card variant="outlined">
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

          <div className={styles.btn_padd}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                setOpenPassword(true);
              }}
            >
              Change Password
            </Button>
          </div>
        </Col>
      </Row>

      <EditName openName={openName} setOpenName={setOpenName} />
      <EditEmail openEmail={openEmail} setOpenEmail={setOpenEmail} />
      <EditNumber openPhone={openPhone} setOpenPhone={setOpenPhone} />
      <ChangePassword
        openPassword={openPassword}
        setOpenPassword={setOpenPassword}
      />
    </Paper>
  );
};

export default MyProfile;
