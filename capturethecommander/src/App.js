import React from "react";
import "./App.css";
import Home from "./Component/Home";
import Nav from "./Component/nav";
import AuthContainer from "./Containers/AuthContainer";
import Users from "./Component/Users";
import CardGame from "./Component/cardgame.jsx";
import { Switch, Route } from "react-router-dom";
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
    } catch (err) {
      console.log("err", err);
    }
  };

  renderAuthContainer = () => {
    return <AuthContainer setUser={this.setUser} />;
  };
  render() {
    return (
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/login" render={this.renderAuthContainer} />
          <Route exact path="/signup" render={this.renderAuthContainer} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/" component={Home} />
          <Route path="/cardgame" component={CardGame} />
        </Switch>
      </div>
    );
  }
}

export default App;
