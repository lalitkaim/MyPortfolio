import React, { Component } from 'react';
import About from './About';
import Copyright from './Copyright';
import Landing from './Landing';
import Navbar from './Navbar';
import Switch from "react-switch";

class Portfolio extends Component {

    constructor(props){
        super(props)
        this.state={
            color:[],
            isDark:false
        }
    }

    handleChange = ()=>{
        this.setState({ isDark:!this.state.isDark}, ()=>{
            this.state.isDark 
            ? document.body.style.backgroundColor = "#151e29"
            : document.body.style.backgroundColor = "rgb(233, 233, 220)"
        });
    }

    render() {
        return (
            <div>
                <label style={{margin:"10px", position:"absolute", zIndex:"1000"}}>
                    <Switch onChange={this.handleChange} checked={this.state.isDark} onColor="#525252" offColor="#ffffff" offHandleColor="#000000" onHandleColor="#ffffff"/>
                </label>
                <Navbar/>
                <Landing/>
                <About isDark={this.state.isDark}/>
                <br/>
                <Copyright isDark={this.state.isDark}/>
            </div>
        );
    }
}

export default Portfolio;