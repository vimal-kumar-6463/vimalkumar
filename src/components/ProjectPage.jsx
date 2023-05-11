import React from "react";
import Project from "./Project.jsx";
import "./ProjectPage.css"


function ProjectPage (props) {
    
    return (
            <div className="ultiAllProjects" id="projects">
                <div className="topGap"></div>
                <h2 className="ProTitle">PROJECTS</h2>
                <div className="allProjects">
                    {props.projects.map((x , index) => <Project key={index} title={x.title} thumbNail={x.thumbNail} description={x.description} 
                                                        gitHUBLink={x.gitHUBLink}/>)}
                </div>
            </div>

    )
}


export default ProjectPage;