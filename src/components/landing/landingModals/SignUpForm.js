import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const SignUpForm = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === password_confirmation) {
      const signUp = {
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
        mobile_number: localStorage.getItem("lmits_login_mob"),
        image,
      };
      console.log(signUp);
      axios
        .post(`${process.env.REACT_APP_SIGNUP_DATA}`, signUp)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            alert(response.data.message);
          } else if (
            response.data.response_code &&
            response.data.response_code !== 200
          ) {
            alert(response.data.message);
          }
        })
        .catch((err) => alert(err));
    } else {
      alert("Passwords do not match");
      setPassword("");
      setPasswordConfirmation("");
    }
  };

  return (
    <>
      <h3
        style={{
          margin: "0.5em",
          padding: "0.5rem",
          marginTop: "0",
          paddingTop: "0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Sign Up
      </h3>
      <form onSubmit={onSubmit}>
        <div
          style={{
            margin: "0.5em",
            padding: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="FirstName"
            variant="outlined"
            label="First Name"
            value={first_name}
            required
            size="small"
            style={{ minWidth: "15vw" }}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div
          style={{
            margin: "0.5em",
            padding: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="LastName"
            variant="outlined"
            label="Last Name"
            value={last_name}
            required
            size="small"
            style={{ minWidth: "15vw" }}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div
          style={{
            margin: "0.5em",
            padding: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            label="Email"
            size="small"
            style={{ minWidth: "15vw" }}
          />
        </div>
        <div
          style={{
            margin: "0.5em",
            padding: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            error={
              password !== password_confirmation &&
              password_confirmation.length > 0
            }
            id="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="outlined"
            label="Password"
            size="small"
            style={{ minWidth: "15vw" }}
          />
        </div>
        <div
          style={{
            margin: "0.5em",
            padding: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            error={
              password !== password_confirmation &&
              password_confirmation.length > 0
            }
            id="ConfirmPassword"
            type="password"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
            variant="outlined"
            label="Password"
            size="small"
            style={{ minWidth: "15vw" }}
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
            Register
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
