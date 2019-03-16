import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Entry from "./components/Entry.js";
import Home from "./components/Home.js";

// styling
import "./style/App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a6192e",
    },
  },
  // material ui deprecation fix
  typography: {
    useNextVariants: true,
  },
});
class App extends Component {
  render() {
    return (
      <BrowserRouter className="Main">
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route component={Entry} exact path="/" />
            <Route component={Entry} path="/signup" />
            <Route component={Home} path="/home" />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
