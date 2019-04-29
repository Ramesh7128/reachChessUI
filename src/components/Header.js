import React, { Component } from 'react';
import strategy from '../strategy.svg';
import Login from '../containers/Login';

function Header(props) {
    return (
        <div className='header-section'>
            <div className='logo'>
                    <img src={strategy} className='header-logo' alt='Kings' />
            </div>
            <div className='logo-text'>
                    <span>ChessLang</span> 
            </div>
            <Login />
        </div>
    )
}

export default Header;