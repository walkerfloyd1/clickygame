import React from 'react';
import "./imageCard.css";



const Card = props => {
    return <div className = "card" onClick={() => props.clickCount(props.id)}>
        <div className = "img-container">
            <img alt={props.image.replace(".jpg", "")} src = {require("../../images/" + props.image)}></img>
        </div>
    </div>
};

export default Card;