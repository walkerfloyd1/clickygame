import React from 'react';
import Navbar from './components/Nav/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import imageCard from './components/imageCard/imageCard.js';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
