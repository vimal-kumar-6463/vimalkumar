import React from "react";
import SocialMedia from "./SocialMedia.jsx";
import './Profile.css';
import {CgMouse} from "react-icons/cg";


function Profile(props) {

    return (
        <div className="profile">
            <div className="topGap"></div>
            <h1 className="welcomeMsg" >Hi I am <span className="welcomeName">{props.name}</span></h1>
            <h6 className="jobProfile1">{props.jobProfile}</h6>
            <SocialMedia/>
            <CgMouse class="scrollIcon"/>
        </div>
    )
}


export default Profile;