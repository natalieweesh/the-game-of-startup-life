import React, { Component } from 'react';
import './App.css';
import Board from './Board.js';

class App extends Component {
  render() {
    return (
      <div className="Game">
        <Board></Board>
      </div>
    );
  }
}

export default App;
