import React from "react";
import "./Project.css"




function Project (props) {

    return (
        <div className="projectContainer">
            <div className="thumbNail" ></div>
            <div className="descriptionBox">
                <h1 className="projectTitle">{props.title}</h1>
                <p className="projectDescription">{props.description}</p>
            </div>
        </div>
    )
}



export default Project;