import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import AddAddress from "../profile/dashboardModals/AddAddress";

const AddressBook = () => {
  const [handleOpen, setHandleOpen] = useState(false);

  return (
    <Paper elevation={3} style={{ padding: "5px" }}>
      <h5>Address Book</h5>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          setHandleOpen(true);
        }}
      >
        Add Address <AddIcon />
      </Button>
      <AddAddress handleOpen={handleOpen} setHandleOpen={setHandleOpen} />
    </Paper>
  );
};

export default AddressBook;
