import React, { Component } from 'react';

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='landingpage-section'>
                <div className='landingpage-wrapper'>
                    <div className='header-wrapper'>
                        <h1 className='header-bold'><span className='header-border'>ChessLang</span></h1>
                    </div>
                    <p className='description-section'>A one stop solution to master Chess under our watch.</p>
                    <h2 className='sub-header-bold'>Features offered</h2>
                    <ul className='description-section'>
                        <li>Personalised coaching with one to one tutor attention.</li>
                        <li>Providing tracking mechanism for you to learn from your earlier games.</li>
                        <li>Learn from some of the best teachers.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LandingPage;