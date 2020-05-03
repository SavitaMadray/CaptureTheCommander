import React from "react";

function Card(props) {
  const {
    isFlipped,
    id,
    cardbackImg,
    cardfrontImg,
    clicked,
    hand,
    gameMoves,
    numVal,
  } = props;

  if (isFlipped === false) {
    return (
      <img
        id={id}
        src={cardbackImg}
        alt="broken pic"
        onClick={(e) => {
          clicked(e);
          gameMoves(e);
        }}
        className="card"
        data-hand={hand}
        data-numval={numVal}
      />
    );
  } else {
    return (
      <img
        id={id}
        src={cardfrontImg}
        alt="broken pic"
        onClick={(e) => {
          clicked(e);
          gameMoves(e);
        }}
        className="card"
        data-hand={hand}
        data-numval={numVal}
      />

      // <p
      // id = {props.id}
      // onClick = {props.clicked}
      // className = {props.classname}
      // >
      //     {props.cardSuit} {props.cardNum}
      // </p>
    );
  }
}

export default Card;
