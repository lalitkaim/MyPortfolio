function Skill(props){
    return <>
        <div>
            <label style={{fontWeight:"300", fontSize:"15px"}}>{props.name}</label>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width:props.width+"%", backgroundColor:"#e31b6d"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </>
}

export default Skill