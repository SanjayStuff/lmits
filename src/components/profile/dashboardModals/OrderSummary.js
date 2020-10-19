import React, { useEffect, useState } from "react";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import { Button, CardContent } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

const OrderSummary = (props) => {
  const {
    openOrderSummary,
    setOpenOrderSummary,
    id,
    selectedOrderId,
    setSelectedOrderId,
  } = props;

  const [allDetails, setAllDetails] = useState({});
  const [pickupDetails, setPickupDetails] = useState({});
  const [pickupName, setPickupName] = useState("");
  const [pickupNumber, setPickupNumber] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({});
  const [deliveryDetails, setDeliveryDetails] = useState();

  useEffect(() => {
    if (openOrderSummary && id === selectedOrderId) {
      const orderSummaryDetails = () => {
        const summaryData = {
          id,
        };
        console.log(summaryData);

        axios
          .post(`${process.env.REACT_APP_ORDER_SUMMARY}`, summaryData, {
            headers: {
              Authorization: localStorage.getItem("lmits_auth_key"),
            },
          })
          .then(function (response) {
            console.log(response.data);
            setAllDetails(response.data);

            // const deliveryContent = [];
            // response.data.sub_orders.map((val) => {
            //   Object.entries(val).map(([key, value]) => {
            //     console.log(key);
            //     console.log(value);
            //   });
            // });
            // (r) => deliveryContent.push(r));
            // setDeliveryDetails(deliveryContent);

            setPickupDetails(
              response.data.sub_orders[0].pickup_location.address
            );
            setPickupName(
              response.data.sub_orders[0].pickup_location.contact_person_name
            );
            setPickupNumber(
              response.data.sub_orders[0].pickup_location.contact_person_phone
            );
            setPaymentDetails(response.data.payment);
          })
          .catch((err) => alert(err));
      };
      orderSummaryDetails();
    }
  }, []);

  return (
    <>
      <Dialog
        open={openOrderSummary}
        maxWidth="lg"
        style={{ margin: "15px", display: "flex" }}
      >
        <Paper elevation={3} style={{ padding: "5px" }}>
          <DialogTitle>Order Details</DialogTitle>
          <Button>
            <CancelIcon
              onClick={() => {
                setOpenOrderSummary(false);
                setSelectedOrderId(0);
              }}
            />
          </Button>
          <DialogContent>
            <Card variant="outlined" style={{ margin: "15px" }}>
              <CardContent>
                <h5>Pick-up Address</h5>
                <div>
                  <p>
                    {pickupName}
                    <br />
                    {pickupNumber}
                  </p>
                </div>
                <div>
                  <p>
                    {pickupDetails.door_number} {pickupDetails.street}
                    <br />
                    {pickupDetails.address_1}
                    <br />
                    {pickupDetails.address_2}
                    <br />
                    {pickupDetails.landmark}
                    {pickupDetails.landmark !== "" ? <br /> : null}
                    {pickupDetails.city}
                    {" - "}
                    {pickupDetails.zip}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/*{deliveryDetails.map((deliveryDetail) => {*/}
            {/*  return (*/}
            {/*    <div>*/}
            {/*      <Card variant="outlined" style={{ margin: "15px" }}>*/}
            {/*        <CardContent>*/}
            {/*          <ul>*/}
            {/*            <li>*/}
            {/*              {deliveryDetail.delivery_location.contact_person_name}*/}
            {/*            </li>*/}
            {/*          </ul>*/}
            {/*        </CardContent>*/}
            {/*      </Card>*/}
            {/*    </div>*/}
            {/*  );*/}
            {/*})}*/}

            {allDetails.sub_orders.map((details) => {
              return (
                <div>
                  <Card>
                    <CardContent>
                      <ul>
                        <li>{details.pickup_location.contact_person_name}</li>
                        <li>
                          {details.delivery_location.contact_person_phone}
                        </li>
                        <li>{details.package.sub_order_id}</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}

            <Card variant="outlined" style={{ margin: "15px" }}>
              <CardContent>
                <h5>Payment Details</h5>
                <div>
                  <p>
                    Order ID: {paymentDetails.order_id}
                    <br />
                    Service Provider: LMiTS Solutions Pvt. Ltd.
                    <br />
                    Supplier:
                    <img src={allDetails.supplier_logo} alt="Supplier Logo" />
                  </p>
                </div>
                <div>
                  <p>
                    Payment Method:
                    <span style={{ textTransform: "uppercase" }}>
                      {paymentDetails.method}
                    </span>
                  </p>
                </div>
                <div>
                  <hr
                    style={{
                      borderTop: "1px dashed black",
                    }}
                  />
                  <p>
                    Delivery Charges : Rs.{paymentDetails.vendor_charge}
                    <br />
                    Service Charges : Rs.{paymentDetails.lmits_charge}
                    <br />
                    GST: Rs.{paymentDetails.lmits_tax}
                  </p>
                  <hr
                    style={{
                      borderTop: "1px dashed black",
                    }}
                  />
                  <p>Order Total : Rs.{paymentDetails.amount}</p>
                </div>
              </CardContent>
            </Card>
          </DialogContent>
        </Paper>
      </Dialog>
    </>
  );
};

export default OrderSummary;
