import React, { useState } from "react";
import lmitsLogo from "../../../assets/images/Logo.png";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router";

const EnterNewPassword = () => {
  const [new_password, setNewPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    const changePass = {
      update_password_params: {
        phone: localStorage.getItem("lmits_login_mob"),
        new_password,
        password_confirmation,
      },
    };
    console.log(changePass.update_password_params);
    axios
      .post(`${process.env.REACT_APP_FORGOT_CHANGE_PASS}`, changePass)
      .then(function (response) {
        console.log(response.data);
        if (response.data.response_code === 200) {
          alert(response.data.message);
          localStorage.removeItem("lmits_login_mob");
          // history.push("/");
        } else if (
          response.data.response_code &&
          response.data.response_code !== 200
        ) {
          alert(response.data.message);
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <img
        src={lmitsLogo}
        style={{
          width: "25%",
          margin: "0.5em",
          padding: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <form onSubmit={onSubmit}>
        <div
          style={{
            margin: "0.5em",
            padding: "0.5em",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="new_Password"
            type="password"
            value={new_password}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            variant="outlined"
            label="Enter New Password"
            size="small"
            style={{ minWidth: "350px" }}
          />
        </div>
        <div
          style={{
            margin: "0.5em",
            padding: "0.5em",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="Password_Confirmation"
            type="password"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
            variant="outlined"
            label="Confirm New Password"
            size="small"
            style={{ minWidth: "350px" }}
          />
        </div>
        <div
          style={{
            margin: "1rem",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              paddingRight: "4rem",
              paddingLeft: "4rem",
              paddingTop: "1rem",
              fontSize: "1rem",
              minWidth: "350px",
            }}
          >
            Change Password
          </Button>
        </div>
      </form>
    </>
  );
};

export default EnterNewPassword;
