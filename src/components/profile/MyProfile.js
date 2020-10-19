import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const MyProfile = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={6} xs={6}>
        <Paper className={classes.paper}>Full Name</Paper>
      </Grid>
      <Grid item xs={6} xs={6}>
        <Paper className={classes.paper}>Email</Paper>
      </Grid>
    </Grid>
  );
};

export default MyProfile;
