import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './Routes';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Content from './Content';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';
import LandingPage from './LandingPage';
import PrivateRoute from './PrivateRoute';
import { initialAuth } from "../actions/authActions";


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initialAuth();
  }

  render() {
    return (
      <Router>
        <div className='container-section'>
          <Header />
          <switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.HOME} component={Content} />
            <Route exact path={ROUTES.LOGIN} component={LoginForm} />
            <Route exact path={ROUTES.SIGNUP} component={SignUpForm} />
          </switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialAuth: () => dispatch(initialAuth())
  }

}

App = connect(null, mapDispatchToProps)(App);
export default App;
