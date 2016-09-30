import React from 'react';
import Piece from './Piece.js';
import Dice from './Dice.js';
import $ from 'jquery';
import moves from './moves.json';

const Board = React.createClass({
  getInitialState() {
    return {
      dieRoll: 1,
      piecePos: 1,
      message: '',
      score: 0
    }
  },
  movePiece() {
    var rand = 1 + parseInt(Math.random() * 6, 10);
    var newPos = this.state.piecePos + rand > 16 ? (this.state.piecePos + rand) % 16 : this.state.piecePos + rand;
    this.setState({dieRoll: rand, piecePos: newPos, message: moves[newPos]["message"], score: this.state.score + parseInt(moves[newPos]["points"])}, () => {console.log('now piece is at ' + this.state.piecePos)});

    var newLeft = $('.square[data-number="' + newPos + '"]').offset().left;
    var newTop = $('.square[data-number="' + newPos + '"]').offset().top;
    if ((newPos > 9 && newPos < 14) || (newPos > 1 && newPos < 6)) {
      $('.Piece').css('top', newTop);
      setTimeout(() => {
        $('.Piece').css('left', newLeft);
      }, 1000);
    } else {
      $('.Piece').css('left', newLeft);
      setTimeout(() => {
        $('.Piece').css('top', newTop);
      }, 1000);
    }
  },
  render() {
    return <div className="Board">
      {[1, 2, 3, 4, 5].map((el, i) => {return <div key={i} className="square top-row" data-number={el}>{el}</div>})}
      <div className="square left-col row-2" data-number="16">16</div>
      <div className="square right-col row-2" data-number="6">6</div>
      <div className="square left-col row-3" data-number="15">15</div>
      <div className="square right-col row-3" data-number="7">7</div>
      <div className="square left-col row-4" data-number="14">14</div>
      <div className="square right-col row-4" data-number="8">8</div>
      {[13, 12, 11, 10, 9].map((el, i) => {return <div key={i} className="square bottom-row" data-number={el}>{el}</div>})}
      <Piece></Piece><br/><br/>
      <Dice movePiece={this.movePiece}></Dice>
      <p className="message">{this.state.message}</p>
      <p className="score">Your score: {this.state.score}</p>
    </div>;
  }
});

export default Board;
