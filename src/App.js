import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import SignUp from "./components/SignUp.js";
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
  typography: {
    useNextVariants: true,
  },
});
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <div className="Main">
            <Switch>
              <Route exact path="/" component={SignUp} />
              <Route path="/signup" component={SignUp} />
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
