import React from "react";
import "./Skill.css"
import {FaHtml5} from "react-icons/fa";
import {AiFillStar , AiOutlineStar} from "react-icons/ai";




function Skill (props) {

    return (
        <div className="skillBox">
            <div className="iconWrap">
                {props.icon}
            </div>
            <div className="starBox">
                {props.fillStars.map(x => (x)?<AiFillStar className="star" />:<AiOutlineStar className="star" />)}
            </div>
        </div>
    )
}



export default Skill;