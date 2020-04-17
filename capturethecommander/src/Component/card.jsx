import React from "react"

function Card(props) {
    let isFlipped = props.isFlipped

    if (isFlipped === false) {
        return (
            <img
                id = {props.id}
                src={props.cardbackImg}
                alt="broken pic"
                onClick={props.clicked}
                className = {props.classname}
            />
        )
    }else{
        return(
            <p
            id = {props.id}
            onClick = {props.clicked}
            className = {props.classname}
            >
                {props.cardSuit} {props.cardNum}
            </p>
        )
    }
}




export default Card