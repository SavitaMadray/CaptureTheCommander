import React, { Component } from "react";
import Card from "./card";
import CardGame from "./cardgame";

function GameBoard(props) {
  const { player1hand } = props;
  const rowOne = player1hand.slice(0, 4);
  const rowTwo = player1hand.slice(4, 7);
  const rowThree = player1hand.slice(7, 10);
  const rowFour = player1hand.slice(10, 12);
  const rowFive = player1hand[player1hand.length - 1];

  console.log(rowOne);

  return <div></div>;
}
export default GameBoard;
