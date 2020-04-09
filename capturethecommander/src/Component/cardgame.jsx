import React, { Component } from "react";
import "./cardgame.css";

class CardGame extends Component {
  constructor() {
    super();

    this.state = {
      cardDeck: [
        { suit: "♠︎", num: "2", numVal: 2 },
        { suit: "♠︎", num: "3", numVal: 3 },
        { suit: "♠︎", num: "4", numVal: 4 },
        { suit: "♠︎", num: "5", numVal: 5 },
        { suit: "♠︎", num: "6", numVal: 6 },
        { suit: "♠︎", num: "7", numVal: 7 },
        { suit: "♠︎", num: "8", numVal: 8 },
        { suit: "♠︎", num: "9", numVal: 9 },
        { suit: "♠︎", num: "10", numVal: 10 },
        { suit: "♠︎", num: "K", numVal: 10 },
        { suit: "♠︎", num: "Q", numVal: 10 },
        { suit: "♠︎", num: "J", numVal: 10 },
        { suit: "♠︎", num: "A", numVal: 10 },
        { suit: "♢", num: "2", numVal: 2 },
        { suit: "♢", num: "3", numVal: 3 },
        { suit: "♢", num: "4", numVal: 4 },
        { suit: "♢", num: "5", numVal: 5 },
        { suit: "♢", num: "6", numVal: 6 },
        { suit: "♢", num: "7", numVal: 7 },
        { suit: "♢", num: "8", numVal: 8 },
        { suit: "♢", num: "9", numVal: 9 },
        { suit: "♢", num: "10", numVal: 10 },
        { suit: "♢", num: "K", numVal: 10 },
        { suit: "♢", num: "Q", numVal: 10 },
        { suit: "♢", num: "J", numVal: 10 },
        { suit: "♢", num: "A", numVal: 10 },
        { suit: "♡", num: "2", numVal: 2 },
        { suit: "♡", num: "3", numVal: 3 },
        { suit: "♡", num: "4", numVal: 4 },
        { suit: "♡", num: "5", numVal: 5 },
        { suit: "♡", num: "6", numVal: 6 },
        { suit: "♡", num: "7", numVal: 7 },
        { suit: "♡", num: "8", numVal: 8 },
        { suit: "♡", num: "9", numVal: 9 },
        { suit: "♡", num: "10", numVal: 10 },
        { suit: "♡", num: "K", numVal: 10 },
        { suit: "♡", num: "Q", numVal: 10 },
        { suit: "♡", num: "J", numVal: 10 },
        { suit: "♡", num: "A", numVal: 10 },
        { suit: "♣︎", num: "2", numVal: 2 },
        { suit: "♣︎", num: "3", numVal: 3 },
        { suit: "♣︎", num: "4", numVal: 4 },
        { suit: "♣︎", num: "5", numVal: 5 },
        { suit: "♣︎", num: "6", numVal: 6 },
        { suit: "♣︎", num: "7", numVal: 7 },
        { suit: "♣︎", num: "8", numVal: 8 },
        { suit: "♣︎", num: "9", numVal: 9 },
        { suit: "♣︎", num: "10", numVal: 10 },
        { suit: "♣︎", num: "K", numVal: 10 },
        { suit: "♣︎", num: "Q", numVal: 10 },
        { suit: "♣︎", num: "J", numVal: 10 },
        { suit: "♣︎", num: "A", numVal: 10 },
      ],
    };
  }

  render() {
    const { cardDeck } = this.state;
    return (
      <div className="deck">
        {cardDeck.map((card) => {
          return (
            <p key={card.numVal} className="card">
              {card.suit} {card.num}
            </p>
          );
        })}
      </div>
    );
  }
}

export default CardGame;
