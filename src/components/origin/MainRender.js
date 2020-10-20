import React from "react";
import NavbarTop from "./NavbarTop";
import { UserProvider } from "../../context/UserContext";
import LandingContent from "../landing/LandingContent";

const MainRender = () => {
  return (
    <>
      <UserProvider>
        <NavbarTop />
        <LandingContent />
      </UserProvider>
    </>
  );
};

export default MainRender;
