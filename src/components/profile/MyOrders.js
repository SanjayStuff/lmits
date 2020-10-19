import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AllOrders from "./AllOrders";
import CourierOrders from "./CourierOrders";
import HyperlocalOrders from "./HyperlocalOrders";
import Paper from "@material-ui/core/Paper";

const MyOrders = () => {
  const [key, setKey] = useState("All Orders");

  return (
    <>
      <Paper>
        <h3>My Orders</h3>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} variant="pills">
          <Tab eventKey="All Orders" title="All Orders">
            <AllOrders />
          </Tab>
          <Tab eventKey="Hyperlocal" title="Hyperlocal">
            <HyperlocalOrders />
          </Tab>
          <Tab eventKey="Courier" title="Courier">
            <CourierOrders />
          </Tab>
        </Tabs>
      </Paper>
    </>
  );
};

export default MyOrders;
