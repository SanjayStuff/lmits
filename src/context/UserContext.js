import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userAuth, setUserAuth] = useState("3");

  return (
    <UserContext.Provider value={[userAuth, setUserAuth]}>
      {props.children}
    </UserContext.Provider>
  );
};
