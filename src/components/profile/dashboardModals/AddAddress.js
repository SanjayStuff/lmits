import React from "react";
import Dialog from "@material-ui/core/Dialog";
import CancelIcon from "@material-ui/icons/Cancel";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";

const AddAddress = (props) => {
  const { handleOpen, setHandleOpen } = props;

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Dialog open={handleOpen}>
        <div style={{ display: "flex" }}>
          <DialogTitle style={{ flexGrow: 1 }}>Add Address</DialogTitle>
          <Button>
            <CancelIcon
              fontSize="large"
              onClick={() => {
                setHandleOpen(false);
              }}
            />
          </Button>
        </div>
        <form onSubmit={onSubmit}>
          <DialogContent>
            <div>
              <TextField
                variant="outlined"
                id="EnterName"
                label="Contact Person Name"
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                id="PhoneNumber"
                type="number"
                label="Contact Number"
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                id="DoorNumber"
                label="Door Number"
              />
            </div>
            <div>
              <TextField variant="outlined" id="Street" label="Street Name" />
            </div>
            <div>
              <TextField
                variant="outlined"
                id="AddressLine1"
                label="Address Line 1"
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                id="AddressLine2"
                label="Address Line 2"
              />
            </div>
            <div>
              <TextField variant="outlined" id="Landmark" label="Landmark" />
            </div>
            <div>
              <TextField variant="outlined" id="City" label="City" />
            </div>
            <div>
              <TextField variant="outlined" id="Pincode" label="Pincode" />
            </div>
            <div>
              <TextField variant="outlined" id="State" label="State" />
            </div>
            <div>
              Save Address As <br />
              <Button color="primary" variant="contained">
                Home
              </Button>
              <Button color="primary" variant="contained">
                Work
              </Button>
              <Button color="primary" variant="contained">
                Other
              </Button>
            </div>
            <div>
              <Button type="submit" color="primary" variant="contained">
                Save
              </Button>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default AddAddress;
