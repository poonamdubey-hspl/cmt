import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { TextField, Button, withStyles } from "@material-ui/core";

class Login extends Component {
  state = {
    login: true,
    username: "",
    password: ""
  };

  componentDidMount() {
    // check props for authentication
    // if isAuthenticated then redirect to dashboard
  }

  loginClick = () => {
    console.log("login");
    // get username and password and pass it to mutation
    // get the return data and redirect to dashboard or login, on the basis of return result
  };
  render() {
    const { login, username, password } = this.state;
    return (
      <div className="container">
        <div className="form-group">
          <TextField
            type="text"
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
            placeholder="Your username"
          />
        </div>
        <div className="form-group">
          <TextField
            type="password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="Your password"
          />
        </div>
        <div className="form-group">
          <Button
            color="secondary"
            variant="outlined"
            onClick={this.loginClick}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
