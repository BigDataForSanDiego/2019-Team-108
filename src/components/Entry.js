import React from "react";
import care from "../images/care.svg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../style/App.css";
import { Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core";

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

class Entry extends React.Component {
  state = {
    email: "USER@USER.COM",
    password: "PASSWORD",
    toHome: false,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(() => ({
      toHome: true,
    }));
  };

  render() {
    const { classes } = this.props;

    if (this.state.toHome === true) {
      return <Redirect to="/home" />;
    }

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <div>
            <img src={care} className="Care-logo" alt="Care-logo" />
          </div>
          <div>
            <h1>Welcome!</h1>
          </div>
          <form
            onSubmit={this.handleSubmit}
            className={classes.container}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
            <div className={classes.containerButton}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.button}
              >
                LOG IN
              </Button>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.button}
              >
                SIGN UP
              </Button>
            </div>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Entry);
