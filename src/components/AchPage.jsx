import React from "react";
import Ach from "./Ach.jsx";
import "./AchPage.css";


function AchPage(props) {

    return (
        <div className="ultiAllAchs" id="achievements">
        <h2 className="AchTop">ACHIEVEMENTS</h2>
        <div className="allAchs">
            {props.Achs.map((x , index) => <Ach key={index} img={x.img} title={x.title} date={x.date} description={x.description} />)}
        </div>
    </div>
    )
}


export default AchPage;