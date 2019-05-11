import React, { Component } from 'react';
import Memes from './images.json';
import Wrapper from './components/Wrapper/Wrapper.js';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Card from './components/images/imageCard';
import './App.css';



class App extends Component {
  state = {
    Memes,
    score: 0,
  }

  endGame = () => {
    this.state.Memes.forEach(meme => {
      meme.count = 0;
    })
    this.setState({
      score: 0
    });
    alert('Game Over');
    return true;
  }

  winGame = () => {
    this.state.Memes.forEach(meme=> {
      meme.count = 0;
    })
    this.setState({
      score: 0,
      clickedMemes: []
    })
    alert('You won!');
    return true;
  }

  memeCount = id => {
    let memeArr = this.state.Memes;
    memeArr.find((a, i) => {
      if (a.id === id) {
        if (Memes[i].count === 0) {
          Memes[i].count += 1;
          this.setState({
            score: this.state.score + 1
          });
          Memes.sort(() => Math.random() - 0.5)
          return true;
        }
        else {
          this.endGame();
        }
      }
      return Memes;
    })
    }

  render() {
    return (
      <Wrapper>
        <Jumbotron score={this.state.score} />
        {this.state.Memes.map(meme => (
          <Card
          clickCount={this.memeCount}
          id={meme.id}
          key={meme.id}
          image={meme.image}></Card>
        ))}
      </Wrapper>
    );
  }
}

export default App;
