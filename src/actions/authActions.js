import axios from 'axios';
import firebase from '../firebase';

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


export const initialAuth = () => {
    return dispatch => {
        firebase.auth().onAuthStateChanged((authenticated) => {
            authenticated? dispatch(authSuccess(authenticated.user))
                : dispatch(authLogout())
        });
    }
}