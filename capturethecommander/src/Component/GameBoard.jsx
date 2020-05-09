import React from "react";
import "../Css/gameboard.css";
import Card from "./card";

export default function GameBoard(props) {
  const { player1hand, flipCard, player2hand, message, gameMoves } = props;

  let firstRowP1 = player1hand.slice(0, 4); //0,1,2,3
  let secondRowP1 = player1hand.slice(4, 7);
  let thirdRowP1 = player1hand.slice(7, 10);
  let fourthRowP1 = player1hand.slice(10, 12);
  let fifthRowP1 = [player1hand[player1hand.length - 1]];

  let fifthRowP2 = player2hand.slice(0, 4); //0,1,2,3
  let fourthRowP2 = player2hand.slice(4, 7);
  let thirdRowP2 = player2hand.slice(7, 10);
  let secondRowP2 = player2hand.slice(10, 12);
  let firstRowP2 = [player2hand[player2hand.length - 1]];

  // let cardFormation = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];
  // console.log(player1hand);

  // rule about what cards can be flipCard?

  return (
    <div className="board">
      <p className="firstMove">{message}</p>
      <div className="players">
        <section className="hand1">
          <section className="row1">
            {firstRowP1.map((card, i) => {
              return (
                <Card
                  key={card.suit + card.num}
                  id={i}
                  isFlipped={card.isFlipped}
                  clicked={flipCard}
                  cardbackImg={card.backImg}
                  cardfrontImg={card.frontImg}
                  cardNum={card.num}
                  className="card1"
                  hand="player1"
                  gameMoves={gameMoves}
                  numVal={card.numVal}
                />
              );
            })}
            <section className="row2">
              {secondRowP1.map((card, i) => {
                return (
                  <Card
                    key={card.suit + card.num}
                    id={i + 4}
                    isFlipped={card.isFlipped}
                    clicked={flipCard}
                    cardbackImg={card.backImg}
                    cardfrontImg={card.frontImg}
                    cardNum={card.num}
                    className="card1"
                    hand="player1"
                    gameMoves={gameMoves}
                    numVal={card.numVal}
                  />
                );
              })}
            </section>
            <section className="row3">
              {thirdRowP1.map((card, i) => {
                return (
                  <Card
                    key={card.suit + card.num}
                    id={i + 7}
                    isFlipped={card.isFlipped}
                    clicked={flipCard}
                    cardbackImg={card.backImg}
                    cardfrontImg={card.frontImg}
                    cardNum={card.num}
                    className="card1"
                    hand="player1"
                    gameMoves={gameMoves}
                    numVal={card.numVal}
                  />
                );
              })}
            </section>
            <section className="row4">
              {fourthRowP1.map((card, i) => {
                return (
                  <Card
                    key={card.suit + card.num}
                    id={i + 10}
                    isFlipped={card.isFlipped}
                    clicked={flipCard}
                    cardbackImg={card.backImg}
                    cardfrontImg={card.frontImg}
                    cardNum={card.num}
                    className="card1"
                    hand="player1"
                    numVal={card.numVal}
                  />
                );
              })}
            </section>
            <section className="row5">
              {fifthRowP1.map((card, i) => {
                return (
                  <Card
                    key={card.suit + card.num}
                    id={i + 12}
                    isFlipped={card.isFlipped}
                    clicked={flipCard}
                    cardbackImg={card.backImg}
                    cardfrontImg={card.frontImg}
                    cardNum={card.num}
                    className="card1"
                    hand="player1"
                    gameMoves={gameMoves}
                    numVal={card.numVal}
                  />
                );
              })}
            </section>
          </section>
        </section>

        <section className="hand2">
          <section className="row1">
            {firstRowP2.map((card, i) => {
              return (
                <Card
                  key={card.suit + card.num}
                  id={i + 12}
                  isFlipped={card.isFlipped}
                  clicked={flipCard}
                  cardbackImg={card.backImg}
                  cardfrontImg={card.frontImg}
                  cardNum={card.num}
                  className="card2"
                  hand="player2"
                  gameMoves={gameMoves}
                  numVal={card.numVal}
                />
              );
            })}
            <section className="row2">
              {secondRowP2.map((card, i) => {
                return (
                  <Card
                    key={card.suit + card.num}
                    id={i + 10}
                    isFlipped={card.isFlipped}
                    clicked={flipCard}
                    cardbackImg={card.backImg}
                    cardfrontImg={card.frontImg}
                    cardNum={card.num}
                    className="card2"
                    hand="player2"
                    gameMoves={gameMoves}
                    numVal={card.numVal}
                  />
                );
              })}
            </section>
            <section className="row3">
              {thirdRowP2.map((card, i) => {
                return (
                  <Card
                    key={card.suit + card.num}
                    id={i + 7}
                    isFlipped={card.isFlipped}
                    clicked={flipCard}
                    cardbackImg={card.backImg}
                    cardfrontImg={card.frontImg}
                    cardNum={card.num}
                    className="card2"
                    hand="player2"
                    gameMoves={gameMoves}
                    numVal={card.numVal}
                  />
                );
              })}
            </section>
            <section className="row4">
              {fourthRowP2.map((card, i) => {
                return (
                  <Card
                    key={card.suit + card.num}
                    id={i + 4}
                    isFlipped={card.isFlipped}
                    clicked={flipCard}
                    cardbackImg={card.backImg}
                    cardfrontImg={card.frontImg}
                    cardNum={card.num}
                    className="card2"
                    hand="player2"
                    gameMoves={gameMoves}
                    numVal={card.numVal}
                  />
                );
              })}
            </section>
            <section className="row5">
              {fifthRowP2.map((card, i) => {
                return (
                  <Card
                    key={card.suit + card.num}
                    id={i}
                    isFlipped={card.isFlipped}
                    clicked={flipCard}
                    cardbackImg={card.backImg}
                    cardfrontImg={card.frontImg}
                    cardNum={card.num}
                    className="card2"
                    hand="player2"
                    gameMoves={gameMoves}
                    numVal={card.numVal}
                  />
                );
              })}
            </section>
          </section>
        </section>
      </div>
    </div>
  );
}
