import React from "react";
import "../Css/styles.css";
import Card from "./card";

export default function Board(props) {
  const { player1hand, cardFlipped } = props;

  let firstRow = player1hand.slice(0, 4); //0,1,2,3
  let secondRow = player1hand.slice(4, 7);
  let thirdRow = player1hand.slice(7, 9);
  let fourthRow = player1hand.slice(9, 11);
  let fifthRow = [player1hand[player1hand.length - 1]];

  let cardFormation = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];

 function handleCardFlip(){
    
    cardFlipped()
  }

  console.log(player1hand)

  // rule about what cards can be flipped?

  return (
    <div className="Board">
      <section className="rows">
        {cardFormation.map((cardRow, idx) => {
          let row = cardRow;
          return row.map( (card, i) => {
            // console.log(card.suit)
            
            
            return <Card
            key = {card.suit + card.num}
            id = {i}
            flipped ={card.isFlipped}
            clicked ={handleCardFlip}
            cardbackImg ={card.backImg}
            cardNum = {card.num}
            classname="card1"  
            
            //   handleCardFlip={() => handleCardFlip(idx + 1, card)}
            />
          });
        })}
      </section>
    </div>
  );
}
