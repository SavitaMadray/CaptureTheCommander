import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "../Component/LoginForm";
import SignUpForm from "../Component/SignUpForm";
import axios from "axios";

class AuthContainer extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    this.setState({
      [inputName]: inputValue,
    });
  };

  signupUser = async () => {
    console.log("signing up user");
    try {
      await axios.post("/auth/signup", this.state);
      this.loginUser();
    } catch (err) {
      console.log("err", err);
    }
  };

  loginUser = async () => {
    console.log("logging in user");
    try {
      const { data } = await axios.post("/auth/login", this.state);
      const user = data.payload;
      this.props.setUser(user);
    } catch (err) {
      console.log("err", err);
    }
  };

  renderSignUpForm = () => {
    const { username, password } = this.state;
    return (
      <SignUpForm
        handleChange={this.handleChange}
        username={username}
        password={password}
        signupUser={this.signupUser}
      />
    );
  };

  renderLoginForm = () => {
    const { username, password } = this.state;
    return (
      <LoginForm
        handleChange={this.handleChange}
        username={username}
        password={password}
        loginUser={this.loginUser}
      />
    );
  };

  render() {
    return (
      <div className="AuthContainer">
        <Switch>
          <Route exact path="/(login|)" render={this.renderLoginForm} />
          <Route exact path="/signup" render={this.renderSignUpForm} />
        </Switch>
      </div>
    );
  }
}

export default AuthContainer;
