import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Button, Grid, CardContent } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import styles from "../../styles/profile/Logout.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTypography-h6": {
      padding: "1rem 0",
      fontSize: "1.2rem",
    },
    "& .MuiDialog-paperWidthSm": {
      overflow: "hidden",
    },
    "& .MuiDialogTitle-root": {
      padding: "0.625rem 1.5rem",
    },
    "& .MuiDialogContent-root": {
      padding: "0 1.5rem",
    },
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const Logout = (props) => {
  const { openLogout, setOpenLogout } = props;
  const classes = useStyles();

  let history = useHistory();

  const onSubmit = () => {
    axios
      .post(
        `${process.env.REACT_APP_LOGOUT}`,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("lmits_auth_key"),
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data.response_code === 200) {
          localStorage.removeItem("lmits_auth_key");
          localStorage.removeItem("lmits_first_name");
          localStorage.removeItem("lmits_last_name");
          localStorage.removeItem("lmits_otp_details");
          localStorage.removeItem("lmits_login_mob");
          localStorage.removeItem("lmits_mob_num");
          localStorage.removeItem("lmits_email_id");
          localStorage.removeItem("lmits_prof_img");
          history.push("/landing");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <Dialog
        className={classes.root}
        open={openLogout}
        disableBackdropClick={false}
      >
        <Grid container spacing={6}>
          <Grid item sm={12}>
            <DialogTitle id="customized-dialog-title">
              Are you sure you want to logout ?
            </DialogTitle>
          </Grid>

          {/* <Grid item sm={2}>
            <IconButton
              className={classes.closeButton}
              aria-label="close"
              onClick={() => {
                setOpenLogout(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Grid> */}
        </Grid>

        <DialogContent>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item sm={6} align="end">
                <Button
                  className={styles.yes_btn}
                  color="primary"
                  onClick={() => {
                    onSubmit();
                  }}
                >
                  Yes
                </Button>
              </Grid>
              <Grid item md={6}>
                <Button
                  className={styles.no_btn}
                  color="primary"
                  onClick={() => {
                    setOpenLogout(false);
                  }}
                >
                  No
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Logout;
