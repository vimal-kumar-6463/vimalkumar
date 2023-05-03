import React from "react";
import Skill from "./Skill.jsx";
import "./SkillPage.css";

function SkillPage(props) {

    return (
        <div className="ultiAllSkills" id="skills">
        <div className="topGap"></div>
        <h2 className="skillTitle">SKILLS</h2>
        <div className="allSkills">
            {props.skills.map((x , index) => <Skill key={index} icon={x.icon} fillStars={x.fillStars} />)}
        </div>
    </div>
    )
}


export default SkillPage;