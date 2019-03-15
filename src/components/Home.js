import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

// environment
require("dotenv").config();
let OPEN_WEATHER_ID = process.env.REACT_APP_OPEN_WEATHER_ID;
export default class Home extends Component {
  state = {
    city: "San Diego",
    country: "USA",
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    latitude: undefined,
    longitude: undefined,
    error: undefined,
    toSignUp: false,
  };

  getWeather = async e => {
    const API_CALL = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${
        this.state.country
      }&appid=${OPEN_WEATHER_ID}&units=metric`,
    );
    const data = await API_CALL.json();
    console.log(data);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(() => ({
      toSignUp: true,
    }));
  };

  render() {
    if (this.state.toSignUp === true) {
      return <Redirect to="/signup" />;
    }

    return (
      <div>
        <h1>Weather</h1>
        <h1>Have you taken your medication?</h1>
        <form onSubmit={this.handleSubmit}>
          <Button type="submit" variant="contained" color="primary">
            LOG OUT
          </Button>
        </form>
      </div>
    );
  }
}
