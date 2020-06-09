import React from "react";
import "./App.css";
import Home from "./Component/Home";
import Nav from "./Component/nav";

import Users from "./Component/Users";
import CardGame from "./Component/cardgame.jsx";
import { Switch, Route, withRouter } from "react-router-dom";
import Axios from "axios";

class App extends React.Component {
  state = {
    user: null,
    isUserLoggedIn: false,
  };

  setUser = (user) => {
    this.setState({
      user: user,
      isUserLoggedIn: true,
    });
  };

  logOutUser = async () => {
    try {
      await Axios.get("/auth/logout");
      this.setState({
        user: null,
        isUserLoggedIn: false,
      });
      this.props.history.push("/");
    } catch (err) {
      console.log("err", err);
    }
  };

  renderHome = () => {
    return <Home setUser={this.setUser} />;
  };
  render() {
    return (
      <div className="App">
        <Nav
          logOutUser={this.logOutUser}
          isUserLoggedIn={this.state.isUserLoggedIn}
        />

        <Switch>
          <Route exact path="/users" component={Users} />
          <Route path="/cardgame" component={CardGame} />
          <Route path="/" render={this.renderHome} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
