import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import EditNumber from "./dashboardModals/EditNumber";
import ChangePassword from "./dashboardModals/ChangePassword";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";

const MyProfileNew = () => {
  const [editFirstName, setEditFirstName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [editEmailId, setEditEmailId] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const [first_name, setFirstName] = useState(
    localStorage.getItem("lmits_first_name")
  );
  const [last_name, setLastName] = useState(
    localStorage.getItem("lmits_last_name")
  );
  const [new_email, setEmailId] = useState(
    localStorage.getItem("lmits_email_id")
  );
  const mobile_number = localStorage.getItem("lmits_mob_num");

  const [openButton, setOpenButton] = useState(false);

  const [nameMsg, setNameMsg] = useState("");
  const [errorNameMsg, setErrorNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [errorEmailMsg, setErrorEmailMsg] = useState("");

  const handleCancelClick = () => {
    setOpenButton(false);
    setEditFirstName(false);
    setEditLastName(false);
    setEditEmailId(false);
    setFirstName(localStorage.getItem("lmits_first_name"));
    setLastName(localStorage.getItem("lmits_last_name"));
    setEmailId(localStorage.getItem("lmits_email_id"));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setNameMsg("");
    setErrorNameMsg("");
    setEmailMsg("");
    setErrorEmailMsg("");

    if (
      first_name !== localStorage.getItem("lmits_first_name") ||
      last_name !== localStorage.getItem("lmits_last_name")
    ) {
      const name = {
        first_name,
        last_name,
      };
      console.log(name);

      axios
        .post(`${process.env.REACT_APP_EDIT_NAME}`, name, {
          headers: {
            Authorization: localStorage.getItem("lmits_auth_key"),
          },
        })
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            localStorage.setItem("lmits_first_name", first_name);
            localStorage.setItem("lmits_last_name", last_name);
            setNameMsg(response.data.message);
            setOpenButton(false);
            setEditFirstName(false);
            setEditLastName(false);
            setEditEmailId(false);
          } else if (
            response.data.response_code &&
            response.data.response_code !== 200
          ) {
            setErrorNameMsg(response.data.message);
          }
        })
        .catch((err) => alert(err));
    }

    if (new_email !== localStorage.getItem("lmits_email_id")) {
      const email = {
        old_email: localStorage.getItem("lmits_email_id"),
        new_email,
      };
      console.log(email);

      axios
        .post(`${process.env.REACT_APP_EDIT_EMAIL}`, email, {
          headers: {
            Authorization: localStorage.getItem("lmits_auth_key"),
          },
        })
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code === 200) {
            localStorage.setItem("lmits_email_id", new_email);
            setEmailMsg(response.data.message);
            setOpenButton(false);
            setEditFirstName(false);
            setEditLastName(false);
            setEditEmailId(false);
          } else if (
            response.data.response_code &&
            response.data.response_code !== 200
          ) {
            setErrorEmailMsg(response.data.message);
          }
        })
        .catch((err) => alert(err));
    }

    setOpenButton(false);
    setEditFirstName(false);
    setEditLastName(false);
    setEditEmailId(false);
  };

  return (
    <div>
      <Paper>
        <h5>My Profile</h5>
        <Card>
          <CardContent>
            <form onSubmit={onSubmit}>
              <div>
                <TextField
                  id="First Name"
                  label="First Name"
                  variant="outlined"
                  required
                  disabled={!editFirstName}
                  value={first_name}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setOpenButton(true);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment disableTypography={true} position="start">
                        <IconButton
                          size="small"
                          onClick={() => {
                            setEditFirstName(true);
                          }}
                        >
                          <CreateOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="Last Name"
                  label="Last Name"
                  variant="outlined"
                  required
                  disabled={!editLastName}
                  value={last_name}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setOpenButton(true);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment disableTypography={true} position="start">
                        <IconButton
                          size="small"
                          onClick={() => {
                            setEditLastName(true);
                          }}
                        >
                          <CreateOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div>
                <TextField
                  id="Email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  disabled={!editEmailId}
                  value={new_email}
                  onChange={(e) => {
                    setEmailId(e.target.value);
                    setOpenButton(true);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment disableTypography={true} position="start">
                        <IconButton
                          size="small"
                          onClick={() => {
                            setEditEmailId(true);
                          }}
                        >
                          <CreateOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="Phone Number"
                  label="Phone Number"
                  variant="outlined"
                  type="number"
                  disabled
                  value={mobile_number}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment disableTypography={true} position="start">
                        +91 |
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment disableTypography={true} position="start">
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
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCancelClick}
                  disabled={!openButton}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!openButton}
                >
                  Save Changes
                </Button>
              </div>
              {nameMsg !== "" ? (
                <Alert severity="success">{nameMsg}</Alert>
              ) : null}
              {errorNameMsg !== "" ? (
                <Alert severity="error">{errorNameMsg}</Alert>
              ) : null}
              {emailMsg !== "" ? (
                <Alert severity="success">{emailMsg}</Alert>
              ) : null}
              {errorEmailMsg !== "" ? (
                <Alert severity="error">{errorEmailMsg}</Alert>
              ) : null}
            </form>
          </CardContent>
        </Card>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setOpenPassword(true);
            }}
          >
            Change Password
          </Button>
        </div>
        <EditNumber openPhone={openPhone} setOpenPhone={setOpenPhone} />
        <ChangePassword
          openPassword={openPassword}
          setOpenPassword={setOpenPassword}
        />
      </Paper>
    </div>
  );
};

export default MyProfileNew;
