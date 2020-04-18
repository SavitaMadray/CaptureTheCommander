import React, { Component } from "react";
import cardgame from "./cardgame";
import { Link } from "react-router-dom";

function Home(props) {
  const { handleStart } = props;
  return (
    <div>
      <h1>Welcome to Capture the Commander</h1>
      <button onClick={handleStart}>Start Game</button>
    </div>
  );
}

export default Home;
