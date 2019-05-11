import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render () {
        return (
            <div class="Jumbotron">
                    <h1>Meme-ory Game </h1>
                    <h2 id="ice">Can you conquer the Seven Kingdoms without clicking the same meme more than once?</h2>
                    <h2>Score: {this.props.score}</h2>
            </div>
        )
    }
}

export default Jumbotron;