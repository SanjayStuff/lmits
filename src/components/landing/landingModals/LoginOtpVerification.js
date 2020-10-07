import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Link, makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  loginButton: {
    color: "#fff",
    background: "#8845d0",
    textTransform: "capitalize",
    marginLeft: "auto",
    fontSize: "15px",
    padding: "0.5rem 1rem",
    outline: "none",
    border: "none",
    borderRadius: "0.5rem",
    opacity: "0.7",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      border: "none",
      background: "#8845d0",
      boxShadow: "0 10px 36px rgba(0, 0, 0, 0.15)",
    },
  },
}));

const LoginOtpVerification = () => {
  const classes = useStyles();
  const [otp, setOtp] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const otpVerifyData = {
      Details: localStorage.getItem("lmits_otp_details"),
      otp,
      mobile_number: localStorage.getItem("lmits_login_mob"),
    };
    console.log(otpVerifyData);
    axios
      .post(`${process.env.REACT_APP_VERIFY_LOGIN_OTP}`, otpVerifyData)
      .then(function (response) {
        console.log(response.data);
        if (response.data.response_data == 200) {
          alert(response.data.message);
        } else if (
          response.data.response_code &&
          response.data.response_code !== 200
        ) {
          alert(response.data.message);
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <div
        style={{
          marginLeft: "1rem",
        }}
      >
        <p className="login-card-description mb-0 pb-0">
          Enter the 6 digit OTP you received.
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div
          style={{
            margin: "0.5em",
            padding: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="OTP"
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            variant="outlined"
            label="Enter OTP"
            size="small"
            style={{ minWidth: "100%" }}
          />
        </div>
        <div
          style={{
            margin: "0.5em",
            padding: "0.5rem",
          }}
        >
          <Button
            className={classes.loginButton}
            type="submit"
            variant="contained"
            color="primary"
            style={{
              minWidth: "100%",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
      <div className="form__div otp-forget mt-2 mb-0 pb-0 m-2 p-2">
        <div className="d-inline-block">
          <Link>
            <p
              className="login-card-forgot f-12"
              style={{ color: "#000", cursor: "pointer" }}
            >
              Resend OTP?
            </p>
          </Link>
        </div>

        <div className="pb-0 mb-0">
          <p>
            New to LMiTS?{" "}
            <a href="" className="text-black">
              SignUp
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginOtpVerification;

// import React, { useState } from "react";
// import Header from "components/Header";
// import AppConfig from "App.config";
// import ExternalInfo from "components/ExternalInfo";

// const OTPBox = () => {
//     const [otp, setOtp] = useState(new Array(4).fill(""));

//     const handleChange = (element, index) => {
//         if (isNaN(element.value)) return false;

//         setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

//         //Focus next input
//         if (element.nextSibling) {
//             element.nextSibling.focus();
//         }
//     };

//     return (
//         <>
//             <Header title="Building OTP box using Hooks" />

//             <ExternalInfo page="otpBox" />

//             <div className="row">
//                 <div className="col text-center">
//                     <h2>Welcome to the channel!!!</h2>
//                     <p>Enter the OTP sent to you to verify your identity</p>

//                     {otp.map((data, index) => {
//                         return (
//                             <input
//                                 className="otp-field"
//                                 type="text"
//                                 name="otp"
//                                 maxLength="1"
//                                 key={index}
//                                 value={data}
//                                 onChange={e => handleChange(e.target, index)}
//                                 onFocus={e => e.target.select()}
//                             />
//                         );
//                     })}

//                     <p>OTP Entered - {otp.join("")}</p>
//                     <p>
//                         <button
//                             className="btn btn-secondary mr-2"
//                             onClick={e => setOtp([...otp.map(v => "")])}
//                         >
//                             Clear
//                         </button>
//                         <button
//                             className="btn btn-primary"
//                             onClick={e =>
//                                 alert("Entered OTP is " + otp.join(""))
//                             }
//                         >
//                             Verify OTP
//                         </button>
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// };
