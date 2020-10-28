import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

const Logout = (props) => {
  const { openLogout, setOpenLogout } = props;

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
      <Dialog open={openLogout}>
        <Paper>
          <p>Do You want to Logout ?</p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onSubmit();
            }}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setOpenLogout(false);
            }}
          >
            No
          </Button>
        </Paper>
      </Dialog>
    </>
  );
};

export default Logout;
