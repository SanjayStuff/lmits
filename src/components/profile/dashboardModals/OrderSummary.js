import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import { Button, CardContent } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import Carousel from "react-bootstrap/Carousel";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Row, Col } from "antd";
import styles from "../../../styles/profile/OrderSummary.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const OrderSummary = (props) => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Dialog open={openOrderSummary} maxWidth="lg">
        <Paper elevation={3}>
          <DialogTitle>Order Details</DialogTitle>
          <Button className={classes.closeButton}>
            <CancelIcon
              onClick={() => {
                setOpenOrderSummary(false);
                setSelectedOrderId(0);
              }}
            />
          </Button>
          <DialogContent className={classes.root}>
            <Row>
              <Col md={14}>
                <Row>
                  <Col md={24}>
                    <Card
                      variant="outlined"
                      className={styles.order_pickup_margin}
                    >
                      <CardContent>
                        <h6 className={styles.order_pickup_address}>
                          Pick-up Address
                        </h6>
                        <Grid
                          container
                          spacing={3}
                          className={styles.order_pickup_info}
                        >
                          <Grid item xs={12} sm={3}>
                            <div>
                              {pickupName}
                              <br />
                              {pickupNumber}
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={8}>
                            <div>
                              <p>
                                {pickupDetails.door_number}{" "}
                                {pickupDetails.street} {""}
                                {pickupDetails.address_1}
                                {""}
                                {pickupDetails.address_2}
                                {""}
                                {pickupDetails.landmark}
                                {""}
                                {pickupDetails.landmark !== "" ? " " : null}
                                {pickupDetails.city}
                                {" - "}
                                {pickupDetails.zip} {pickupDetails.state}
                              </p>
                            </div>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Col>
                  <Col md={24}>
                    <Card variant="outlined" className={styles.order_product}>
                      <h5>Product Details</h5>
                      <Carousel interval={100000}>
                        {deliveryDetails.map((details) => {
                          return (
                            <Carousel.Item
                              key={details.delivery_location.sub_order_id}
                            >
                              <CardContent>
                                <Row>
                                  <Grid item xs={12} sm={4}>
                                    Product Name {""}
                                    <p className={styles.order_input_border}>
                                      {details.package.product}
                                    </p>
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    Pick-up Date and Time {""}
                                    <p className={styles.order_input_border}>
                                      {new Date(createdTime).getDate()}
                                      {"-"}
                                      {month[new Date(createdTime).getMonth()]}
                                      {"-"}
                                      {new Date(createdTime).getFullYear()}{" "}
                                      {new Date(createdTime).getHours()}
                                      {":"}
                                      {new Date(createdTime).getMinutes()}
                                    </p>
                                  </Grid>
                                </Row>

                                <Row>
                                  <Grid item xs={12} sm={4}>
                                    Product Value {""}
                                    <p className={styles.order_input_border}>
                                      {details.package.product_value}
                                    </p>
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    Product Dimension(in cm)
                                    <Grid
                                      container
                                      spacing={1}
                                      style={{ margin: ".3rem 0" }}
                                    >
                                      <Grid item xs={3} sm={3}>
                                        Length
                                        <p
                                          className={styles.order_input_border}
                                        >
                                          {details.package.length}
                                        </p>
                                      </Grid>
                                      <Grid item xs={3} sm={3}>
                                        Breadth
                                        <p
                                          className={styles.order_input_border}
                                        >
                                          {details.package.breadth}
                                        </p>
                                      </Grid>
                                      <Grid item xs={3} sm={3}>
                                        Height
                                        <p
                                          className={styles.order_input_border}
                                        >
                                          {details.package.height}
                                        </p>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Row>

                                <Row>
                                  <Col md={24}>
                                    <Row>
                                      <Col md={8}>
                                        <Grid item xs={12} md={12}>
                                          Product weight {""}
                                          <p
                                            className={
                                              styles.order_input_border
                                            }
                                          >
                                            {details.package.weight_in_gram}
                                            gms
                                          </p>
                                        </Grid>

                                        <Grid item xs={12} md={12}>
                                          Product Quantity {""}
                                          <p
                                            className={
                                              styles.order_input_border
                                            }
                                          >
                                            {details.package.quantity}
                                          </p>
                                        </Grid>
                                      </Col>
                                      <Col md={14}>
                                        <Grid item xs={12} md={12}>
                                          <div
                                            className={
                                              styles.order_input_border
                                            }
                                          >
                                            <h6
                                              className={
                                                styles.order_drop_address
                                              }
                                            >
                                              Drop Address
                                            </h6>
                                            <p>
                                              {
                                                details.delivery_location
                                                  .address.contact_person
                                              }
                                              {
                                                details.delivery_location
                                                  .address.door_number
                                              }{" "}
                                              {
                                                details.delivery_location
                                                  .address.street
                                              }{" "}
                                              {
                                                details.delivery_location
                                                  .address.address_1
                                              }{" "}
                                              {
                                                details.delivery_location
                                                  .address.address_2
                                              }{" "}
                                              {
                                                details.delivery_location
                                                  .address.landmark
                                              }{" "}
                                              {details.delivery_location.address
                                                .landmark !== "" ? (
                                                <br />
                                              ) : null}{" "}
                                              {
                                                details.delivery_location
                                                  .address.city
                                              }
                                              {" - "}
                                              {
                                                details.delivery_location
                                                  .address.zip
                                              }{" "}
                                              {
                                                details.delivery_location
                                                  .address.state
                                              }{" "}
                                              {
                                                details.delivery_location
                                                  .address.contact_person_number
                                              }
                                            </p>
                                          </div>
                                        </Grid>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </CardContent>
                            </Carousel.Item>
                          );
                        })}
                      </Carousel>
                    </Card>
                  </Col>
                  <Col md={24}>
                    <Card
                      variant="outlined"
                      className={styles.order_pickup_margin}
                    >
                      <CardContent>
                        <h5>Payment Details</h5>
                        <Row>
                          <Col md={24}>
                            <Row>
                              <Col md={12}>
                                <Grid container spacing={3}>
                                  <Grid item xs={12} sm={4}>
                                    Order ID{""}
                                    <p className={styles.order_input_border}>
                                      {paymentDetails.order_id}
                                    </p>
                                  </Grid>

                                  <Grid item xs={12} sm={8}>
                                    Order Placed On{""}
                                    <p className={styles.order_input_border}>
                                      {new Date(createdTime).getDate()}
                                      {"-"}
                                      {month[new Date(createdTime).getMonth()]}
                                      {"-"}
                                      {new Date(createdTime).getFullYear()}{" "}
                                      {new Date(createdTime).getHours()}
                                      {":"}
                                      {new Date(createdTime).getMinutes()}
                                    </p>
                                  </Grid>
                                </Grid>

                                <Grid container spacing={3}>
                                  <Grid item xs={12} sm={4}>
                                    Vendor{""}
                                    <div>
                                      <img
                                        height={50}
                                        src={allDetails.supplier_logo}
                                        alt="Vendor Logo"
                                      />
                                    </div>
                                  </Grid>

                                  <Grid item xs={12} sm={8}>
                                    Payment Method {""}
                                    <p
                                      className={styles.order_input_border}
                                      style={{ textTransform: "uppercase" }}
                                    >
                                      {paymentDetails.method}
                                    </p>
                                  </Grid>
                                </Grid>

                                <Grid container spacing={3}>
                                  <Grid item xs={12} sm={8}>
                                    Service Provider {""}
                                    <p className={styles.order_ser_prov}>
                                      LMiTS Solutions Pvt. Ltd.
                                    </p>
                                  </Grid>
                                </Grid>
                              </Col>

                              <Col xs={24} md={12}>
                                <Grid item xs={12} sm={10}>
                                  <div>
                                    <hr
                                      style={{
                                        borderTop: "2px dashed black",
                                      }}
                                    />
                                    <Row>
                                      <Col xs={16} sm={17}>
                                        <p className={styles.order_total}>
                                          Delivery Charges
                                          <br />
                                          Service Charges
                                          <br />
                                          GST
                                        </p>
                                      </Col>

                                      <Row>
                                        <Col xs={8} sm={12}>
                                          <p className={styles.order_total}>
                                            Rs.
                                            {paymentDetails.vendor_charge}
                                            <br />
                                            Rs.
                                            {paymentDetails.lmits_charge}
                                            <br />
                                            Rs.{paymentDetails.lmits_tax}
                                          </p>
                                        </Col>
                                      </Row>
                                    </Row>

                                    <hr
                                      style={{
                                        borderTop: "2px dashed black",
                                      }}
                                    />
                                    <Row>
                                      <Col xs={15} sm={17}>
                                        <p className={styles.order_total}>
                                          Order Total
                                        </p>
                                      </Col>

                                      <Row>
                                        <Col xs={12} sm={12}>
                                          <p className={styles.order_total}>
                                            Rs.
                                            {paymentDetails.amount}
                                          </p>
                                        </Col>
                                      </Row>
                                    </Row>
                                  </div>
                                </Grid>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardContent>
                    </Card>
                  </Col>
                </Row>
              </Col>

              <Col md={8}>
                <Card variant="outlined" className={styles.order_pickup_margin}>
                  <CardContent>
                    <h5>Order Status</h5>
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </DialogContent>
        </Paper>
      </Dialog>
    </div>
  );
};

export default OrderSummary;
