import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import MainRender from './components/origin/MainRender';
import LoginWithMail from './components/landing/landingModals/LoginWithMail';
import LoginWithOtp from './components/landing/landingModals/LoginWithOtp';
import SignupWithOtp from './components/landing/landingModals/SignupWithOtp';
import Dashboard from './components/profile/Dashboard';
import LoginOtpVerification from './components/landing/landingModals/LoginOtpVerification';
import ForgotPasswordOtp from './components/landing/landingModals/ForgotPasswordOtp';
import EnterNewPassword from './components/landing/landingModals/EnterNewPassword';
import SignUpForm from './components/landing/landingModals/SignUpForm';

const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <Router>
        <Switch>
          <Route path="/" exact component={MainRender} />
          <Route path="/loginwithuser" component={LoginWithMail} />
          <Route path="/loginwithotp" component={LoginWithOtp} />
          <Route path="/signupwithotp" component={SignupWithOtp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route
            path="/loginotpverification"
            component={LoginOtpVerification}
          />
          <Route path="/forgotpass" component={ForgotPasswordOtp} />
          <Route path="/enternewpass" component={EnterNewPassword} />
          <Route path="/signupotp" component={SignupWithOtp} />
          <Route path="/signup" component={SignUpForm} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
