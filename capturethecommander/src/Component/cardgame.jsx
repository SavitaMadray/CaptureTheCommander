import React, { Component } from "react";
import "./cardgame.css";
import Card from "./card";
import Gameboard from "./gameboard";

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

  handleStart = (e) => {
    const { cardDeck } = this.state;
    this.shuffleDeck(cardDeck);
    this.dealHands();
  };

  flipped = (e) => {
    const { player1hand, player2hand } = this.state;

    if (e.target.className === "card1") {
      player1hand[e.target.id].isFlipped = true;
      this.setState({
        player1hand: player1hand,
      });
    } else {
      player2hand[e.target.id].isFlipped = true;
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
      cardDeck,
      rowOne,
      player1hand,
      player2hand,
      isFlipped,
    } = this.state;

    return (
      <div className="board">
        <button onClick={this.handleStart}>Start Game</button>
        <Gameboard player1hand={player1hand} />

        {/* <div className="deck1">
          {player1hand.map((card, i) => {
            if (card.isFlipped === true) {
              return <img src={card.backImg} className="card1"></img>;
            } else {
              return (
                <p
                  id={i}
                  key={card.suit + card.num}
                  className="card1"
                  onClick={this.flipped}
                >
                  {card.suit} {card.num}
                </p>
              );
            }
          })}
        </div>
        <div className="deck2">
          {player2hand.map((card, i) => {
            if (card.isFlipped === true) {
              return <img src={card.backImg} className="card2"></img>;
            } else {
              return (
                <p
                  id={i}
                  key={card.suit + card.num}
                  className="card2"
                  onClick={this.flipped}
                >
                  {card.suit} {card.num}
                </p>
              );
            }
          })}
        </div> */}
      </div>
    );
  }
}

export default CardGame;
