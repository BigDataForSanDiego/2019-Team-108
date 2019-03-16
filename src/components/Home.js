import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
// environment
require("dotenv").config();
let OPEN_WEATHER_ID = process.env.REACT_APP_OPEN_WEATHER_ID;

// hard variables
const MAIN_CITY = "San Diego";
const MAIN_COUNTRY = "USA";

// styling
const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  containerButton: {
    display: "flex",
    flexWrap: "wrap",
  },
});
class Home extends Component {
  state = {
    city: MAIN_CITY,
    country: MAIN_COUNTRY,
    currentTime: "",
    description: undefined,
    humidity: undefined,
    temperature: undefined,
    wind: undefined,
    error: undefined,
    toSignUp: false,
  };

  componentDidMount() {
    // weather api: current weather data
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
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(() => ({
      toSignUp: true,
    }));
  };

  render() {
    const { classes } = this.props;

    if (this.state.toSignUp === true) {
      return <Redirect to="/signup" />;
    }

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <h1>
            Weather for {this.state.city}, {this.state.country}!
          </h1>
          <h1>Expect {this.state.description}!</h1>
          <h1>
            Temperature: {(this.state.temperature * 1.8 + 32).toFixed(2)}°F
          </h1>
          <h1>Wind speed: {this.state.wind} miles per hour</h1>
          <h1>Remember to take your medication!</h1>
          <form onSubmit={this.handleSubmit}>
            <Button type="submit" color="primary" variant="contained">
              LOG OUT
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Home);
