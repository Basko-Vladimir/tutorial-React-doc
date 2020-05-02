import React from 'react';
import './App.css';
import Board from "./component/Board";

class Game extends React.Component{
    render() {
        return (
            <div className={'game'}>
                <div className={'game-board'}>
                    <Board />
                </div>
                <div className={'game-info'}>
                    <div> </div>
                    <div> </div>
                </div>

            </div>
        );
    }
}

export default Game;
