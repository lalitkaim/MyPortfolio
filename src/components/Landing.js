import React, { cloneElement, Component } from 'react';
import classes from '../style/Landing.module.css'
import first from './../first.jpg';

class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className='container' style={{position:"relative"}}>
                <div className={classes.circle}></div>
                <div className={classes.oval}></div>
                <div className={'row '+classes.direction}>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{alignSelf:"center"}}>
                        <div>
                            <p>Welcome</p>
                            <h1>I'm Lalit Kaim</h1>
                            <p>m different categories like argumentative essays, essays on technology, environment essays for students from 5th, 6th, 7th, 8th grades. Following list of essay topics are for all – from kids to college students. </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{padding:"30px"}}>
                        <img className={'img-fluid '+classes.image} style={{position:"relative", zIndex:"-10"}} src={first} alt="first"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;