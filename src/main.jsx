import ReactDOM from 'react-dom';
import React from 'react';
import Board from './components/board';
import Game from './game';

let game = new Game();
 
ReactDOM.render(
    <Board game={game}/>,
    document.getElementById('main')
);