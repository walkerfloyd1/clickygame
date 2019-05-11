import React from 'react';
import "./imageCard.css";



const Card = props => {
    return <div className = "card" onClick={() => props.clickCount(props.id)}>
        <div className = "img-container">
            <img alt="Meme" src = {props.image}></img>
        </div>
    </div>
};

export default Card;