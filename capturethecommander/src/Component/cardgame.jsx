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
      turnEnd: false,
      turnWinner: "",
      turn1: false,
      turn2: false,
    };
  }

  componentDidMount() {
    this.handleStart();
  }
  
  // componentDidUpdate(){
  //   let {player1AttackingCard} = this.state;
  //   console.log(player1AttackingCard)
  // }

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
    let coin = 0//Math.floor(Math.random() * 2);
    if (coin % 2 === 0) {
      this.setState({
        player1Active: true,
        message: "Player 1. Pick a card.",
        playerturn: "Player1",
        turn1: true,
      });
    } else {
      this.setState({
        player2Active: true,
        message: "Player 2. Pick a card.",
        playerturn: "Player2",
        turn2: true,
      });
    }
  };

  gameMoves = (e, id, playerHand) => {
    const { playerturn, player1AttackingCard, player2AttackingCard, player1hand, player2hand } = this.state;
    let { hand } = e.target.dataset
    console.log(`game moves function id ${id} and playerhand ${playerHand}`)
    console.log(`test`, this.allowMyFlip(id, player1hand))
    let p1Flip = this.allowMyFlip(id, player1hand);
    let p2Flip = this.allowMyFlip(id, player2hand);


    console.log(`player 1 flip: ${p1Flip}, player 2 flip: ${p2Flip}`)

    if (playerturn === "Player1") {

      // if i'm clicking my hand and I don't have a card to attack with
      if (hand === "player1" && player1AttackingCard === null && p1Flip) {
        this.chooseAttacker2(e);
      }

      //if i'm attacking the other players hand and I have a card to attack with
      if (hand === "player2" && player1AttackingCard !== null && p2Flip) {
        this.chooseOpponent2(e);
      }

    }

    if (playerturn === "Player2") {
      // if i'm clicking my hand and I don't have a card to attack with
      if (hand === "player2" && player2AttackingCard === null && p2Flip) {
        this.chooseAttacker2(e);
      }
      //if i'm attacking the other players hand and I have a card to attack with
      if (hand === "player1" && player2AttackingCard && p1Flip) {
        this.chooseOpponent2(e);

      }
    }
    // this.chooseAttacker(e);
    // this.chooseOpponent(e);
  };


  //old flip card
  flipCard = (e) => {
    let { player1hand, player2hand } = this.state;
    console.log("target: ", e.target.id);

    if (e.target.dataset.hand === "player1") {
      if (player1hand[e.target.id].isFlipped === false) {
        player1hand[e.target.id].isFlipped = true;
      }


      this.setState({
        player1hand: player1hand,
      });
    }
    if (e.target.dataset.hand === "player2") {
      if (player2hand[e.target.id].isFlipped === false) {
        player2hand[e.target.id].isFlipped = true;
        console.log("false", player2hand[e.target.id]);
      }

      this.setState({
        player2hand: player2hand,
      });
    }
  };

  allowMyFlip = (id, playerHand) => {

    let defenders = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [0, 1],
      5: [1, 2],
      6: [2, 3],
      7: [4],
      8: [5],
      9: [6],
      10: [7, 8],
      11: [8, 9],
      12: [10, 11]
    }
    if (id < 4) {
      return true;
    }

    if (id > 6 && id < 10) {
      return playerHand[defenders[id][0]].hidden
    } else {
      console.log(defenders[id])
      return defenders[id].every(el => {
        console.log(playerHand[el])
        return playerHand[el].hidden
      })
    }

  }



  chooseAttacker2 = (e) => {
    // message
    const message = "Please choose an opponents card to attack"
    // Last digit of player. Either 1 or 2.
    const playerDigit = e.target.dataset.hand[e.target.dataset.hand.length - 1];
    // Set the hand
    let attackHand = `player${playerDigit}AttackingCard`;
    console.log(attackHand)
    this.flipCard(e)
    this.setState({
      [attackHand]: parseInt(e.target.dataset.numval),
      message,
      attackingCardIndex: e.target.id,
      turn1: playerDigit === "1",
      turn2: !playerDigit === "1"
    })
  }







  chooseAttacker = (e) => {
    //What is it that I want to do?
    /*
      1. Check to see who's turn it is.
      2. Then use the same value to check which hand i'm choosing from.
      3. Asign card based on player hand and turn.
    */

    //  const { playerturn } = this.state;
    //  if (playerturn === "Player1") {
    //    if (e.target.dataset.hand === "player1") {
    //      this.setState({
    //        player1AttackingCard: parseInt(e.target.dataset.numval),
    //        message: "Please choose an opponents card to attack",
    //        attackingCardIndex: e.target.id,
    //        turn1: true,
    //        turn2: false,
    //      });
    //    }


  };

  chooseOpponent2 = (e) => {
    //Last digit of player. Either 1 or 2
    const playerDigit = e.target.dataset.hand[e.target.dataset.hand.length - 1];
    //Set the Hand
    let attackedHand = `player${playerDigit}AttackedCard`;
    this.flipCard(e)
    this.setState({
      [attackedHand]: e.target.dataset.numval,
      attackedCardIndex: e.target.id,
      pickWinner: true,
      turn1: playerDigit === "1",
      turn2: !playerDigit === "1",
    }, this.whoWon)



  }



  chooseOpponent = (e) => {
    const { player1AttackingCard, player2AttackingCard } = this.state;

    if (player1AttackingCard) {
      let opponentCard = parseInt(e.target.dataset.numval);
      let opponentCardIndex = e.target.id;
      this.setState(
        {
          player2AttackedCard: opponentCard,
          attackedCardIndex: opponentCardIndex,
          pickWinner: true,
          turn1: false,
          turn2: true,
        },
        this.whoWon
      );
    }

    if (player2AttackingCard) {
      let opponentCard = parseInt(e.target.dataset.numval);
      let opponentCardIndex = e.target.id;
      this.setState(
        {
          player1AttackedCard: opponentCard,
          attackedCardIndex: opponentCardIndex,
          pickWinner: true,
          turn1: true,
          turn2: false,
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


    let newPlayer1Hand = [...player1hand];
    let newPlayer2Hand = [...player2hand];

    if (player1AttackingCard && pickWinner) {

      if (player1AttackingCard > player2AttackedCard) {
        newPlayer2Hand[attackedCardIndex].hidden = true;
        newPlayer1Hand[attackingCardIndex].isFlipped = false;
        console.log(attackedCardIndex);
        setTimeout(() => {
          this.setState(
            {
              message: `Player 1 wins this hand`,
              player2hand: newPlayer2Hand,
              player1hand: newPlayer1Hand,
              turnEnd: true,
              turnWinner: "Player 1",
            },
            this.endTurn
          );
        }, 2000);
      } else if (player1AttackingCard < player2AttackedCard) {
        newPlayer1Hand[attackingCardIndex].hidden = true;
        newPlayer2Hand[attackedCardIndex].isFlipped = false;
        setTimeout(() => {
          this.setState(
            {
              message: `Player 2 wins this hand`,
              player1hand: newPlayer1Hand,
              player2hand: newPlayer2Hand,
              turnEnd: true,
              turnWinner: "Player 2",
            },
            this.endTurn
          );
        }, 2000);
      } else {
        newPlayer1Hand[attackingCardIndex].hidden = true;
        newPlayer2Hand[attackedCardIndex].hidden = true;
        setTimeout(() => {
          this.setState(
            {
              message: "This is a draw",
              player1hand: newPlayer1Hand,
              player2hand: newPlayer2Hand,
              turnEnd: true,
              turnWinner: "",
            },
            this.endTurn
          );
        }, 2000);
      }
    }
    
    if (player2AttackingCard && pickWinner) {
      
      if (player2AttackingCard > player1AttackedCard) {
        newPlayer2Hand[attackingCardIndex].isFlipped = false;
        newPlayer1Hand[attackedCardIndex].hidden = true;
        setTimeout(() => {
          this.setState(
            {
              message: `Player 2 wins this hand`,
              player1hand: newPlayer1Hand,
              player2hand: newPlayer2Hand,
              turnEnd: true,
              turnWinner: "Player 2",
            },
            this.endTurn
          );
        }, 2000);
      } else if (player2AttackingCard < player1AttackedCard) {
        newPlayer2Hand[attackingCardIndex].hidden = true;
        newPlayer1Hand[attackedCardIndex].isFlipped = false;
        setTimeout(() => {
          this.setState(
            {
              message: `Player 1 wins this hand`,
              player2hand: newPlayer2Hand,
              player1hand: newPlayer1Hand,
              turnEnd: true,
              turnWinner: "Player 1",
            },
            this.endTurn
          );
        }, 2000);
      } else {
        newPlayer1Hand[attackedCardIndex].hidden = true;
        newPlayer2Hand[attackingCardIndex].hidden = true;
        setTimeout(() => {
          this.setState(
            {
              message: "This is a draw",
              player1hand: newPlayer1Hand,
              player2hand: newPlayer2Hand,
              turnEnd: true,
              turnWinner: "",
            },
            this.endTurn
          );
        }, 2000);
      }
    }
  };

  winningCondition = () => {
    console.log("we hit")
    /* 
    Things we need to know  
      1. Index of commander
      2. Check if commander is hidden
      3. Check the hand
      4. Losing Hand 
      Check the index of the last hand and see which is hidden
    */
    let { player1hand, player2hand } = this.state;
    let commander1Index = player1hand.length - 1;
    let commander2Index = player2hand.length - 1;
    let isCommanderOneHidden = player1hand[commander1Index].hidden;
    let isCommanderTwoHidden = player2hand[commander2Index].hidden;
    console.log("command hidden", isCommanderOneHidden)
    if (isCommanderOneHidden) {
      window.alert("Player 2 Won!")
      setTimeout(() => {
        this.props.history.push('/')
      }, 3000);
    } else if (isCommanderTwoHidden) {
      window.alert("Player 1 Won!")
      setTimeout(() => {
        this.props.history.push('/')
      }, 3000);
    }
  }

  endTurn = () => {
    const { turnEnd, playerturn } = this.state;
    this.winningCondition();


    if (turnEnd && playerturn === "Player1") {
      this.setState({
        playerturn: "Player2",
        player1AttackingCard: null,
        player1AttackedCard: null,
        player2AttackingCard: null,
        player2AttackedCard: null,
        attackingCardIndex: null,
        attackedCardIndex: null,
        message: "Player2 turn",
        turnEnd: false,
      });
    }
    if (turnEnd && playerturn === "Player2") {
      this.setState({
        playerturn: "Player1",
        player1AttackingCard: null,
        player1AttackedCard: null,
        player2AttackingCard: null,
        player2AttackedCard: null,
        attackingCardIndex: null,
        attackedCardIndex: null,
        message: "Player1 Turn",
        turnEnd: false,
      });
    }
  };


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
          // flipCard={this.flipCard}
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
