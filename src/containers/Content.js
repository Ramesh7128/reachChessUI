import React, { Component } from 'react';
import 'react-chessground/dist/styles/chessground.css';
import FenInput from './FenInput';
import ChessBoard from './ChessBoard';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
// import chessground from 'react-chessground/chessground';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validFEN: '',
            boardActive: false,
            changeFen: '',
        }
        this.handleValidFEN = this.handleValidFEN.bind(this);
        this.toggleBoardActive = this.toggleBoardActive.bind(this);
        this.writeStore = this.writeStore.bind(this);
    }

    toggleBoardActive() {
        this.setState(state => ({
            boardActive: !state.boardActive
        }))
    }

    writeStore() {
        var db = firebase.firestore();
        console.log(this.state.validFEN);
        db.collection("game").doc("231232").set({
            fen: this.state.validFEN
        })
            .then(function (docRef) {
                console.log('success');
            })
            .catch(function (error) {
                console.log('error');
            });

        db.collection("game").doc("231232")
            .onSnapshot((doc) =>  {
                console.log('changed data', doc.data().fen);
                this.setState({
                    validFEN: doc.data().fen
                });
            });
    }

    handleValidFEN(fenValue) {
        this.setState({
            validFEN: fenValue,
            boardActive: true
        }, () => this.writeStore());
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
                {this.state.validFEN}
            </div>
        );
    }
}

export default Content;