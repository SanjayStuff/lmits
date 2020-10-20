import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import MainRender from "./components/origin/MainRender";
import Sidebar from "./components/profile/Sidebar";

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
          <Route path="/dashboard" exact component={Sidebar} />
          <Route exact path="/">
            {localStorage.getItem("lmits_auth_key") ? (
              <Redirect to="/dashboard" />
            ) : (
              <MainRender />
            )}
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
