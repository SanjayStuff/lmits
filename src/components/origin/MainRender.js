import React, { useEffect, useState } from "react";
import NavbarTop from "./NavbarTop";
import { UserProvider } from "../../context/UserContext";
import LandingContent from "../landing/LandingContent";
import { useHistory } from "react-router";

const MainRender = () => {
  let history = useHistory();
  // const [deleteDetails, setDeleteDetails] = useState(false);
  //
  // if (deleteDetails) {
  //   localStorage.removeItem("lmits_first_name");
  //   localStorage.removeItem("lmits_last_name");
  //   localStorage.removeItem("lmits_otp_details");
  //   localStorage.removeItem("lmits_login_mob");
  //   localStorage.removeItem("lmits_mob_num");
  //   localStorage.removeItem("lmits_email_id");
  //   localStorage.removeItem("lmits_prof_img");
  //   setDeleteDetails(false);
  // }

  return localStorage.getItem("lmits_auth_key") ? (
    <>{history.push("/homepage")}</>
  ) : (
    <>
      <UserProvider>
        {/*{setDeleteDetails(true)}*/}
        <NavbarTop />
        <LandingContent />
      </UserProvider>
    </>
  );
};

export default MainRender;
