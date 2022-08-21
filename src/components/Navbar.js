import React, { Component } from 'react';
import classes from '../style/Navbar.module.css'

function resizeHandler(){
    if(window.innerWidth>=992){
        document.getElementById("navBar").className="collapse navbar-collapse "+classes.navAnimation_1+" "+classes.navAnimation+" "+classes.btnDiv
    }
}

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            toggle : false
        }
    }
    
    toggleHander = ()=>{
        this.setState({toggle : !this.state.toggle})
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
                        <a className="navbar-brand" href="#" style={{color: "rgb(227, 27, 109)"}}>Navbar</a>
                        <button className="navbar-toggler" onClick={this.toggleHander}type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="navBar" className={"collapse navbar-collapse "+(showNav ? 'show ' : ' ')+(showNav ? classes.navAnimation_2 : classes.navAnimation_1)+" "+classes.navAnimation+" "+classes.btnDiv}>
                            <button className="btn">Home</button>
                            <button className="btn">About</button>
                            <button className="btn">Service</button>
                            <button className="btn">Work</button>
                            <button className="btn">Resume</button>
                            <button className="btn">Blog</button>
                            <button className="btn">Contact</button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;