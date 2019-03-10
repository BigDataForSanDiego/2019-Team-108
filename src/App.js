import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

class App extends Component {
  render() {
    const position = [51.505, -0.09];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Big Data Hackathon Team 108 Application!</p>
          <Map
            style={{ width: "100%", height: "600px" }}
            center={position}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </header>
      </div>
    );
  }
}

export default App;
