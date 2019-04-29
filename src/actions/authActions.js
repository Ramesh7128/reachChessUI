import axios from 'axios';
import firebase, { auth, provider } from '../firebase'
import { resolve } from 'path';
import { reject } from 'q';

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authStart = () => {
    return {
        type: AUTH_START
    }
}

export const authSuccess = (payload) => {
    return {
        type: AUTH_SUCCESS,
        payload: payload
    }
}

export const authFail = (payload) => {
    return {
        type: AUTH_FAILURE,
        payload: payload
    }
}

export const authLogout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_LOGOUT
    }
}


export const authSignUp = (email, password, username) => {
    return function (dispatch) {
        dispatch(authStart());
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user.user);
                dispatch(authSuccess(user.user));
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(authFail(error.message));
            });
    };
}

export const authLogin = (email, password) => {
    return function (dispatch) {
        dispatch(authStart());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user.user);
                dispatch(authSuccess(user.user))
            })
            .catch((error) => {
                console.log(error.message)
                dispatch(authFail(error.message));
            });
    }
}

export const googleAuthLogin = () => {
    return function (dispatch) {
        return new Promise(function (res, rej) {
            dispatch(authStart());
            auth.signInWithPopup(provider)
                .then((result) => {
                    console.log(result.user);
                    console.log(result.user.displayName);
                    dispatch(authSuccess(result.user));
                    resolve();
                })
                .catch(error => {
                    console.log(error.message);
                    reject();
                });
        })
    }
}
export const googleAuthLogout = () => {
    return function (dispatch) {
        auth.signOut()
            .then(() => {
                dispatch(authLogout());
            });
    }
}

export const initialAuth = () => {
    console.log('chelfjsljflsjfljlsfjlsjflj');
    return function (dispatch) {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(authSuccess(user));
            } else {
                console.log('Failure');
            }
        });
        // auth.onAuthStateChanged((user) => {
        //     if (user) {
        //         console.log(user);
        //     }
        // });
    }
}
