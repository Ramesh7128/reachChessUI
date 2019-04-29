import React, { Component } from 'react';
import 'react-chessground/dist/styles/chessground.css';
import FenInput from './FenInput';
import ChessBoard from './ChessBoard';
import { db } from '../firebase';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validFEN: '',
            boardActive: false,
        }
        this.handleValidFEN = this.handleValidFEN.bind(this);
        this.toggleBoardActive = this.toggleBoardActive.bind(this);
        this.writeStore = this.writeStore.bind(this);
    }

    componentDidMount() {
        db.collection("game").doc("gameOne")
            .onSnapshot((doc) => {
                console.log('changed data', doc.data().fen);
                this.setState({
                    validFEN: doc.data().fen,
                });
            });
    }

    toggleBoardActive() {
        this.setState(state => ({
            boardActive: !state.boardActive
        }))
    }

    writeStore() {
        console.log(this.state.validFEN);
        db.collection("game").doc("gameOne").set({fen: this.state.validFEN})
            .then(function (docRef) {
                console.log(docRef)
                console.log('success');
            })
            .catch(function (error) {
                console.log('error');
            });
    }

    handleValidFEN(fenValue) {
        this.setState({
            validFEN: fenValue,
            boardActive: true
        }, () => this.writeStore());
    }

    render() {
        console.log(this.props.isAuthenticated, "is Authenticated");
        if (!this.props.isAuthenticated) {
            return (<Redirect to="/login" />);
        }
        else {
            return (
                <div className='content-section'>
                    {!this.state.boardActive &&
                        <FenInput handleValidFEN={this.handleValidFEN} />
                    }
                    {this.state.boardActive &&
                        <ChessBoard handleValidFEN={this.handleValidFEN} toggleBoardActive={this.toggleBoardActive} fen={this.state.validFEN} />
                    }
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

Content = connect(mapStateToProps)(Content);
export default Content;