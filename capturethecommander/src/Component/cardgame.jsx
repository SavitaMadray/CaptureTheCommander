import React, { Component } from "react";
import "../Css/cardgame.css";
import GameBoard from "./GameBoard";
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
      playerturn: "",
      player1AttackingCard: null,
      player1AttackedCard: null,
      player2AttackingCard: null,
      player2AttackedCard: null,
      attackingCardIndex: null,
      attackedCardIndex: null,
      pickWinner: false,
      message: "",
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
    this.coinFlip();
  };

  coinFlip = () => {
    let coin = Math.floor(Math.random() * 2);
    if (coin % 2 === 0) {
      this.setState({
        player1Active: true,
        message: "Player 1. Pick a card.",
        playerturn: "Player1",
      });
    } else {
      this.setState({
        player2Active: true,
        message: "Player 2. Pick a card.",
        playerturn: "Player2",
      });
    }
  };

  gameMoves = (e) => {
    this.chooseAttacker(e);
    this.chooseOpponent(e);
  };

  chooseAttacker = (e) => {
    const { playerturn } = this.state;
    if (playerturn === "Player1") {
      if (e.target.dataset.hand === "player1") {
        this.setState({
          player1AttackingCard: parseInt(e.target.dataset.numval),
          message: "Please choose an opponents card to attack",
          attackingCardIndex: e.target.id,
        });
      }
    } else if (playerturn === "Player2") {
      if (e.target.dataset.hand === "player2") {
        this.setState({
          player2AttackingCard: parseInt(e.target.dataset.numval),
          attackingCardIndex: e.target.id,
          message: "Please choose an opponents card to attack",
        });
      }
    }
  };

  chooseOpponent = (e) => {
    const { player1AttackingCard, player2AttackingCard } = this.state;
    console.log("plyer1attcrd", player1AttackingCard);
    console.log("plyer2attcrd", player2AttackingCard);

    if (player1AttackingCard) {
      let opponentCard = parseInt(e.target.dataset.numval);
      let opponentCardIndex = e.target.id;
      this.setState(
        {
          player2AttackedCard: opponentCard,
          attackedCardIndex: opponentCardIndex,
          pickWinner: true,
        },
        this.whoWon
      );
    } else if (player2AttackingCard) {
      let opponentCard = parseInt(e.target.dataset.numval);
      let opponentCardIndex = e.target.id;
      this.setState(
        {
          player1AttackedCard: opponentCard,
          attackedCardIndex: opponentCardIndex,
          pickWinner: true,
        },
        this.whoWon
      );
    }
  };

  whoWon = () => {
    const {
      player1AttackingCard,
      player2AttackingCard,
      player1AttackedCard,
      player2AttackedCard,
      player1hand,
      player2hand,
      attackingCardIndex,
      attackedCardIndex,
      pickWinner,
    } = this.state;
    if (player1AttackingCard && pickWinner) {
      if (player1AttackingCard > player2AttackedCard) {
        let newPlayer2Hand = [...player2hand];
        newPlayer2Hand[attackedCardIndex].hidden = true;
        setTimeout(() => {
          this.setState({
            message: `Player 1 wins this hand`,
            player2hand: newPlayer2Hand,
          });
        }, 4190);
      } else if (player1AttackingCard < player2AttackedCard) {
        let newPlayer1Hand = [...player1hand];
        newPlayer1Hand[attackingCardIndex].hidden = true;
        setTimeout(() => {
          this.setState({
            message: `Player 2 wins this hand`,
            player1hand: newPlayer1Hand,
          });
        }, 4190);
      } else {
        this.setState({
          message: "This is a draw",
        });
      }
    }
    if (player2AttackingCard && pickWinner) {
      if (player2AttackingCard > player1AttackedCard) {
        let newPlayer1Hand = [...player1hand];
        newPlayer1Hand[attackedCardIndex].hidden = true;
        this.setState({
          message: `Player 2 wins this hand`,
          player1hand: newPlayer1Hand,
        });
      } else if (player2AttackingCard < player1AttackedCard) {
        let newPlayer2Hand = [...player2hand];
        newPlayer2Hand[attackingCardIndex].hidden = true;
        this.setState({
          message: `Player 1 wins this hand`,
          player2hand: newPlayer2Hand,
        });
      } else {
        this.setState({
          message: "This is a draw",
        });
      }
    }
  };

  flipCard = (e) => {
    let { player1hand, player2hand } = this.state;
    console.log("target: ", e.target.id);

    if (e.target.dataset.hand === "player1") {
      if (player1hand[e.target.id].isFlipped === false) {
        player1hand[e.target.id].isFlipped = true;
      } else {
        player1hand[e.target.id].isFlipped = false;
      }

      this.setState({
        player1hand: player1hand,
      });
    }
    if (e.target.dataset.hand === "player2") {
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
    const {
      gameStart,
      player1hand,
      cardDeck,
      player2hand,
      message,
    } = this.state;

    if (gameStart) {
      return (
        <GameBoard
          player1hand={player1hand}
          flipCard={this.flipCard}
          cardDeck={cardDeck}
          player2hand={player2hand}
          message={message}
          gameMoves={this.gameMoves}
          whoWon={this.whoWon}
        />
      );
    }
    return null;
  }
}

export default CardGame;
