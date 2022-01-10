import React, { cloneElement, Component } from 'react';
import classes from '../style/Landing.module.css'
import code from '../vid/code.mp4'

class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
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
                <video autoplay="autoplay" muted loop controls='' defaultMuted className={classes.myVideo}>
                    <source src={code} type="video/mp4"/>
                </video>
                <div className={classes.main1} id="lalitkaim">
                    <div className={classes.frontdiv}>
                        <h1>Hello, I'm <span className={classes.lalit}>Lalit</span>.</h1>
                        <h1>I'm a Programmer, I've no life.</h1>
                        <p><span className={classes.lalit}><b>Eat Sleep Code Repeat</b></span></p>
                        <div className={"wow fadeInUp "+classes.vmwdiv} data-wow-duration="1s" data-wow-delay="0s">
                            <a className={classes.vmw} id="vmw" href="#about">View my work&nbsp;
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