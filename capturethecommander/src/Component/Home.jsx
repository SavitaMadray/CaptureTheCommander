import React from "react";
// import cardgame from "./cardgame";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Capture the Commander</h1>
      <p>
        This is a 2, card game which fuses elements of the games “Memory”, “War”, and “Solitaire.”
        Players use a combination of strategy and luck to capture their opponent’s “Commander”.
      </p>
      <Link to="/cardgame">
        <button>Start Game</button>
      </Link>
    </div>
  );
}

export default Home;
