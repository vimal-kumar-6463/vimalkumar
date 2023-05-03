import React from "react";
import "./EducationPage.css";
import Education from "./Education.jsx";



function EducationPage(props) {

    return (
            <div className="ultiContainer">
                <div className="edu">
                    <h1 className="eduHeading">EDUCATIONS</h1>
                    <div className="eduDetails">
                        {props.educations.map((x,index) => <Education key={index} title={x.title} instituteName={x.instituteName} date={x.date} description={x.description}/>)}
                    </div>
                </div>
                <div className="line"></div>
                <div className="exp">
                    <h1 className="expHeading">EXPERIENCES</h1>
                    <div className="expDetails">
                        {props.experience.map((x,index) => <Education key={index} title={x.title} instituteName={x.instituteName} date={x.date} description={x.description}/>)}
                    </div>
                </div>

            </div>

    )
}


export default EducationPage;