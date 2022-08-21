import education from '../education.svg'

function Education(){
    return <>
        <div>
            <h1>Education</h1>
            <div className="row">
                <div className="col-lg-1 col-md-2 col-sm-1 col-2">
                    <img src={education} className="img-fluid"/>
                </div>
                <div className="col-lg-11 col-md-10 col-sm-11 col-10">
                    <h5 style={{display:"inline-flex"}}>M.Tech Computer Science</h5>
                    <p><label style={{color:"rgb(227, 27, 109)"}}>Indian Institute of Technology Patna</label> (2020-2022)</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-1 col-md-2 col-sm-1 col-2">
                    <img src={education} className="img-fluid"/>
                </div>
                <div className="col-lg-11 col-md-10 col-sm-11 col-10">
                    <h5>B.Tech Computer Science</h5>
                    <p><label style={{color:"rgb(227, 27, 109)"}}>Sachdeva Institute of Technology, Mathura</label> (2016-2020)</p>
                </div>
            </div>
        </div>
    </>
}

export default Education