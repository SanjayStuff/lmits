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
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
