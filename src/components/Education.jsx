import React from "react";
import "./Education.css";



function Education (props){

    return (
        <div className="EduContainer">
            <h2 className="title text" >{props.title}</h2>
            <div className="wraper">
                <div className="innerWraper">
                    <h3 className="instituteName text">{props.instituteName}</h3>
                    <p className="date text">{props.date}</p>
                </div>
                <div className="description text">{props.description}</div>
            </div>
        </div>
    )
}


export default Education ;