import React, { Component } from 'react';
import classes from '../style/Navbar.module.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            toggle : false
        }
    }
    
    toggleHander = ()=>{
        this.setState({toggle : !this.state.toggle})
        console.log("lalit kaim");
    }

    render() {
        const showNav = this.state.toggle
        return (
            <div className={"continer "+classes.topAnimation}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" onClick={this.toggleHander}type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={"collapse navbar-collapse "+(showNav ? 'show ' : ' ')+(showNav ? classes.navAnimation_2 : classes.navAnimation_1)+" "+classes.navAnimation}>
                            <button className='btn'>Home</button>
                            <button className='btn'>About</button>
                            <button className='btn'>Service</button>
                            <button className='btn'>Work</button>
                            <button className='btn'>Resume</button>
                            <button className='btn'>Blog</button>
                            <button className='btn'>Contact</button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;