import React from 'react';
import "./imageCard.css";

const imageCard = props => {
    return <div className = "image" onClick={() => props.clickCount(props.id)}>
        <div className = "img-container">
            <img src = {props.image}></img>
        </div>
    </div>
};

export default imageCard;