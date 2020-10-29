import React, { useEffect, useState } from "react";
import axios from "axios";
import FastForwardIcon from "@material-ui/icons/FastForward";
import OrderSummary from "./dashboardModals/OrderSummary";
import {
  Button,
  Card,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import styles from "../../styles/profile/AllOrders.module.css";

const AllOrders = () => {
  // const [errorMsg, setErrorMsg] = useState("");
  const [ordersDetails, setOrdersDetails] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(0);
  const [openOrderSummary, setOpenOrderSummary] = useState(false);
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

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ORDER_DETAILS}`, {
        headers: {
          Authorization: localStorage.getItem("lmits_auth_key"),
        },
      })
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.orders);
        if (response.data.response_code === 200) {
          setOrdersDetails(response.data.orders);
        }
        // else if (
        //   response.data.response_code &&
        //   response.data.response_code !== 200
        // ) {
        //   setErrorMsg(response.data.message);
        // }
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <Card elevation={0}>
      {/* {errorMsg !== "" ? { errorMsg } : null} */}

      {ordersDetails.map((order) => {
        return (
          <TableContainer key={order.order_id}>
            <Card variant="outlined" className={styles.all_ord_card}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell align="left">Order Date</TableCell>
                    <TableCell align="left">Order Total</TableCell>
                    <TableCell align="left">Order Details</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {order.order_id}
                    </TableCell>
                    <TableCell align="left">
                      {new Date(order.order_date).getDate()}
                      {"-"}
                      {month[new Date(order.order_date).getMonth()]}
                      {"-"}
                      {new Date(order.order_date).getFullYear()}{" "}
                      {new Date(order.order_date).getHours()}
                      {":"}
                      {new Date(order.order_date).getMinutes()}
                    </TableCell>
                    <TableCell align="left">{order.order_total}</TableCell>

                    <TableCell align="left">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setOpenOrderSummary(true);
                          setSelectedOrderId(order.order_id);
                        }}
                      >
                        View <FastForwardIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {selectedOrderId !== 0 && selectedOrderId === order.order_id ? (
                <OrderSummary
                  openOrderSummary={openOrderSummary}
                  setOpenOrderSummary={setOpenOrderSummary}
                  selectedOrderId={selectedOrderId}
                  id={order.order_id}
                  setSelectedOrderId={setSelectedOrderId}
                />
              ) : null}
            </Card>
          </TableContainer>
        );
      })}
    </Card>
  );
};

export default AllOrders;

{
  /* <Card variant="outlined">
                  <CardContent>
                    <ul style={{ listStyle: 'none' }}>
                      <li>Order ID : {order.order_id}</li>
                      <li>
                        Order Date :{new Date(order.order_date).getDate()}
                        {'-'}
                        {month[new Date(order.order_date).getMonth()]}
                        {'-'}
                        {new Date(order.order_date).getFullYear()}{' '}
                        {new Date(order.order_date).getHours()}
                        {':'}
                        {new Date(order.order_date).getMinutes()}
                      </li>
                      <li>Order Total: {order.order_total}</li>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setOpenOrderSummary(true);
                          setSelectedOrderId(order.order_id);
                        }}
                      >
                        View Order Details <FastForwardIcon />
                      </Button>
                    </ul>
                  </CardContent>
                  {selectedOrderId !== 0 &&
                  selectedOrderId === order.order_id ? (
                    <OrderSummary
                      openOrderSummary={openOrderSummary}
                      setOpenOrderSummary={setOpenOrderSummary}
                      selectedOrderId={selectedOrderId}
                      id={order.order_id}
                      setSelectedOrderId={setSelectedOrderId}
                    />
                  ) : null}
                </Card> */
}
