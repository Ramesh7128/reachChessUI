import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header' 
import Content from './Content.js'

class App extends Component {
  render() {
    return (
      <div className='container-section'>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
