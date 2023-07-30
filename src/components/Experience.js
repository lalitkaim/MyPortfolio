import classes from '../style/Experience.module.css'
import React from "react";

function Experience(){
    return <>
            <div className="section myBlock p-4" id="work">
                <h2>Work Experience</h2>
                <hr/>
                <div>
                    <h5><a href="https://www.qualcomm.com/" target="_blank" style={{textDecoration:"none", color:"#e31b6d"}}>QUALCOMM </a>&nbsp;
                        <div className={classes.vl}></div>
                        &nbsp;<label className={classes.companyName}>Software Engineer (Sep'22-Present), Hyderabad</label>
                    </h5>
                    <p style={{margin:"0px"}}>Working on GSM technology, collaborated with cross-functional teams to deploy enhanced encryption protocols,
                     ensuring compliance with the latest security standards and providing a more secure communication environment for users.</p>
                    <p><b>Environment : </b> C, Source Insight, Perfoce, GSM Protocol Stack</p>
                </div>
                <br/>
                <div>
                    <h5><a href="https://www.cognam.com/" target="_blank" style={{textDecoration:"none", color:"#e31b6d"}}>COGNAM</a>&nbsp;
                        <div className={classes.vl}></div>
                        &nbsp;<label className={classes.companyName}>Software Engineer (July'22-Sep'22), New Delhi</label>
                    </h5>
                    <p style={{margin:"0px"}}>Worked on Java Back-End, Spring Boot to create Field Analytics Application</p>
                    <p><b>Environment : </b> Java, Spring Boot, Git, Eclipse</p>
                </div>
                <br/>
                <div>
                    <h5><a href="https://www.intel.com/" target="_blank" style={{textDecoration:"none", color:"#e31b6d"}}>INTEL</a>&nbsp;
                        <div className={classes.vl}></div>
                        &nbsp;<label className={classes.companyName}>Software Engineering Intern (June'21-May'22), Bengaluru</label>
                    </h5>
                    <p style={{margin:"0px"}}>
                    Test and Validate CPU for memory ordering and cache coherency to ensure product quality standards are met.
                    Debug and Enhance RIT (Random Instruction Tool) tool with 10% and perform tests and characterizations of prod-
                    uct features and performances.
                    </p>
                    <p><b>Environment : </b> C, Linux, Git, Vim</p>
                </div>
                <br/>
                {/* <div>
                    <h5>Intern&nbsp;
                        <div className={classes.vl}></div>
                        &nbsp;<label className={classes.companyName}>NinePages Tech-solutions Pvt. Ltd (June'19-Aug'19)</label>
                    </h5>
                    <p style={{margin:"0px"}}>
                    Designed many web pages and worked on dynamic functionality of websites.
                    Built mock designs and wire-frames for landing pages.
                    </p>
                    <p><b>Environment : </b> HTML, CSS, BootStrap, Javascript</p>
                </div> */}
            </div>
        </>
}

export default Experience