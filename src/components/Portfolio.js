import React, { Component } from 'react';
import Landing from './Landing';
import Navbar from './Navbar';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Landing/>
            </div>
        );
    }
}

export default Portfolio;