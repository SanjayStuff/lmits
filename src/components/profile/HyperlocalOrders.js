import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import FastForwardIcon from '@material-ui/icons/FastForward';
import OrderSummary from './dashboardModals/OrderSummary';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styles from '../../styles/profile/HyperlocalOrders.module.css';

const HyperlocalOrders = () => {
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
      .get(`${process.env.REACT_APP_HYPERLOCAL_DETAILS}`, {
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
    <div>
      {/* {errorMsg !== "" ? { errorMsg } : null} */}
      <div>
        {ordersDetails.map((order) => {
          return (
            <div key={order.order_id}>
              <Table aria-label="simple table">
                <Card variant="outlined" className={styles.hyper_card}>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell align="left">Order Date</TableCell>
                    <TableCell align="left">Order Total</TableCell>
                    <TableCell align="left">Order Details</TableCell>
                  </TableRow>

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
                </Card>
              </Table>

              {/* <Card variant="outlined">
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
                </Card> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HyperlocalOrders;
