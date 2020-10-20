import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Logout = () => {
  const [msg, setMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  let history = useHistory();

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_LOGOUT}`,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("lmits_auth_key"),
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data.response_code === 200) {
          localStorage.removeItem("lmits_auth_key");
          localStorage.removeItem("lmits_first_name");
          localStorage.removeItem("lmits_last_name");
          localStorage.removeItem("lmits_otp_details");
          localStorage.removeItem("lmits_login_mob");
          localStorage.removeItem("lmits_mob_num");
          localStorage.removeItem("lmits_email_id");
          setMsg(response.data.message);
          history.push("/");
        } else if (
          response.data.response_code &&
          response.data.response_code !== 200
        ) {
          setErrorMsg(response.data.message);
        }
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      {msg !== "" ? alert(msg) : null}
      {errorMsg !== "" ? alert(errorMsg) : null}
    </>
  );
};

export default Logout;
