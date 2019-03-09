import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Big Data Hackathon Team 108 Application!</p>
        </header>
      </div>
    );
  }
}

export default App;
