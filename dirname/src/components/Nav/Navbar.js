import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-fixed-top">
                <ul>
                    <li className ="itemLeft">Test Your Memory</li>
                    <li className="itemCenter">Meme-ory</li>
                    <li className="itemRight">Score: [this.props.score}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;