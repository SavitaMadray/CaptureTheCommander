import React, { Component } from "react";
import "./cardgame.css";

class CardGame extends Component {
  constructor() {
    super();

    this.state = {
      cardDeck: [
        { suit: "spades", num: "2", numVal: 2 },
        { suit: "spades", num: "3", numVal: 3 },
        { suit: "spades", num: "4", numVal: 4 },
        { suit: "spades", num: "5", numVal: 5 },
        { suit: "spades", num: "6", numVal: 6 },
        { suit: "spades", num: "7", numVal: 7 },
        { suit: "spades", num: "8", numVal: 8 },
        { suit: "spades", num: "9", numVal: 9 },
        { suit: "spades", num: "10", numVal: 10 },
        { suit: "spades", num: "K", numVal: 10 },
        { suit: "spades", num: "Q", numVal: 10 },
        { suit: "spades", num: "J", numVal: 10 },
        { suit: "spades", num: "A", numVal: 10 },
        { suit: "diamonds", num: "2", numVal: 2 },
        { suit: "diamonds", num: "3", numVal: 3 },
        { suit: "diamonds", num: "4", numVal: 4 },
        { suit: "diamonds", num: "5", numVal: 5 },
        { suit: "diamonds", num: "6", numVal: 6 },
        { suit: "diamonds", num: "7", numVal: 7 },
        { suit: "diamonds", num: "8", numVal: 8 },
        { suit: "diamonds", num: "9", numVal: 9 },
        { suit: "diamonds", num: "10", numVal: 10 },
        { suit: "diamonds", num: "K", numVal: 10 },
        { suit: "diamonds", num: "Q", numVal: 10 },
        { suit: "diamonds", num: "J", numVal: 10 },
        { suit: "diamonds", num: "A", numVal: 10 },
        { suit: "hearts", num: "2", numVal: 2 },
        { suit: "hearts", num: "3", numVal: 3 },
        { suit: "hearts", num: "4", numVal: 4 },
        { suit: "hearts", num: "5", numVal: 5 },
        { suit: "hearts", num: "6", numVal: 6 },
        { suit: "hearts", num: "7", numVal: 7 },
        { suit: "hearts", num: "8", numVal: 8 },
        { suit: "hearts", num: "9", numVal: 9 },
        { suit: "hearts", num: "10", numVal: 10 },
        { suit: "hearts", num: "K", numVal: 10 },
        { suit: "hearts", num: "Q", numVal: 10 },
        { suit: "hearts", num: "J", numVal: 10 },
        { suit: "hearts", num: "A", numVal: 10 },
        { suit: "clubs", num: "2", numVal: 2 },
        { suit: "clubs", num: "3", numVal: 3 },
        { suit: "clubs", num: "4", numVal: 4 },
        { suit: "clubs", num: "5", numVal: 5 },
        { suit: "clubs", num: "6", numVal: 6 },
        { suit: "clubs", num: "7", numVal: 7 },
        { suit: "clubs", num: "8", numVal: 8 },
        { suit: "clubs", num: "9", numVal: 9 },
        { suit: "clubs", num: "10", numVal: 10 },
        { suit: "clubs", num: "K", numVal: 10 },
        { suit: "clubs", num: "Q", numVal: 10 },
        { suit: "clubs", num: "J", numVal: 10 },
        { suit: "clubs", num: "A", numVal: 10 }
      ]
    };

  }
  
  render(){
    return (
      <div>

      </div>
    )  


  }
}
