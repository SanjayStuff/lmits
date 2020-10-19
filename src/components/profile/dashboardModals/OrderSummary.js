import React, { useEffect, useState } from "react";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import { Button, CardContent } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import Carousel from "react-bootstrap/Carousel";
import TextField from "@material-ui/core/TextField";

const OrderSummary = (props) => {
  const {
    openOrderSummary,
    setOpenOrderSummary,
    id,
    selectedOrderId,
    setSelectedOrderId,
  } = props;

  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [allDetails, setAllDetails] = useState({});
  const [pickupDetails, setPickupDetails] = useState({});
  const [pickupName, setPickupName] = useState("");
  const [pickupNumber, setPickupNumber] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({});
  const [deliveryDetails, setDeliveryDetails] = useState([]);
  const [createdTime, setCreatedTime] = useState("");

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
            setDeliveryDetails(response.data.sub_orders);
            setCreatedTime(response.data.order.created_at);
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
                    <br />
                    {pickupDetails.state}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card variant="outlined" style={{ margin: "15px" }}>
              <CardContent>
                <Carousel interval="100000">
                  {deliveryDetails.map((details) => {
                    return (
                      <Carousel.Item
                        key={details.delivery_location.sub_order_id}
                      >
                        <Card>
                          <CardContent>
                            <ul>
                              <li>Product Name : {details.package.product}</li>
                              <li>
                                Product Value : {details.package.product_value}
                              </li>
                              <li>
                                Product weight :{" "}
                                {details.package.weight_in_gram}gms
                              </li>
                              <li>Quantity : {details.package.quantity}</li>
                            </ul>
                            <div>
                              <span>
                                <p>
                                  Pick-up Date and Time :
                                  {new Date(createdTime).getDate()}
                                  {"-"}
                                  {month[new Date(createdTime).getMonth()]}
                                  {"-"}
                                  {new Date(createdTime).getFullYear()}{" "}
                                  {new Date(createdTime).getHours()}
                                  {":"}
                                  {new Date(createdTime).getMinutes()}
                                </p>
                              </span>

                              <span>
                                Product Dimension(in cm)
                                <br />
                                <TextField
                                  disabled
                                  variant="outlined"
                                  value={details.package.length}
                                  label="Length"
                                  size="small"
                                />
                                <TextField
                                  disabled
                                  variant="outlined"
                                  value={details.package.breadth}
                                  label="Breadth"
                                  size="small"
                                />
                                <TextField
                                  disabled
                                  variant="outlined"
                                  value={details.package.height}
                                  label="Height"
                                  size="small"
                                />
                              </span>
                            </div>
                            <Card variant="outlined" style={{ margin: "15px" }}>
                              <CardContent>
                                <h6>Drop Address</h6>
                                <p>
                                  {
                                    details.delivery_location.address
                                      .contact_person
                                  }
                                  <br />
                                  {
                                    details.delivery_location.address
                                      .door_number
                                  }{" "}
                                  {details.delivery_location.address.street}
                                  <br />
                                  {details.delivery_location.address.address_1}
                                  <br />
                                  {details.delivery_location.address.address_2}
                                  <br />
                                  {details.delivery_location.address.landmark}
                                  {details.delivery_location.address
                                    .landmark !== "" ? (
                                    <br />
                                  ) : null}
                                  {details.delivery_location.address.city}
                                  {" - "}
                                  {details.delivery_location.address.zip}
                                  <br />
                                  {details.delivery_location.address.state}
                                  <br />
                                  {
                                    details.delivery_location.address
                                      .contact_person_number
                                  }
                                </p>
                              </CardContent>
                            </Card>
                          </CardContent>
                        </Card>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </CardContent>
            </Card>

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
                    Order Placed On :{new Date(createdTime).getDate()}
                    {"-"}
                    {month[new Date(createdTime).getMonth()]}
                    {"-"}
                    {new Date(createdTime).getFullYear()}{" "}
                    {new Date(createdTime).getHours()}
                    {":"}
                    {new Date(createdTime).getMinutes()}
                    <br />
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
