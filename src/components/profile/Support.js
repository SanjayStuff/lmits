import React from 'react';
import { Typography } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: 'flex',
    backgroundColor: 'gold',
  },
  marginAutoItem: {
    margin: 'auto',
  },
  alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  loginButton: {
    color: '#fff',
    background: '#8845d0',
    textTransform: 'capitalize',
    marginLeft: 'auto',
    fontSize: '15px',
    padding: '0.5rem 1rem',
    outline: 'none',
    border: 'none',

    opacity: '0.7',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      border: 'none',
      background: '#8845d0',
      boxShadow: '0 10px 36px rgba(0, 0, 0, 0.15)',
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const { Title } = Typography;

const Support = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Title level={3}>Contact</Title>
            <Box display="flex">
              <Box>
                Reach our customer support representatives for any of your
                queries and/or feedback and to any issue. Our on phone support
                is available between 9AM to 6PM from Monday to Friday.
              </Box>
            </Box>
            <Button
              onClick={handleClickOpen}
              className={classes.loginButton}
              type="submit"
              variant="contained"
              color="primary"
              style={{
                marginTop: '1.5rem',
                minWidth: 'auto',
              }}
            >
              Call Us
            </Button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {'Call Us'}
              </DialogTitle>
              <DialogContent maxWidth="100px">
                <DialogContentText id="alert-dialog-slide-description">
                  +91 86200 87300
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Title level={3}>Email</Title>
            <Box display="flex">
              <Box>
                Drop us an email at any point of time for any of your queries
                and/or feedback and to report any issue. our supoort teak will
                get back to you within 24 hours
              </Box>
            </Box>
            <a href={'mailto:'}>
              <Button
                className={classes.loginButton}
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  marginTop: '1.5rem',
                  minWidth: 'auto',
                }}
              >
                Email Us
              </Button>
            </a>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Support;
