import React, { Component } from "react";
import SubProject from './SubProject'
import kaimshare from '../kaimshare.png'
import quiddle from '../quiddle.png'
import ditto from '../ditto.png'
import crosso from '../crosso.png'
import letzdo from '../letzdo.png'

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
            quiddle : 'Built a functional real-time messaging application using modern technology.',
            ditto : 'Designed and built an interactive and flexible website for stock photos sharing.',
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
                <div className="section myBlock p-4">
                    <h2>Projects</h2>
                    <div className="row">
                        <div className="col-12">
                            <SubProject name="KaimShare" img={kaimshare} desc={desc.kaimshare} link={links.kaimshare}/>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6"><SubProject name="Quiddle" img={quiddle} desc={desc.quiddle} link={links.quiddle}/></div>
                                <div className="col-6"><SubProject name="Ditto" img={ditto} desc={desc.ditto} link={links.ditto}/></div>
                                <div className="col-6"><SubProject name="Crosso" img={crosso} desc={desc.crosso} link={links.crosso}/></div>
                                <div className="col-6"><SubProject name="LetzDo" img={letzdo} desc={desc.letzdo} link={links.letzdo}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    }
}

export default Projects