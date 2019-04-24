import React, { Component } from 'react';
// import { Chessground } from 'chessground';
import { Icon, Button } from 'semantic-ui-react';
import Chessground from 'react-chessground';

class ChessBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth - 100,
            height: '',
            fullScreen: false
        }
        this.handleFullScreen = this.handleFullScreen.bind(this);
    }

    // updateDimensions() {
    //     let update_width = window.innerWidth - 100;
    //     let update_height = Math.round(update_width / 4.4);
    //     this.setState({ width: update_width, height: update_height });

    // }

    // componentDidMount() {
    //     this.updateDimensions();
    //     window.addEventListener("resize", this.updateDimensions.bind(this));
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(this.state.width, prevState.width);
    //     if (((this.state.width - prevState.width) > 5) || ((prevState.width - this.state.width) > 5)) {
    //         window.location.reload();
    //     }

    // }

    toggleFullScreen(event) {
        console.log(event.target);
        if (event.key == 'Enter') {
            this.setState(state => ({
                fullScreen: !state.fullScreen,
            }))
        }
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
                <div className='fullscreen-button'>
                    {!this.state.fullScreen &&
                        <Button onClick={this.handleFullScreen} color='orange'>FullScreen</Button>
                    }
                </div>

                <div id='chess-board-section' onKeyDown={this.toggleFullScreen}>
                    <div onClick={this.props.toggleBoardActive}>
                        <Icon name='arrow left' />Back
                    </div>
                    <Chessground resizable={true} fen={this.props.fen} coordinates={false} />
                </div>
            </React.Fragment>
        );
    }
}

export default ChessBoard;
