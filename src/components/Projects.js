import { Component } from "react";
import SubProject from './SubProject'
import kaimshare from '../kaimshare.png'
import Education from "./Education";
import Language from "./Language";
import Extra from "./Extra";

class Projects extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        const desc = {
            kaimshare : 'Created a file sharing website to transfer files without'+
            'requiring any login information.'+
            '\nEnhanced loading time with the LCP (Largest Contentful Paint) as 950ms.',
            quiddle : 'Built a functional real-time messaging application using modern technology.'+
            'Designed for the sharing of messages, images, and files.',
            ditto : 'Designed and built an interactive and flexible website for stock photos sharing.'+
            'Implemented pagination and improved loading of pages with 20%.',
            crosso : "This is crosso to play.",
            letzdo : "This is letzo to store todo list."
        }
        const links = {
            kaimshare : "https://kaim-share.web.app",
            quiddle : "https://the-quiddle.web.app",
            ditto : "https://the-ditto.web.app",
            crosso : "https://cross-o.web.app",
            letzdo : "https://letz-do.web.app"
        }
        return <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1>Projects</h1>
                        <div className="row">
                            <div className="col-12">
                                <SubProject name="KaimShare" img={kaimshare} desc={desc.kaimshare} link={links.kaimshare}/>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6"><SubProject name="Quiddle" img={kaimshare} desc={desc.quiddle} link={links.quiddle}/></div>
                                    <div className="col-6"><SubProject name="Ditto" img={kaimshare} desc={desc.ditto} link={links.ditto}/></div>
                                    <div className="col-6"><SubProject name="Crosso" img={kaimshare} desc={desc.crosso} link={links.crosso}/></div>
                                    <div className="col-6"><SubProject name="LetzDo" img={kaimshare} desc={desc.letzdo} link={links.letzdo}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Education/>
                        <br/>
                        <Language/>
                        <br/>
                        <Extra/>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Projects