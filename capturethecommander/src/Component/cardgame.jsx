import React, { Component } from "react";
import "../CSS/cardgame.css";
import Card from "./card";
import GameBoard from "./GameBoard";

class CardGame extends Component {
  constructor() {
    super();

    this.state = {
      cardDeck: [
        {
          suit: "♠︎",
          num: "2",
          numVal: 2,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♠︎",
          num: "3",
          numVal: 3,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♠︎",
          num: "4",
          numVal: 4,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♠︎",
          num: "5",
          numVal: 5,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♠︎",
          num: "6",
          numVal: 6,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♠︎",
          num: "7",
          numVal: 7,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♠︎",
          num: "8",
          numVal: 8,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♠︎",
          num: "9",
          numVal: 9,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♠︎",
          num: "10",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♠︎",
          num: "K",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♠︎",
          num: "Q",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♠︎",
          num: "J",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♠︎",
          num: "A",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "2",
          numVal: 2,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "3",
          numVal: 3,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "4",
          numVal: 4,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "5",
          numVal: 5,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "6",
          numVal: 6,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "7",
          numVal: 7,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "8",
          numVal: 8,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "9",
          numVal: 9,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "10",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "K",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "Q",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "J",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♢",
          num: "A",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "2",
          numVal: 2,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "3",
          numVal: 3,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "4",
          numVal: 4,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "5",
          numVal: 5,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "6",
          numVal: 6,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "7",
          numVal: 7,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "8",
          numVal: 8,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "9",
          numVal: 9,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "10",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "K",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "Q",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "J",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♡",
          num: "A",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "2",
          numVal: 2,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "3",
          numVal: 3,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "4",
          numVal: 4,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "5",
          numVal: 5,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "6",
          numVal: 6,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "7",
          numVal: 7,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "8",
          numVal: 8,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "9",
          numVal: 9,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "10",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "K",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "Q",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "J",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
        {
          suit: "♣︎",
          num: "A",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          isFlipped: false,
        },
      ],
      player1hand: [],
      player2hand: [],
      gameStart: false,
    };
  }

  shuffleDeck = (cardDeck) => {
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * cardDeck.length);
      let location2 = Math.floor(Math.random() * cardDeck.length);
      let tmp = cardDeck[location1];
      cardDeck[location1] = cardDeck[location2];
      cardDeck[location2] = tmp;
    }
    this.setState({
      cardDeck: cardDeck,
    });
  };

  handleStart = (e) => {
    const { cardDeck } = this.state;
    this.shuffleDeck(cardDeck);
    this.dealHands();
    this.setState({
      gameStart: true,
    });
  };

  dealHands = () => {
    const { cardDeck } = this.state;
    let player1 = [];
    let player2 = [];
    for (let i = 0; i < 26; i++) {
      if (i % 2 === 0) {
        player1.push(cardDeck[i]);
      } else {
        player2.push(cardDeck[i]);
      }
    }
    this.setState({
      player1hand: player1,
      player2hand: player2,
    });
  };

  flipped = (e) => {
    let { player1hand, player2hand } = this.state;
    console.log(e.target.id);

    if (e.target.className === "card1") {
      if (player1hand[e.target.id].isFlipped === false) {
        player1hand[e.target.id].isFlipped = true;
        console.log("false", player1hand[e.target.id]);
      } else {
        player1hand[e.target.id].isFlipped = false;
        // console.log("true", player1hand[e.target.id])
      }

      this.setState({
        player1hand: player1hand,
      });
    }

    if (e.target.className === "card2") {
      if (player2hand[e.target.id].isFlipped === false) {
        player2hand[e.target.id].isFlipped = true;
        console.log("false", player2hand[e.target.id]);
      } else {
        player2hand[e.target.id].isFlipped = false;
        // console.log("true", player1hand[e.target.id])
      }

      this.setState({
        player2hand: player2hand,
      });
    }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  Game = () => {
    const { gameStart, player1hand } = this.state;

    if (gameStart) {
      return <GameBoard player1hand={player1hand} flipped={this.flipped} />;
    }
  };

  render() {
    const {
      cardDeck,
      player1hand,
      player2hand,
      isFlipped,
      gameStart,
    } = this.state;
    // console.log("game started", gameStart)

    return (
      <div>
        <button onClick={this.handleStart}>Start Game</button>

        {this.Game()}

        {/* <div className="deck1">
          {player1hand.map((card, i) => {
            return (
                <Card
                  key={card.suit + card.num}  //key
                  id={i}                      //id
                  flipped={card.isFlipped}    //checking to see if card is flipped or not
                  clicked={this.flipped}      //passing function through props to change
                  cardbackImg={card.backImg}  //set image of card through props
                  cardSuit={card.suit}        //set card suit through props
                  cardNum={card.num}          //set card number through props
                  classname="card1"           //set class name through props
                />
            )
          })
        }
        </div>
        <p>---------------------------------------------------------------------</p>
        <div className="deck2">
          {player2hand.map((card, i) => {
            return (
                <Card
                  key={card.suit + card.num}  //key
                  id={i}                      //id
                  flipped={card.isFlipped}    //checking to see if card is flipped or not
                  clicked={this.flipped}      //passing function through props to change
                  cardbackImg={card.backImg}  //set image of card through props
                  cardSuit={card.suit}        //set card suit through props
                  cardNum={card.num}          //set card number through props
                  classname="card2"           //set class name through props
                />
            )
          })
          }
        </div> */}
      </div>
    );
  }
}

export default CardGame;
