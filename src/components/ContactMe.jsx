import React from "react";
import "./ContactMe.css";
import {MdEmail} from "react-icons/md";
import {FaPhone} from "react-icons/fa";


function ContactMe (props) {

    return (
        <div className="contactContainer">
            <div className="contactEle"><MdEmail className="conIcon" /><p>EMAIL    : {props.email}</p></div>
            <div className="contactEle"><FaPhone className="conIcon" /><p>PHONE NO : {props.phoneNo}</p></div>
        </div>
        
    )
}


export default ContactMe ;