import classes from '../style/Experience.module.css'

function Experience(){
    return <>
            <div className="section myBlock p-4" id="work">
                <h2>Work Experience</h2>
                <hr/>
                <div>
                    <h5>Software Engineer&nbsp;
                        <div className={classes.vl}></div>
                        &nbsp;<label className={classes.companyName}>Cognam Technologies Pvt. Ltd. (July'22-Present)</label>
                    </h5>
                    <p style={{margin:"0px"}}>Working on Java Back-End, Spring Boot to create Field Analytics Application</p>
                    <p><b>Environment : </b> Java, Spring Boot, Git, Eclipse</p>
                </div>
                <br/>
                <div>
                    <h5>Intern&nbsp;
                        <div className={classes.vl}></div>
                        &nbsp;<label className={classes.companyName}>Intel Technology India Pvt. Ltd. (June'21-May'22)</label>
                    </h5>
                    <p style={{margin:"0px"}}>
                    Test and Validate CPU for memory ordering and cache coherency to ensure product quality standards are met.
                    Debug and Enhance RIT (Random Instruction Tool) tool with 10% and perform tests and characterizations of prod-
                    uct features and performances.
                    </p>
                    <p><b>Environment : </b> C, Linux, Git, Vim</p>
                </div>
                <br/>
                <div>
                    <h5>Intern&nbsp;
                        <div className={classes.vl}></div>
                        &nbsp;<label className={classes.companyName}>NinePages Tech-solutions Pvt. Ltd (June'19-Aug'19)</label>
                    </h5>
                    <p style={{margin:"0px"}}>
                    Designed many web pages and worked on dynamic functionality of websites.
                    Built mock designs and wire-frames for landing pages.
                    </p>
                    <p><b>Environment : </b> HTML, CSS, BootStrap, Javascript</p>
                </div>
            </div>
        </>
}

export default Experience