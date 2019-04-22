import React, { Component } from 'react';
import Chessground from 'react-chessground';
import 'react-chessground/dist/styles/chessground.css';
import FenInput from './FenInput';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='content-section'>
                <FenInput />
                <Chessground />
            </div>
        );
    }
}

export default Content;