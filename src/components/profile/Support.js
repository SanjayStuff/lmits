import React from 'react';
import { Typography } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';

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
    <div classes={classes.root}>
      <Paper elevation={3} style={{ padding: '5px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card
              variant="outlined"
              style={{ margin: '15px', padding: '15px' }}
            >
              <Title level={4}>Contact</Title>
              <Box display="flex">
                <Box>
                  Reach our customer support representatives for any of your
                  queries and/or feedback and to any issue. Our on phone support
                  is available between 9AM - 6PM from Monday - Friday.
                </Box>
              </Box>
              <Button
                style={{
                  margin: '15px 0px',
                  background: '#8845d0',
                  opacity: '0.7',
                  outline: 'none',
                  border: 'none',
                }}
                onClick={handleClickOpen}
                color="primary"
                variant="contained"
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
                <div style={{ display: 'flex' }}>
                  <DialogTitle
                    style={{ flexGrow: 2 }}
                    id="alert-dialog-slide-title"
                  >
                    {'Customer Support'}

                    {/* <Button
                    disableFocusRipple="true"
                    disableRipple
                    disableTouchRipple
                    onClick={handleClose}
                    style={{ outline: 'none' }}
                  >
                    <CancelIcon />
                  </Button> */}
                  </DialogTitle>
                </div>

                <DialogContent maxWidth="100px">
                  <DialogContentText id="alert-dialog-slide-description">
                    <Title align="middle" level={4}>
                      +91 86200 87300
                    </Title>
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card
              variant="outlined"
              style={{ margin: '15px', padding: '15px' }}
            >
              <Title level={4}>Email</Title>
              <Box display="flex">
                <Box>
                  Drop us an email at any point of time for any of your queries
                  and/or feedback and to report any issue. our supoort teak will
                  get back to you within 24 hours.
                </Box>
              </Box>
              <a href={'mailto:'}>
                <Button
                  style={{
                    margin: '15px 0px',
                    background: '#8845d0',
                    opacity: '0.7',
                    outline: 'none',
                    border: 'none',
                  }}
                  onClick={handleClickOpen}
                  color="primary"
                  variant="contained"
                >
                  Email Us
                </Button>
              </a>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Support;
