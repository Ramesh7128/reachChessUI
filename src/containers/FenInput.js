import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import validateFEN from 'fen-validator';


class FenInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "fen": 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq_-',
            "FENerror": ''
        }
        this.handlechange = this.handlechange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handlechange(event) {
        const defaultFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq_-'
        console.log(event.target.value);
        (event.target.value) ? this.setState({ fen: event.target.value, FENerror: '' }) : this.setState({ fen: defaultFEN, FENerror: '' });
    }

    handleEnter(event) {
        if (event.key == 'Enter') {
            this.handleSubmit();
        }
    }

    handleSubmit() {
        // check if valid fen
        if (validateFEN(this.state.fen)) {
            this.props.handleValidFEN(this.state.fen);
        } else {
            this.setState({
                FENerror: 'Invalid FEN',
            })
        }
    }

    render() {
        const fen = this.state.fen;
        console.log(fen);
        return (
            <div className='input-section'>
                <div className='input-error-section'>
                    <div className='error-section'>{this.state.FENerror}</div>
                    <div className='input-section'>
                        <Input focus onKeyDown={this.handleEnter} onChange={this.handlechange} placeholder='FEN string' />
                    </div>
                </div>
                <div className='fen-submit-button'>
                    <Button type='submit' onClick={this.handleSubmit} data-id='add' color='orange'>View</Button>
                </div>
            </div>
        );
    }
}

export default FenInput;