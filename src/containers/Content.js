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
        }
        this.handleValidFEN = this.handleValidFEN.bind(this);
    }

    handleValidFEN(fenValue) {
        this.setState({
            validFEN: fenValue
        });

    }
    render() {
        console.log(this.state);
        return (
            <div className='content-section'>
                <FenInput handleValidFEN={this.handleValidFEN} />
                <ChessBoard fen={this.state.validFEN}/>
            </div>
        );
    }
}

export default Content;