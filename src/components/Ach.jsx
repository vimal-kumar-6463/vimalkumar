import React from "react";
import "./Ach.css";


function Ach(props) {

    return (
        <div className="AchContainer">  
            <div className="AchThumbNail">
              {props.img} 
            </div>
            
            <div className="Content">
                <div className="AchHeader">
                    <h2 className="AchTitle">{props.title}</h2>
                    <p className="AchDate">{props.date}</p>
                </div>
                <p className="AchDescription">{props.description}</p>
            </div>
        </div>
    )
}


export default Ach;