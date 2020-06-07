import React from "react";
// import cardgame from "./cardgame";
import { Link, Switch, Route } from "react-router-dom";
import AuthContainer from "../Containers/AuthContainer";

function Home({ setUser }) {
  const renderAuthContainer = () => {
    return <AuthContainer setUser={setUser} />;
  };
  return (
    <div>
      <h1>Welcome to Capture the Commander</h1>
      <p>
        This is a 2, card game which fuses elements of the games “Memory”,
        “War”, and “Solitaire.” Players use a combination of strategy and luck
        to capture their opponent’s “Commander”.
      </p>
      <Switch>
        <Route path="/" render={renderAuthContainer} />
        {/* <Route exact path="/" render={renderAuthContainer} /> */}
      </Switch>
      <Link to="/cardgame">
        <button>Start Game</button>
      </Link>
    </div>
  );
}

export default Home;
