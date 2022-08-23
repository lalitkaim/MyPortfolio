import React, { Component } from 'react';
import classes from '../style/Navbar.module.css'
import Switch from "react-switch";


function resizeHandler(){
    if(window.innerWidth>=992){
        document.getElementById("navBar").className="collapse navbar-collapse "+classes.navAnimation_1+" "+classes.navAnimation+" "+classes.btnDiv
    }
}

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            toggle : false,
            isDark:false
        }
    }
    
    toggleHander = ()=>{
        this.setState({toggle : !this.state.toggle})
    }

    handleChange = ()=>{
        this.setState({ isDark   : !this.state.isDark});
    }

    componentDidMount(){
        window.onresize = resizeHandler;
    }

    render() {
        const showNav = this.state.toggle
        return (
            <div className={"continer "+classes.topAnimation}>
                <nav className="navbar navbar-expand-lg navbar-light bgight">
                    <div className="container-fluid">
                        <label>
                        </label>
                        <button className="navbar-toggler" onClick={this.toggleHander}type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="navBar" className={"collapse navbar-collapse "+(showNav ? 'show ' : ' ')+(showNav ? classes.navAnimation_2 : classes.navAnimation_1)+" "+classes.navAnimation+" "+classes.btnDiv}>
                            <a className="btn">Home</a>
                            <a className="btn" href="#about">About</a>
                            <a className="btn" href="#skills">Skills</a>
                            <a className="btn" href="#work">Work</a>
                            <a className="btn" href="#resume">Resume</a>
                            <a className="btn" href="#blog">Blog</a>
                            <a className="btn" href="#contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;