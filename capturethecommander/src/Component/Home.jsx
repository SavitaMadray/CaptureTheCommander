import React from "react";
import home from "../Css/home.css";
// import cardgame from "./cardgame";
// import { Link, Switch, Route } from "react-router-dom";
// import AuthContainer from "../Containers/AuthContainer";

function Home({ setUser, name1, name2, getUser, handleChange }) {
  // const renderAuthContainer = () => {
  //   return <AuthContainer setUser={setUser} />;
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(name1, name2);
  };

  return (
    <div className="main">
      <section className="sectionHome">
        <div className="title">
          <h1>Welcome to Capture the Commander</h1>

          <p>
            This is a 2, card game which fuses elements of the games “Memory”,
            “War”, and “Solitaire.” Players use a combination of strategy and
            luck to capture their opponent’s “Commander”.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="player1">Player 1</label>
            <input
              name="player1"
              type="text"
              value={name1}
              placeholder="enter name"
              onChange={handleChange}
              required
            />
            <label htmlFor="player2">Player 2</label>
            <input
              name="player2"
              type="text"
              value={name2}
              placeholder=" enter name"
              onChange={handleChange}
              required
            />

            <input className="button" type="submit" value="Start Game" />
          </form>

          {/* <Link to="/cardgame">
          <button className="startButton">Start Game</button>
        </Link> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
