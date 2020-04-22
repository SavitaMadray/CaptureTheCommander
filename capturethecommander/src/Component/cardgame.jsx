import React, { Component } from "react";
import "../Css/cardgame.css";
import Card from "./card";
import GameBoard from "./GameBoard";
import Home from "./Home";
import { Link } from "react-router-dom";

class CardGame extends Component {
  constructor() {
    super();

    this.state = {
      cardDeck: [
        {
          cardNum: 1,
          suit: "♠︎",
          num: "2",
          numVal: 2,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884151_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 2,
          suit: "♠︎",
          num: "3",
          numVal: 3,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884155_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 3,
          suit: "♠︎",
          num: "4",
          numVal: 4,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884160_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 4,
          suit: "♠︎",
          num: "5",
          numVal: 5,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884165_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 5,
          suit: "♠︎",
          num: "6",
          numVal: 6,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884170_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 6,
          suit: "♠︎",
          num: "7",
          numVal: 7,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884174_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 7,
          suit: "♠︎",
          num: "8",
          numVal: 8,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884178_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 8,
          suit: "♠︎",
          num: "9",
          numVal: 9,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884183_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 9,
          suit: "♠︎",
          num: "10",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/spades-884147_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 10,
          suit: "♠︎",
          num: "J",
          numVal: 11,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161487_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 11,
          suit: "♠︎",
          num: "Q",
          numVal: 12,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161488_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 12,
          suit: "♠︎",
          num: "K",
          numVal: 13,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161489_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 13,
          suit: "♠︎",
          num: "A",
          numVal: 14,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2014/03/25/17/01/spades-297839_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 14,
          suit: "♢",
          num: "2",
          numVal: 2,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/diamonds-884149_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 15,
          suit: "♢",
          num: "3",
          numVal: 3,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884153_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 16,
          suit: "♢",
          num: "4",
          numVal: 4,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884157_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 17,
          suit: "♢",
          num: "5",
          numVal: 5,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884162_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 18,
          suit: "♢",
          num: "6",
          numVal: 6,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884168_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 19,
          suit: "♢",
          num: "7",
          numVal: 7,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884172_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 20,
          suit: "♢",
          num: "8",
          numVal: 8,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884176_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 21,
          suit: "♢",
          num: "9",
          numVal: 9,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884180_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 22,
          suit: "♢",
          num: "10",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/diamonds-884145_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 23,
          suit: "♢",
          num: "K",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2013/07/13/13/46/playing-card-161492_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 24,
          suit: "♢",
          num: "Q",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2013/07/13/13/46/playing-card-161491_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 25,
          suit: "♢",
          num: "J",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161490_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 26,
          suit: "♢",
          num: "A",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2012/04/11/14/00/ace-28344_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 27,
          suit: "♡",
          num: "2",
          numVal: 2,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/hearts-884150_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 28,
          suit: "♡",
          num: "3",
          numVal: 3,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884154_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 29,
          suit: "♡",
          num: "4",
          numVal: 4,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884159_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 30,
          suit: "♡",
          num: "5",
          numVal: 5,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884163_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 31,
          suit: "♡",
          num: "6",
          numVal: 6,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884169_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 32,
          suit: "♡",
          num: "7",
          numVal: 7,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884173_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 33,
          suit: "♡",
          num: "8",
          numVal: 8,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884177_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 34,
          suit: "♡",
          num: "9",
          numVal: 9,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884181_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 35,
          suit: "♡",
          num: "10",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/hearts-884146_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 36,
          suit: "♡",
          num: "K",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2013/07/13/13/46/playing-card-161495_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 37,
          suit: "♡",
          num: "Q",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2013/07/13/13/46/playing-card-161494_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 38,
          suit: "♡",
          num: "J",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2013/07/13/13/46/playing-card-161493_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 39,
          suit: "♡",
          num: "A",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2012/04/11/14/04/ace-28357_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 40,
          suit: "♣︎",
          num: "2",
          numVal: 2,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/clubs-884148_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 41,
          suit: "♣︎",
          num: "3",
          numVal: 3,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884152_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 42,
          suit: "♣︎",
          num: "4",
          numVal: 4,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884156_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 43,
          suit: "♣︎",
          num: "5",
          numVal: 5,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884161_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 44,
          suit: "♣︎",
          num: "6",
          numVal: 6,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884167_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 45,
          suit: "♣︎",
          num: "7",
          numVal: 7,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884171_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 46,
          suit: "♣︎",
          num: "8",
          numVal: 8,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884175_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 47,
          suit: "♣︎",
          num: "9",
          numVal: 9,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884179_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 48,
          suit: "♣︎",
          num: "10",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/clubs-884144_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 49,
          suit: "♣︎",
          num: "J",
          numVal: 11,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161483_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 50,
          suit: "♣︎",
          num: "Q",
          numVal: 12,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161484_1280.png",

          isFlipped: false,
        },
        {
          cardNum: 51,
          suit: "♣︎",
          num: "K",
          numVal: 13,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161485_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 52,
          suit: "♣︎",
          num: "A",
          numVal: 14,
          backImg:
            "https://cdn.pixabay.com/photo/2019/01/17/08/23/flowers-3937297_1280.jpg",
          frontImg:
            "https://cdn.pixabay.com/photo/2012/04/11/13/56/ace-28331__480.png",
          isFlipped: false,
        },
      ],
      player1hand: [],
      player2hand: [],
      gameStart: false,
    };
  }

  componentDidMount() {
    this.handleStart();
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

  handleStart = () => {
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
    let { player1hand, player2hand, cardDeck } = this.state;
    console.log("target: ", e.target.id);

    if (player1hand[e.target.id].isFlipped === false) {
      player1hand[e.target.id].isFlipped = true;
      console.log("false", player1hand[e.target.id]);
    } else {
      player1hand[e.target.id].isFlipped = false;
    }

    this.setState({
      player1hand: player1hand,
    });

    // if (e.target.className === "card2") {
    //   if (player2hand[e.target.id].isFlipped === false) {
    //     player2hand[e.target.id].isFlipped = true;
    //     console.log("false", player2hand[e.target.id]);
    //   } else {
    //     player2hand[e.target.id].isFlipped = false;
    //   }

    //   this.setState({
    //     player2hand: player2hand,
    //   });
    // }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { gameStart, player1hand, cardDeck } = this.state;
    if (gameStart) {
      return (
        <GameBoard
          player1hand={player1hand}
          flipped={this.flipped}
          cardDeck={cardDeck}
        />
      );
    }
    return null;
  }
}

export default CardGame;
