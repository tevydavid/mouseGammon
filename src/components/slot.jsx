import React from 'react';


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

class Slot extends React.Component {
  constructor(props){
      super(props);
  }
  
  colStyle() {
      let style = {
        width: '20px',
        border: 'thin solid blue',
        padding: '4px',
        display: 'flex'
      };
      if(this.props.top){
        style.flexDirection = "column";

      } else {
        style.flexDirection = "column-reverse";
      }
      return style;
  }

  render() {
    return <div className="Slot" style={this.colStyle()}>
            {this.props.pieces.map(renderPiece)}
    
    </div>;
  }
}

export default Slot;