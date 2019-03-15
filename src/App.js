import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./style/App.css";

// components
import SignUp from "./components/SignUp.js";
import Home from "./components/Home.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Main">
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
