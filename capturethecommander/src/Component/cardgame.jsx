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
      player1hand: [],
      player2hand: [],
    };
  }

  shuffleDeck = (cardDeck) => {
    for (var i = 0; i < 1000; i++) {
      var location1 = Math.floor(Math.random() * cardDeck.length);
      var location2 = Math.floor(Math.random() * cardDeck.length);
      var tmp = cardDeck[location1];

      cardDeck[location1] = cardDeck[location2];
      cardDeck[location2] = tmp;
    }
  };

  handleStart = (e) => {
    const { cardDeck } = this.state;
    this.shuffleDeck(cardDeck);
    this.setState({
      player1hand: cardDeck,
    });
  };

  render() {
    const { cardDeck, player1hand } = this.state;
    return (
      <div>
        <button onClick={this.handleStart}>Start Game</button>
        <div className="deck">
          {player1hand.map((card) => {
            return (
              <p key={card.numVal} className="card">
                {card.suit} {card.num}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardGame;
