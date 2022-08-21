import classes from '../style/About.module.css'
import lalitkaim from '../lalitkaim.jpg'

function About(){
    const a = [95,70,80,70,80,70,90];
    return <>
        <div className="container mt-5 mb-4">
            <div className={"row mb-4"}>
                <div className="col-lg-8 col-md-7 col-sm-12 col-12 mb-4">
                    <h1>Lalit</h1>
                    <h3>Software Engineer</h3>
                    <p>I'm a software engineer specialised in frontend and backend development 
                    for complex scalable web apps. I write about software development on my blog. 
                    Want to know how I may help your project? Check out my project portfolio 
                    and online resume.</p>
                    <div>
                        {/* <p>kaim.lalit1234@gmail.com</p> */}
                        <button className="btn btn-info">View Resume</button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                    <img src={lalitkaim} className="img-fluid"/>
                </div>
            </div>
            <div>
                <h1>What I do?</h1>
                <p>I have more than 1 years' experience in building software, currently working at Cognam Technologies, New Delhi. 
                    Below is a quick overview of my main technical skill sets and technologies I use. 
                    Want to find out more about my experience? Check out my online <a href="#">resume</a> and project <a href="#">portfolio</a>.</p>
            </div>
            <div className="row mt-5">
                <div className={"col-lg-6 col-md-8 col-sm-12 "+classes.aboutMe}>
                    <h2>About Me</h2>
                    <div className="">
                        <p><b>Languages : </b>Java, C</p>
                        <p><b>Frameworks : </b>Spring Boot, Bootstrap</p>
                        <p><b>Libraries : </b>ReactJs</p>
                        <p><b>Tools : </b>Git, Bootstrap</p>
                        <p><b>Editors : </b>Eclipse, VS Code</p>
                        <p><b>Operating System : </b>Ubuntu, Linux, Windows</p>
                    </div>
                    <h5>Experience</h5>
                    <div>
                        <p><b>Total Exp.</b> 1+ Year</p>
                        <p><b>Currect Employer-</b> Cognam Technologies</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-12">
                    <h2>Skills</h2>
                    <div>
                        <label>Java</label>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width:a[0]+"%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div>
                        <label>Spring Boot</label>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width:a[1]+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div>
                        <label>C</label>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width:a[2]+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div>
                        <label>ReactJs</label>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width:a[3]+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div>
                        <label>BootStrap</label>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width:a[4]+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div>
                        <label>JavaScript</label>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width:a[5]+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div>
                        <label>HTML &amp; CSS</label>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width:a[6]+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default About;