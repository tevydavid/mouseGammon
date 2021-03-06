/*global
console
*/
class Game {
    constructor(){
        this.player1 = new Player({name: "Tevy", color: "White"});
        this.player2 = new Player({name: "James", color: "Black"});
        this.board = new Board();
    }
}

class Board {
    constructor(){
        this.board = new Array(24);
        this.setUpBoard();
        this.selectedPiece = null;
    }
    
    selectPiece(index){
        this.selectedPiece = this.board[index].last();
    }
    setUpBoard(){
        for(let i = 0; i < this.board.length; i++){
            this.board[i] = [];
        }
        this.addPiecesToSpace({numPieces: 2, color: "W", space: 0});
        this.addPiecesToSpace({numPieces: 5, color: "B", space: 5});
        this.addPiecesToSpace({numPieces: 3, color: "B", space: 7});
        this.addPiecesToSpace({numPieces: 5, color: "W", space: 11});
        this.addPiecesToSpace({numPieces: 5, color: "B", space: 12});
        this.addPiecesToSpace({numPieces: 3, color: "W", space: 16});
        this.addPiecesToSpace({numPieces: 5, color: "W", space: 18});
        this.addPiecesToSpace({numPieces: 2, color: "B", space: 23});
        
    }
    addPieceToSpace({piece, space}){
        this.board[space].push(piece);
    }
    addPiecesToSpace({numPieces, color, space}){

        for(let i = 0; i < numPieces; i++){
            this.addPieceToSpace({space, piece: new Piece({color})});
        }
    }
    movePieceFromSpace({fromSpace, toSpace}){
        let piece = this.board[fromSpace].pop();
        addPieceToSpace({piece, space: toSpace});
    }
}

class Slot {
    constructor({top, pieces: []}){
        this.top = top;
        this.pieces = pieces;
        this.selectedPieces = [];
    }
    addPieces({pieces = []}){
        this.pieces.concat(pieces);
    }
    selectPieces({numPieces}){
        this.pieces.slice(this.pieces.length - 1 - numPieces).each((pieces) => {    piece.selected = true;
        this.selectedPieces.push(pieces);
        });
    }
}
class Piece {
    constructor({color}){
        this.color = color;
        this.selected = false;
        this.select = this.select.bind(this);
    }
    select(){
        this.selected = true;
    }
}

class Player{
    constructor({name, color}){
        this.name = name;
        this.color = color;
    }
}

export default Game;