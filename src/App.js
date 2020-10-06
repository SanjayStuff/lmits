import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainRender from "./components/origin/MainRender";
import LoginWithMail from "./components/landing/landingModals/LoginWithMail";
import LoginWithOtp from "./components/landing/landingModals/LoginWithOtp";
import SignupWithOtp from "./components/landing/landingModals/SignupWithOtp";
import Dashboard from "./components/profile/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainRender} />
        <Route path="/loginwithuser" component={LoginWithMail} />
        <Route path="/loginwithotp" component={LoginWithOtp} />
        <Route path="/signupwithotp" component={SignupWithOtp} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
