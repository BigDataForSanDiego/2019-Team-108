import React from "react";
import care from "../images/care.svg";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../style/App.css";
import { Redirect } from "react-router-dom";

const styles = theme => ({
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
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class SignUp extends React.Component {
  state = {
    username: "",
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
    // this.props.signUp(this.state);
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
      <div>
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
            label="Username"
            className={classes.textField}
            value={this.state.username}
            onChange={this.handleChange("username")}
            margin="normal"
            variant="outlined"
          />
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            LOG IN
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            SIGN UP
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
