import React from "react";

const Logout = () => {
  return (
    <>
      {" "}
      localStorage.removeItem("auth_key"); localStorage.removeItem("email");
      localStorage.removeItem("name"); history.push("/login")
    </>
  );
};

export default Logout;
