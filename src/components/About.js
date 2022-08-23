import classes from '../style/About.module.css'
import lalitkaim from '../lalitkaim.jpg'
import lalit from '../lalitk.jpeg'
import Projects from './Projects';
import Education from './Education';
import Language from './Language';
import Extra from './Extra';
import Experience from './Experience';
import Contact from './Contact';
import Skill from './Skill';
import Blog from './Blog';

function About(props){
    const a = [95,70,80,70,80,70,90];

    if(props.isDark){
        document.body.style.color = "white"
        let x = document.getElementsByClassName("myBlock")
        for(let i=0;i<x.length;i++)
            x[i].style.backgroundColor="#2d2d2d"
    }
    else{
        document.body.style.color = "black";
        let x = document.getElementsByClassName("myBlock")
        for(let i=0;i<x.length;i++)
            x[i].style.backgroundColor="white"
    }
    return <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-8 col-md-7 col-sm-12 col-12 mb-4">
                    <div className="section p-4 myBlock" id="about">
                        <h2>Lalit</h2>
                        <h4>Software Engineer</h4>
                        <p>I'm a software engineer specialised in frontend and backend development 
                        for complex scalable web apps. I write about software development on my blog. 
                        Want to know how I may help your project? Check out my project portfolio 
                        and online resume.</p>
                        <div id="resume">
                            <a className="btn" style={{backgroundColor:"#e31b6d", color:"white"}} href="#">View Resume</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                    <div className="section myBlock p-4">
                        <img src={lalit} className="img-fluid"/>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <div className="section myBlock p-4">
                        <h2>What I do?</h2>
                        <p>I have more than 1 years' experience in building software, currently working at Cognam Technologies, New Delhi. 
                            Below is a quick overview of my main technical skill sets and technologies I use. 
                            Want to find out more about my experience? Check out my online <a href="#" style={{textDecoration:"none", color:"#e31b6d"}}>resume</a> and project <a href="#" style={{textDecoration:"none", color:"#e31b6d"}}>portfolio</a>.</p>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className={"col-lg-7 col-md-8 col-sm-12 "+classes.aboutMe}>
                    <div className="section p-4 myBlock">
                        <h2>About Me</h2>
                        <div>
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
                    <br/>
                    <Projects/>
                    <br/>
                    <Experience/>
                </div>
                <div className="col-lg-5 col-md-4 col-sm-12" id="skills">
                    <div className="section p-4 myBlock">
                        <h2>Skills</h2>
                        <Skill name="Java" width={a[0]}/>
                        <Skill name="Spring Boot" width={a[1]}/>
                        <Skill name="C" width={a[2]}/>
                        <Skill name="ReactJs" width={a[3]}/>
                        <Skill name="BootStrap" width={a[4]}/>
                        <Skill name="Javascript" width={a[5]}/>
                        <Skill name="HTML & CSS" width={a[6]}/>
                    </div>
                    <br/>
                    <div className="section">
                        <Education/>
                        <br/>
                        <Language/>
                        <br/>
                        <Extra/>
                        <br/>
                        <Blog/>
                        <br/>
                        <Contact/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default About;