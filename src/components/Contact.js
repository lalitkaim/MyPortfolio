import { Component } from "react";

class Contact extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const contact = {color : '#e31b6d', cursor:'pointer'}
        return <>
            <div className="section myBlock p-4" id="contact">
                <h2>Contact Us</h2>
                <p><i className="fa-solid fa-envelope"></i> <label style={contact}> kaim.lalit1234@gmail.com</label></p>
                <p><i className="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/lalitkaim" style={{textDecoration:"none"}}><label style={contact}>LinkedIn</label></a></p>
                <p><i class="fa-solid fa-message"></i> <a href="https://forms.gle/qGKajPByeJwBLgug8" style={{textDecoration:"none"}}><label style={contact}>Google Form</label></a></p>
            </div>
        </>
    }
}

export default Contact