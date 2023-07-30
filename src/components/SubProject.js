import React, { Component } from "react";

class SubProject extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <>
            <div>
                <figure className="imghvr-reveal-right" style={{backgroundColor:"#e31b6d", border:"2px solid white"}}>
                    <img src={this.props.img} className="img-fluid"/>
                    <figcaption style={{backgroundColor:"#e31b6d"}}>
                        <h3>{this.props.name}</h3>
                        <p>{this.props.desc}</p>
                    </figcaption>
                    <a href={this.props.link}></a>
                </figure>
            </div>
        </>
    }
}

export default SubProject