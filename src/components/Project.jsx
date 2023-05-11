import React from "react";
import "./Project.css"
import thumbNail from "../assets/hallticketPage.png"



function Project (props) {

    const style = {
        backgroundImage : `url(${props.thumbNail})`
    }
    return (
        <div className="projectContainer">
            <div className="thumbNail" style={style} ><a class="gitlink" href={props.gitHUBLink} target="_blank">
            </a></div>
            <div className="descriptionBox">
                <h1 className="projectTitle">{props.title}</h1>
                <p className="projectDescription">{props.description}</p>
            </div>
        </div>
    )
}



export default Project;