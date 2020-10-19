import React from "react";
import NavbarTop from "./NavbarTop";
import MainContent from "./MainContent";
import { UserProvider } from "../../context/UserContext";
import MyProfile from "../profile/MyProfile";
import AllOrders from "../profile/AllOrders";
import MyOrders from "../profile/MyOrders";

const MainRender = () => {
  return (
    <>
      <UserProvider>
        {/*<NavbarTop />*/}
        {/*<MainContent />*/}
        {/*<MyProfile />*/}
        <MyOrders />
      </UserProvider>
    </>
  );
};

export default MainRender;
