import React from "react";
import "./App.css";
import Home from "./Component/Home";
import Nav from "./Component/nav";
import CardGame from "./Component/cardgame.jsx";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cardgame" component={CardGame} />
      </Switch>
    </div>
  );
}

export default App;
