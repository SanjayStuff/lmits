import React from "react";
import Sidebar from "./Sidebar";
import MyOrders from "./MyOrders";
import MyProfile from "./MyProfile";
import AddressBook from "./AddressBook";
import Support from "./Support";
import Logout from "./Logout";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <MyProfile />
      <AddressBook />
      <MyOrders />
      <Support />
      <Logout />
    </>
  );
};

export default Dashboard;
