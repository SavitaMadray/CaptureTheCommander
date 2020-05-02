import React, { Component } from "react";
import "../Css/cardgame.css";
import Card from "./card";
import GameBoard from "./GameBoard";
import Home from "./Home";
import { Link } from "react-router-dom";
import {dealHands} from "../scripts/CardDeck"

class CardGame extends Component {
  constructor() {
    super();

    this.state = {
      player1hand: [],
      player2hand: [],
      gameStart: false,
      isActive: false,
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
  };


  firstMove = () => {
    let coin = Math.floor(Math.random() * 100);
    if (coin % 2 === 0) {
      console.log("player 1", coin);
      this.setState({
        isActive: true,
      });
    } else {
      console.log("player 2", coin);
    }
  };

  handleStart = () => {
    const { cardDeck } = this.state;
    this.shuffleDeck(cardDeck);
    this.dealHands();
    this.firstMove();
    this.setState({
      gameStart: true,
    });
  };

  flipped = (e) => {
    let { player1hand, player2hand, isActive } = this.state;
    console.log("target: ", e.target.id);

    if (e.target.dataset.hand === "player1" && isActive === true) {
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
    if (e.target.dataset.hand === "player2" && isActive === true) {
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
