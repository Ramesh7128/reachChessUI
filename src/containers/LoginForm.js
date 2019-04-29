import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { authLogin, authLogout, googleAuthLogin } from '../actions/authActions';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
// import firebase from 'firebase';



class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGoogleSignIn = this.handleGoogleSignIn.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        return
        // var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // var uiConfig = {
        //     callbacks: {
        //         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        //             return true;
        //         },
        //         uiShown: function () {
        //             // The widget is rendered.
        //             // Hide the loader.
        //             document.getElementById('loader').style.display = 'none';
        //         }
        //     },
        //     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        //     signInFlow: 'popup',
        //     signInSuccessUrl: '<url-to-redirect-to-on-success>',
        //     signInOptions: [
        //         // Leave the lines as is for the providers you want to offer your users.
        //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //         firebase.auth.GithubAuthProvider.PROVIDER_ID,
        //         firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //         firebase.auth.PhoneAuthProvider.PROVIDER_ID
        //     ],
        //     // Terms of service url.
        //     tosUrl: '<your-tos-url>',
        //     // Privacy policy url.
        //     privacyPolicyUrl: '<your-privacy-policy-url>'
        // };
    }

    handleGoogleSignIn() {
        this.props.googleLoginAuth()
            .then(this.props.history.push('/home'));
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.LoginAuth(this.state.email, this.state.password);
    }

    handleInput(event) {
        let key = event.target.name;
        let value = event.target.value;
        let newState = {};
        newState[key] = value;
        this.setState(newState);
    }

    render() {

        if (this.props.isAuthenticated) return <Redirect to="/home" />;
        return (
            <div className='login-box-container'>
                <div className='login-box-wrapper'>
                    <div className='login-title'>Login</div>
                    <div className="login-item">
                        <form onSubmit={this.handleSubmit} className="form form-login">
                            <p className='error-msg'>{this.props.authError}</p>
                            <div className="form-field">
                                <label className="user" htmlFor="login-email"><span className="hidden">EmailID</span></label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder='email'
                                    onChange={this.handleInput}
                                />
                            </div>
                            <div className="form-field">
                                <label className="lock" htmlFor="login-password"><span className="hidden">Password</span></label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='password'
                                    onChange={this.handleInput}
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    type="submit"
                                    value="LOG IN"
                                    onSubmit={this.handleSubmit}
                                />
                            </div>
                        </form>
                    </div>
                    <div id="firebaseui-auth-container">
                    </div>
                    <Button type='submit' onClick={this.handleGoogleSignIn}>Add Gsign</Button>
                    <div className='signup-link'>
                        <Link to="/signup"><div>Signup</div></Link>
                    </div> */}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        LoginAuth: (email, password) => dispatch(authLogin(email, password)),
        googleLoginAuth: () => dispatch(googleAuthLogin()),
        LogoutAuth: () => dispatch(authLogout())
    }
}

const mapstateToProps = (state) => {
    return {
        authError: state.authReducer.authError,
        isAuthenticated: state.authReducer.isAuthenticated,
        authLoading: state.authReducer.isAuthenticated
    }
}

LoginForm = connect(mapstateToProps, mapDispatchToProps)(LoginForm);
export default LoginForm;

