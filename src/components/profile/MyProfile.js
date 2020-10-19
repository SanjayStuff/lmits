import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Button, Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import EditName from "./dashboardModals/EditName";
import EditEmail from "./dashboardModals/EditEmail";
import EditNumber from "./dashboardModals/EditNumber";
import ChangePassword from "./dashboardModals/ChangePassword";
import InputAdornment from "@material-ui/core/InputAdornment";

const MyProfile = () => {
  const [openName, setOpenName] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  return (
    <div style={{ margin: "15px", display: "flex" }}>
      <Paper elevation={3} style={{ padding: "5px" }}>
        <div>
          <Card variant="outlined" style={{ margin: "15px" }}>
            <CardContent>
              <TextField
                id="FirstName"
                disabled
                label="First Name"
                variant="outlined"
                value={localStorage.getItem("lmits_first_name")}
              />
              <TextField
                id="LastName"
                disabled
                label="Last Name"
                variant="outlined"
                value={localStorage.getItem("lmits_last_name")}
              />
              <IconButton
                size="small"
                onClick={() => {
                  setOpenName(true);
                }}
              >
                <CreateOutlinedIcon />
              </IconButton>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card variant="outlined" style={{ margin: "15px" }}>
            <CardContent>
              <TextField
                id="Email"
                disabled
                label="Email"
                variant="outlined"
                value={localStorage.getItem("lmits_email_id")}
              />
              <IconButton
                size="small"
                onClick={() => {
                  setOpenEmail(true);
                }}
              >
                <CreateOutlinedIcon />
              </IconButton>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card variant="outlined" style={{ margin: "15px" }}>
            <CardContent>
              <TextField
                id="Phone Number"
                disabled
                label="Phone Number"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment disableTypography="true" position="start">
                      +91 |
                    </InputAdornment>
                  ),
                }}
                value={localStorage.getItem("lmits_mob_num")}
              />
              <IconButton
                size="small"
                onClick={() => {
                  setOpenPhone(true);
                }}
              >
                <CreateOutlinedIcon />
              </IconButton>
            </CardContent>
          </Card>
        </div>
        <div style={{ margin: "15px" }}>
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
