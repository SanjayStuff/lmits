import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { Alert } from '@material-ui/lab';
import styles from '../../../styles/LoginOtpVerification.module.css';
import { Row, Col } from 'antd';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#8845d0',
    },
  },
  asterisk: {
    display: 'none',
  },
}));

const LoginOtpVerification = () => {
  const classes = useStyles();
  const [otp, setOtp] = useState('');
  const [msg, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidated, setIsValidated] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setMsg('');
    setErrorMsg('');
    setIsSubmitted(false);
    setIsValidated(false);

    if (otp.length === 6) {
      const otpVerifyData = {
        Details: localStorage.getItem('lmits_otp_details'),
        otp,
        mobile_number: localStorage.getItem('lmits_login_mob'),
      };
      console.log(otpVerifyData);
      axios
        .post(`${process.env.REACT_APP_VERIFY_LOGIN_OTP}`, otpVerifyData)
        .then(function (response) {
          console.log(response.data);
          if (response.data.response_code == 200) {
            // alert(response.data.message);
            setIsValidated(true);
            setMsg(response.data.message);
          } else if (
            response.data.response_code &&
            response.data.response_code !== 200
          ) {
            // alert(response.data.message);
            setIsSubmitted(true);
            setErrorMsg(response.data.message);
          }
        })
        .catch((err) => alert(err));
    } else {
      setIsSubmitted(true);
      setErrorMsg('Enter valid OTP');
      setOtp('');
    }
  };

  return (
    <>
      <Row>
        <Col>
          <h5 className={styles.login_otp_title}>
            Enter the 6 digit OTP you received.
          </h5>
        </Col>
      </Row>

      <form container onSubmit={onSubmit}>
        <Row>
          <Col className={styles.login_otp__error}>
            {isSubmitted && errorMsg !== '' ? (
              <div>
                <Alert severity="error">{errorMsg}</Alert>
              </div>
            ) : null}

            {isValidated && msg !== '' ? (
              <div>
                <Alert severity="success">{msg}</Alert>
              </div>
            ) : null}
          </Col>
        </Row>

        <Row>
          <Col>
            <TextField
              className={styles.login_otp__textfield}
              classes={classes.root}
              id="OTP"
              type="number"
              value={otp}
              autoFocus
              onChange={(e) => {
                setOtp(e.target.value);
                setIsSubmitted(false);
                setIsValidated(false);
              }}
              required
              InputLabelProps={{
                classes: {
                  asterisk: classes.asterisk,
                },
              }}
              variant="outlined"
              label="Enter OTP"
              size="small"
            />
          </Col>
        </Row>

        <div className={styles.login_otp__btn_div}>
          <Button
            className={styles.login_otp__btn}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
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
