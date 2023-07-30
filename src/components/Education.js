import education from '../education.svg'
import React from "react";

function Education(){
    return <>
        <div className="section p-4 myBlock">
            <h2>Education</h2>
            <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-2 col-12">
                    <img src={education} className="img-fluid" width="30px"/>
                </div>
                <div className="col-lg-10 col-md-12 col-sm-10 col-12">
                    <h5 style={{display:"inline-flex"}}>M.Tech Computer Science</h5>
                    <p><a href="https://www.iitp.ac.in/" target="_blank" style={{color:"rgb(227, 27, 109)", textDecoration:"none"}}>Indian Institute of Technology Patna</a> (2020-2022)</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-2 col-12">
                    <img src={education} className="img-fluid" width="30px"/>
                </div>
                <div className="col-lg-10 col-md-12 col-sm-10 col-12">
                    <h5>B.Tech Computer Science</h5>
                    <p><label style={{color:"rgb(227, 27, 109)"}}>Sachdeva Institute of Technology, Mathura</label> (2016-2020)</p>
                </div>
            </div>
        </div>
    </>
}

export default Education