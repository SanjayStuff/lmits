import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [isOtpLogin, setIsOtpLogin] = useState(false);

  return (
    <UserContext.Provider value={[isOtpLogin, setIsOtpLogin]}>
      {props.children}
    </UserContext.Provider>
  );
};
