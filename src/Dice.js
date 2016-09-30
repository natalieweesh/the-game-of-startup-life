import React from 'react';

const Dice = React.createClass({
  render() {
    return <div>
      <button onClick={this.props.movePiece}>Move piece</button><br/>
    </div>;
  }
});

export default Dice;
