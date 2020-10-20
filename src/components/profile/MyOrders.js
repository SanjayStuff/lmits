import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AllOrders from './AllOrders';
import CourierOrders from './CourierOrders';
import HyperlocalOrders from './HyperlocalOrders';
import Paper from '@material-ui/core/Paper';
import { Typography } from 'antd';

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
    <div className={classes.root}>
      <Paper elevation={3} style={{ padding: '5px' }}>
        <Title level={4} style={{ margin: '15px' }}>
          My Orders
        </Title>

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          activeKey={key}
          onSelect={(k) => setKey(k)}
          variant="pills"
          style={{ margin: '15px' }}
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
      </Paper>
    </div>
  );
};

export default MyOrders;
