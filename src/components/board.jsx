import React from 'react';
import Slot from './slot';

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


class Board extends React.Component {
  constructor(props){
      super(props);
  }
    
  rowStyle({top}){
    return {
        border: 'thin solid black',
        padding: '2px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: top ? 'row-reverse' : 'row'
    };
  }

  top() {
      const board = this.props.game.board.board;
      return board.slice(0,12);
  }
  bottom(){
      const board = this.props.game.board.board;
      return board.slice(12, board.length);
  }
  render() {
    return <div>
        <div className="top-row" style={this.rowStyle({top: true})}>
            {this.top().map((pieces) => { return <Slot pieces={pieces} top={true}/>;})}
        </div>
        <div style={middleDivider} />
        <div className="bottom-row" style={this.rowStyle({})}>
            {this.bottom().map((pieces) => { return <Slot pieces={pieces} />;})}
        </div>
    
    </div>;
  }
}

export default Board;