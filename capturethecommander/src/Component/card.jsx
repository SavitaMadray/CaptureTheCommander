import React from "react";

function Card(props) {
  const { card, id, clicked, hand, gameMoves } = props;

  let hiddenCard = "";
  if (card.hidden) {
    hiddenCard = "hidden";
  }
  if (card.isFlipped === false) {
    return (
      <img
        id={id}
        src={card.backImg}
        alt="broken pic"
        onClick={(e) => {
          if (!card.hidden) {
            // clicked(e);
            gameMoves(e,id,hand);
          }
        }}
        className={"card" + " " + hiddenCard}
        data-hand={hand}
        data-numval={card.numVal}
      />
    );
  } else {
    return (
      <img
        id={id}
        src={card.frontImg}
        alt="broken pic"
        onClick={(e) => {
          if (!card.hidden) {
            // clicked(e);
            // gameMoves(e);
          }
        }}
        className={"card" + " " + hiddenCard}
        data-hand={hand}
        data-numval={card.numVal}
      />
    );
  }
}

export default Card;
