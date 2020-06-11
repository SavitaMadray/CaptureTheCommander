import React from "react";
import "./App.css";
import Home from "./Component/Home";
import Nav from "./Component/nav";

import Users from "./Component/Users";
import CardGame from "./Component/cardgame.jsx";
import matches from "./Component/Matches"
import { Switch, Route, withRouter } from "react-router-dom";
import Axios from "axios";

class App extends React.Component {
  state = {
    user: null,
    isUserLoggedIn: false,
    player1: "",
    player2: ""
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

  getUser = (name1, name2) => {
    console.log(name1, name2)
    this.setState({
      player1: name1,
      player2: name2
    });
    this.props.history.push('/cardgame')
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(value)
    this.setState({
      [name]: value
    })

  }

  renderHome = () => {
    let { player1, player2 } = this.state
    return <Home setUser={this.setUser}
      handleChange={this.handleChange}
      name1={player1}
      name2={player2}
      getUser={this.getUser} />;
  };

  renderCardGame = () => {
    let { player1, player2 } = this.state
    return <CardGame p1={player1} p2={player2} />
  }




  render() {
    return (
      <div className="App">
        <Nav
          logOutUser={this.logOutUser}
          isUserLoggedIn={this.state.isUserLoggedIn}
        />

        <Switch>
          <Route path="/cardgame" render={this.renderCardGame} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/Matches" component={matches} />
          <Route path="/" render={this.renderHome} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
