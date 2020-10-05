import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainRender from "./components/origin/MainRender";
import LoginWithMail from "./components/landing/landingModals/LoginWithMail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainRender} />
        <Route path="/loginwithuser" exact component={LoginWithMail} />
      </Switch>
    </Router>
  );
}

export default App;
