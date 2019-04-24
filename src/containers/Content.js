import React, { Component } from 'react';
import 'react-chessground/dist/styles/chessground.css';
import FenInput from './FenInput';
import ChessBoard from './ChessBoard';
// import chessground from 'react-chessground/chessground';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validFEN: '',
            boardActive: false
        }
        this.handleValidFEN = this.handleValidFEN.bind(this);
        this.toggleBoardActive = this.toggleBoardActive.bind(this);
    }

    toggleBoardActive() {
        this.setState(state => ({
            boardActive: !state.boardActive
        }))
    }

    handleValidFEN(fenValue) {
        this.setState({
            validFEN: fenValue,
            boardActive: true,
        });

    }
    render() {
        console.log(this.state);
        return (
            <div className='content-section'>
                {!this.state.boardActive &&
                    <FenInput handleValidFEN={this.handleValidFEN} />
                }
                {this.state.boardActive &&
                    <ChessBoard toggleBoardActive={this.toggleBoardActive} fen={this.state.validFEN} />
                }
            </div>
        );
    }
}

export default Content;