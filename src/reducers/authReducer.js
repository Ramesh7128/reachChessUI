import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_LOGOUT,
} from '../actions/authActions';


const initialState = {
    isAuthenticated: false,
    authLoading: false,
    authSuccess: null,
    authError: null,
}

function authReducer(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                authLoading: true
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                authSuccess: action.payload,
                authError: null,
                authLoading: false
            }
        case AUTH_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                authLoading: false,
                authError: action.payload,
                authSuccess: null
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                authLoading: false,
                authError: null,
                authSuccess: null
            }
        default:
            return state;
    }
}

export default authReducer;