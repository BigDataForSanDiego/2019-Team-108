import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
  state = {
    toSignUp: false,
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
        <h1>Hello</h1>
        <form onSubmit={this.handleSubmit}>
          <Button type="submit" variant="contained" color="primary">
            BACK TO SIGN UP
          </Button>
        </form>
      </div>
    );
  }
}
