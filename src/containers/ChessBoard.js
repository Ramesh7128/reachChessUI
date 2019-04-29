import React, { Component } from 'react';
import { Icon, Button, Modal } from 'semantic-ui-react';
// import Chessground from 'react-chessground';
import { Chessground } from 'chessground';
import { resolve } from 'path';

class ChessBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.boardLayout  = (event) => this.boardRender(event, 'chess-board-layout');
        this.boardFullScreenLayout = (event) => this.boardRender(event, 'board-fullscreen-view');
        this.handleFullScreen = this.handleFullScreen.bind(this);
        this.boardRender = this.boardRender.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleBoardChange = this.handleBoardChange.bind(this);
        this.ground = null
    }

    handleBoardChange() {
        this.props.handleValidFEN(this.ground.getFen());
    }

    boardRender(event, boardMountID) {
        console.log(this.props.fen, "inside chess board component");
        console.log(event, boardMountID);
        if(boardMountID === 'board-fullscreen-view') {
            var elem = document.getElementById(boardMountID); 
            console.log('board-fullscreen-view', elem);
        } else if(boardMountID === 'chess-board-layout') {
            var elem = document.getElementById(boardMountID); 
            console.log('chess-board-layout', elem);
        }
        console.log(elem);
        var config = {
            fen: this.props.fen,
            coordinates: false,
            resizable: true,
        }
        this.ground = Chessground(elem, config); 
        // var ground = Chessground(elem, config);
    }

    handleClose() {
        console.log('onclose call');
        window.removeEventListener("resize", this.boardFullScreenLayout);
        this.boardRender(null, 'chess-board-layout');
        window.addEventListener("resize", this.boardLayout);
        this.setState({
            open: false
        });
    }

    handleFullScreen() {
        this.setState(state => ({
            open: !state.open,
        }), () => {
            window.removeEventListener("resize", this.boardLayout);
            window.addEventListener("resize", this.boardFullScreenLayout);
            this.boardRender(null, 'board-fullscreen-view');
        }
        );
    }

    componentDidMount() {
        this.boardRender(null, 'chess-board-layout');
        window.addEventListener("resize", this.boardLayout);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.fen!= this.props.fen) {
            this.boardRender(null, 'chess-board-layout');
        }

    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.boardFullScreenLayout);
        window.removeEventListener("resize", this.boardLayout);
    }

    render() {
        return (
            <React.Fragment>
                <div id='chess-board-section' onKeyDown={this.toggleFullScreen}>
                    <div className='board-action-section'>
                        <div onClick={this.props.toggleBoardActive} className='board-back-button'>
                            <Icon name='arrow left' />Back
                        </div>
                        <div className='board-fullscreen-modal'>
                            <Button onClick={this.handleFullScreen} color='orange'>Full Screen</Button>
                            <Modal dimmer="dimmer" size="large" open={this.state.open} onClose={this.handleClose}>
                                <Modal.Header>Board Preview</Modal.Header>
                                <Modal.Content>
                                    <div id='board-fullscreen-view'>
                                    </div>
                                </Modal.Content>
                            </Modal>
                        </div>
                    </div>
                    <div onClick={this.handleBoardChange} id='chess-board-layout'>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ChessBoard;
