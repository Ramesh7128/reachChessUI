import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

class FenInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "fen": '',
            "isActive": false,
            "isValid": false,
        }
    }
    render() {
        return (
            <div className='input-section'>
                <div>
                    <Input placeholder='FEN string' />
                </div>
                <div className='fen-submit-button'>
                    <Button onClick={this.handleClick} size='mini' data-id='add' color='orange'>View</Button>
                </div>
            </div>
        );
    }
}

export default FenInput;