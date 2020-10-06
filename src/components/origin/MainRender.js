import React from "react";
import NavbarTop from "./NavbarTop";
import MainContent from "./MainContent";
import { UserProvider } from "../../context/UserContext";

const MainRender = () => {
  return (
    <>
      <UserProvider>
        <NavbarTop />
        <MainContent />
      </UserProvider>
    </>
  );
};

export default MainRender;
