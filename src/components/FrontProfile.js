import classes from '../style/FrontProfile.module.css'
import lalitkaim from "../lalitkaim.jpg"
import lalitkaim_1 from "../lalitkaim_1.jpg"
import github from "../github.svg"
import linkedin from "../linkedin.svg"
import hackerrank from "../hackerrank.svg"
import blogger from "../blogger.svg"
import email from "../email.svg"
import React from "react";


function FrontProfile(){
    return <>
        <div className={"row "+classes.myDiv}>
            <div className="col-lg-3 col-md-2 col-sm-1 col-2"></div>
            <div className="col-lg-6 col-md-8 col-sm-10 col-8">
                <div className="row">
                    <div className={"col-lg-4 col-md-6 col-sm-6 col-12 "+classes.myImageDiv}>
                        <img src={lalitkaim} className={"img-fluid"}/>
                        {/* <img src={lalitkaim_1} className={"img-fluid"}/> */}
                    </div>
                    <div className={"col-lg-8 col-md-6 col-sm-6 col-12 "+classes.myDetailDiv}>
                        <h1><span className={classes.lalit}>Lalit</span></h1>
                        <h1>Software Engineer</h1>
                        <div className={classes.profileIcons}>
                            <a href="https://www.github.com/lalitkaim" title="Github"><img src={github} className="img-fluid"/></a>
                            <a href="https://www.linkedin.com/in/lalitkaim" title="LinkedIn"><img src={linkedin} className="img-fluid"/></a>
                            <a href="mailto:kaim.lalit1234@gmail.com" title="Email"><img src={email} className="img-fluid"/></a>
                            <a href="https://www.hackerrank.com/lalitkaim" title="HackerRank"><img src={hackerrank} className="img-fluid"/></a>
                            <a href="https://lalitkaim.blogspot.com" title="Blogger"><img src={blogger} className="img-fluid"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-1 col-2"></div>
        </div>
    </>
}

export default FrontProfile