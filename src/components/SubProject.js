import { Component } from "react";


class SubProject extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <>
            <div>
                <figure className="imghvr-reveal-right">
                    <img src={this.props.img} className="img-fluid"/>
                    <figcaption>
                        <h1>{this.props.name}</h1>
                        <p>{this.props.desc}</p>
                    </figcaption>
                    <a href={this.props.link}></a>
                </figure>
            </div>
        </>
    }
}

export default SubProject