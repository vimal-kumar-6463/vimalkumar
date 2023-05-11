import React, { useEffect } from "react";
import "./Bio.css";
import Aos from "aos";


function Bio (props) {

    useEffect(()=>{
       Aos.init({duration:1000})
    },{})

    return (
        <div className="container" id="about" >
            <div className="topGap"></div>
            <div className="innerContainer">
                <div className="profilePic" data-aos="fade-right"></div>
                <div className="bioContainer" data-aos="fade-left">
                    <div className="wrap">
                        <h1 className="name" >{props.name}</h1>
                        <h5 className="jobProfile" >{props.jobProfile}</h5>
                    </div>
                    <p className="bioData" >{props.bioData}</p>
                    <a href={props.resume} target="_blank" className="CV-Download" >Download CV</a>
                </div>
            </div>

        </div>

    )
}


export default Bio; 