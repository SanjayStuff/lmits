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
import GetQuotes from "./components/quotation/GetQuotes";

const THEME = createMuiTheme({
  palette: {
    primary: {
      main: "#8845d0",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "capitalize",
        borderRadius: "0.3rem",
        padding: "0.5rem 1rem",
        fontSize: ".9rem",
        outline: "none",
        border: "none",
        transition: "0.3s",
      },
    },
  },
  typography: {
    fontFamily: `"Poppins", sans-serif`,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <Router>
        <Switch>
          <Route path="/homepage" exact component={GetQuotes} />
          <Route path="/landing" exact component={MainRender} />
          <Route path="/dashboard" exact component={Sidebar} />
          <Route exact path="/">
            {localStorage.getItem("lmits_auth_key") ? (
              <Redirect to="/homepage" />
            ) : (
              <Redirect to="/landing" />
            )}
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
