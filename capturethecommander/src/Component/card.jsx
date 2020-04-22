import React from "react";

function Card(props) {
  const { isFlipped, id, cardbackImg, cardfrontImg, clicked } = props;

  if (isFlipped === false) {
    return (
      <img
        id={id}
        src={cardbackImg}
        alt="broken pic"
        onClick={clicked}
        className="card"
      />
    );
  } else {
    return (
      <img
        id={id}
        src={cardfrontImg}
        alt="broken pic"
        onClick={clicked}
        className="card"
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
