import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import Chessground from 'react-chessground';

class ChessBoard extends Component {
    constructor(props) {
        super(props);
        this.handleFullScreen = this.handleFullScreen.bind(this);
    }

    handleFullScreen() {
        this.setState(state => ({
            fullScreen: !state.fullScreen,
        }));
        var elem = document.getElementById("chess-board-section");
        (function openFullscreen() {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
        })();
    }
    render() {
        return (
            <React.Fragment>
                <div id='chess-board-section' onKeyDown={this.toggleFullScreen}>
                    <div onClick={this.props.toggleBoardActive} className='board-back-button'>
                        <Icon name='arrow left' />Back
                    </div>
                    <Chessground resizable={true} fen={this.props.fen} coordinates={false} />
                </div>
            </React.Fragment>
        );
    }
}

export default ChessBoard;
