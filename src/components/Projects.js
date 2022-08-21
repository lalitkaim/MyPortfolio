import { Component } from "react";
import SubProject from './SubProject'

class Projects extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return <>
            <div>
                <div className="row">
                    <div className="col-12">
                        <SubProject/>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6"><SubProject/></div>
                            <div className="col-6"><SubProject/></div>
                            <div className="col-6"><SubProject/></div>
                            <div className="col-6"><SubProject/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Projects