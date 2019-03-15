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
    description: undefined,
    humidity: undefined,
    temperature: undefined,
    wind: undefined,
    error: undefined,
    toSignUp: false,
  };

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${
        this.state.country
      }&appid=${OPEN_WEATHER_ID}&units=metric`,
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          city: data.name,
          country: data.sys.country,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          temperature: data.main.temp,
          wind: data.wind.speed,
          error: "",
        });
      });
    // const data = await API_CALL.json();
    // console.log(data);
  }

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
        <h1>
          Weather for {this.state.city}, {this.state.country}!
        </h1>
        <h1>Expect {this.state.description}!</h1>
        <h1>Temperature: {(this.state.temperature * 1.8 + 32).toFixed(2)}°F</h1>
        <h1>Wind speed: {this.state.wind} miles per hour</h1>
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
