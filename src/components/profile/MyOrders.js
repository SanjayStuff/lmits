import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AllOrders from './AllOrders';
import CourierOrders from './CourierOrders';
import HyperlocalOrders from './HyperlocalOrders';
import Paper from '@material-ui/core/Paper';
import { Typography } from 'antd';
import { Container } from '@material-ui/core';

const { Title } = Typography;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const MyOrders = () => {
  const [key, setKey] = useState('All Orders');
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} style={{ padding: '5px' }} className={classes.root}>
      <Container style={{ margin: '1.2rem .8rem' }}>
        <Title level={4}>My Orders</Title>

        <Tabs
          value={value}
          onChange={handleChange}
          align="middle"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          variant="pills"
          style={{ margin: '2rem 0 0 ' }}
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

        {/* <Tabs activeKey={key} onSelect={(k) => setKey(k)} variant="pills">
          <Tab eventKey="All Orders" title="All Orders">
            <AllOrders />
          </Tab>
          <Tab eventKey="Hyperlocal" title="Hyperlocal">
            <HyperlocalOrders />
          </Tab>
          <Tab eventKey="Courier" title="Courier">
            <CourierOrders />
          </Tab>
        </Tabs> */}
      </Container>
    </Paper>
  );
};

export default MyOrders;
