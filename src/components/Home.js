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
        <h1>{this.state.city}</h1>
        <h1>{this.state.country}</h1>
        <h1>{this.state.description}</h1>
        <h1>{this.state.humidity}</h1>
        <h1>{this.state.temperature}</h1>
        <h1>{this.state.wind}</h1>
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
