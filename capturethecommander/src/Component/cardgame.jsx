import React, { Component } from "react";
import "../Css/cardgame.css";
import Card from "./card";
import GameBoard from "./GameBoard";
import Home from "./Home";
import { Link } from "react-router-dom";
import { dealHands } from "../scripts/CardDeck";

class CardGame extends Component {
  constructor() {
    super();

    this.state = {
      player1hand: [],
      player2hand: [],
      gameStart: false,
      player1Active: false,
      player2Active: false,
    };
  }

  componentDidMount() {
    this.handleStart();
  }

  handleStart = () => {
    let playerHands = dealHands();
    this.setState({
      player1hand: playerHands.player1hand,
      player2hand: playerHands.player2hand,
      gameStart: true,
    });
    this.firstMove();
  };

  firstMove = () => {
    let coin = Math.floor(Math.random() * 2);
    if (coin % 2 === 0) {
      console.log("player 1", coin);
      this.setState({
        player1Active: true,
      });
    } else {
      console.log("player 2", coin);
      this.setState({
        player2Active: true,
      });
    }
  };

  flipped = (e) => {
    let { player1hand, player2hand, player1Active, player2Active } = this.state;
    console.log("target: ", e.target.id);

    if (e.target.dataset.hand === "player1" && player1Active === true) {
      if (player1hand[e.target.id].isFlipped === false) {
        player1hand[e.target.id].isFlipped = true;
        console.log("false", player1hand[e.target.id]);
      } else {
        player1hand[e.target.id].isFlipped = false;
      }

      this.setState({
        player1hand: player1hand,
      });
    }
    if (e.target.dataset.hand === "player2" && player2Active === true) {
      if (player2hand[e.target.id].isFlipped === false) {
        player2hand[e.target.id].isFlipped = true;
        console.log("false", player2hand[e.target.id]);
      } else {
        player2hand[e.target.id].isFlipped = false;
      }

      this.setState({
        player2hand: player2hand,
      });
    }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { gameStart, player1hand, cardDeck, player2hand } = this.state;
    if (gameStart) {
      return (
        <GameBoard
          player1hand={player1hand}
          flipped={this.flipped}
          cardDeck={cardDeck}
          player2hand={player2hand}
          firstMove={this.firstMove}
        />
      );
    }
    return null;
  }
}

export default CardGame;
