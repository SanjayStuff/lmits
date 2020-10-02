import React, { useEffect } from "react";
import LandingContent from "../landing/LandingContent";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("auth_key");
  });

  return <LandingContent />;
};

export default Logout;
