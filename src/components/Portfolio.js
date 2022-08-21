import React, { Component } from 'react';
import About from './About';
import Landing from './Landing';
import Navbar from './Navbar';
import Projects from './Projects';

class Portfolio extends Component {

    constructor(props){
        super(props)
        this.state={
            color:[]
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Landing/>
                <About/>
                <Projects/>
            </div>
        );
    }
}

export default Portfolio;