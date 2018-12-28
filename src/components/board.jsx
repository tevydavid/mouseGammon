import React from 'react';

let rowStyle = {
    border: 'thin solid black',
    padding: '2px',
    display: 'flex',
    justifyContent: 'space-between'
};

let colStyle = {
    width: '20px',
    border: 'thin solid blue',
    padding: '4px'
};

let middleDivider = {
    height: "10px",
    backgroundColor: "black",
    margin: '5px 0'
};

function pieceStyle({color}) {
  return {
      border: 'solid black',
      borderRadius: '50px',
      height: '15px',
      width: '15px',
      backgroundColor: color === "W" ? "white" : "black",
      margin: '2px 0'
  };
}

function renderPieces(pieces) {
  return (
    <div className='column bottom-row' style={colStyle}>
      {pieces.map(renderPiece)}
    </div>
  );
}

function renderPiece(piece) {
    return (
        <div className={`piece ${piece.color}`} style={pieceStyle(piece)} />
    );
}

class Board extends React.Component {
  constructor(props){
      super(props);
  }

  top() {
      const board = this.props.game.board.board;
      return board.slice(0,12).map(renderPieces).reverse();
  }
  bottom(){
      const board = this.props.game.board.board;
      return board.slice(12, board.length)
          .map(renderPieces);
  }
  render() {
    return <div>
        <div className="top-row" style={rowStyle}>
            {this.top()}
        </div>
        <div style={middleDivider} />
        <div className="bottom-row" style={rowStyle}>
            {this.bottom()}
        </div>
    
    </div>;
  }
}

export default Board;