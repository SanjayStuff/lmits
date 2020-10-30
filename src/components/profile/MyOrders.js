import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Typography } from "antd";
import { Container, Paper } from "@material-ui/core";
import AllOrders from "./AllOrders";
import CourierOrders from "./CourierOrders";
import HyperlocalOrders from "./HyperlocalOrders";
import styles from "../../styles/profile/MyOrders.module.css";

const { Title } = Typography;

const MyOrders = () => {
  const [key, setKey] = useState("All Orders");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={2} className={styles.paper_padd}>
      <Container className={styles.title_padd}>
        <Title level={4}>My Orders</Title>

        <Tabs
          value={value}
          onChange={handleChange}
          activeKey={key}
          onSelect={(k) => setKey(k)}
          variant="pills"
          className={styles.tab_margin}
        >
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
      </Container>
    </Paper>
  );
};

export default MyOrders;
