import React, { Component } from 'react';
import classes from '../style/Landing.module.css'
import code from '../vid/code.mp4'
import FrontProfile from './FrontProfile';

class Landing extends Component {
    constructor(props){
        super(props);
        // this.state = {
        // }
    }
    componentDidMount(){
        var a=document.getElementById('vmw');
        var b=document.getElementById('arw');
        a.onmouseover=()=>{
            b.style.transform="rotateZ(90deg)";
            b.style.transition="all 0.5s";
        }
        a.onmouseout=()=>{
            b.style.transform="rotateZ(0deg)";
            b.style.transition="all 0.5s";
        }
    }
    render() {
        return (
            <>
                <div className={classes.myVideoDiv}>
                    <video autoPlay="autoplay" muted loop controls='' defaultMuted>
                        <source src={code} type="video/mp4"/>
                    </video>
                </div>
                <div className={classes.main1} id="lalitkaim">
                    <div className={classes.frontdiv}>
                        <FrontProfile/>
                        <div className={"wow fadeInUp "+classes.vmwdiv} data-wow-duration="1s" data-wow-delay="0s">
                            <a className={classes.vmw} id="vmw" href="#about">About Me&nbsp;
                                <i className="fas fa-arrow-right" id="arw"></i> 
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Landing;