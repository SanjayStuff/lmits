import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import FastForwardIcon from '@material-ui/icons/FastForward';
import OrderSummary from './dashboardModals/OrderSummary';
import axios from 'axios';
import styles from '../../styles/profile/CourierOrders.module.css';

import {
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from '@material-ui/core';

const CourierOrders = () => {
  // const [errorMsg, setErrorMsg] = useState("");
  const [ordersDetails, setOrdersDetails] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(0);
  const [openOrderSummary, setOpenOrderSummary] = useState(false);
  let month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_COURIER_DETAILS}`, {
        headers: {
          Authorization: localStorage.getItem('lmits_auth_key'),
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
    <>
      {/* {errorMsg !== "" ? { errorMsg } : null} */}

      {ordersDetails.map((order) => {
        return (
          <TableContainer key={order.order_id}>
            <Table aria-label="simple table">
              <Card variant="outlined" className={styles.cour_card}>
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

                    <TableCell component="th" scope="row">
                      {new Date(order.order_date).getDate()}
                      {'-'}
                      {month[new Date(order.order_date).getMonth()]}
                      {'-'}
                      {new Date(order.order_date).getFullYear()}{' '}
                      {new Date(order.order_date).getHours()}
                      {':'}
                      {new Date(order.order_date).getMinutes()}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {order.order_total}
                    </TableCell>

                    <TableCell component="th" scope="row">
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
            </Table>
          </TableContainer>
        );
      })}
    </>
  );
};

export default CourierOrders;
