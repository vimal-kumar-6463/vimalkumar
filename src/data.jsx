import React from "react";
import {FaHtml5 , FaPython , FaReact , FaNodeJs} from "react-icons/fa";
import {DiCss3} from "react-icons/di";
import {SiJavascript} from "react-icons/si";
import {CgFigma} from "react-icons/cg"
import {TbSql} from "react-icons/tb";
import { SiDjango , SiMongodb } from "react-icons/si";

const educations = [
    {
      title: "Under Graduation",
      instituteName: "Bannariamman Institute of Technology",
      date: "2021-2025",
      description: "Persuing B.Tech undergraduation in Computer Science and Engineering(AIML) with the current cgpa of 8.6"
    }
     ,
    {
      title: "High Schooling [11th & 12th]",
      instituteName: "Vetri Vikaas Boys Hr Sec School",
      date: "2019-2021",
      description: "Completed high schooling with the score of 94% [Tamil Nadu State Board]"
    }
    ,
    {
      title: "Secondary Schooling [10th]",
      instituteName: "Vetri Vikaas Boys School",
      date: "2016-2019",
      description: "Completed secondary schooling with the score of 94% [Tamil Nadu State Board]"
    }
  
  ]  

  const experience = [
    {
      title: "Intern at TITAN COMPANY",
      instituteName: "TITAN COMPANY [HOSUR]",
      date: "JUNE 2022",
      description: "Successfully handled prototypes and made an UI for fastrack smartwatches using flutter/Kotlin"
    }

  
  ]   
  
  const projects = [
    {
      title : "calculator",
      description : "calculator using javaScript/Python"
    },
    {
      title : "Result/Hallticket Dist",
      description : "A web app it declare exam results"
    },
    {
      title : "Snake Game",
      description : "Just the Snake Game using python"
    },
    {
      title : "Ping-Pong Game",
      description : "Just the ping-pong game using python(turtle)"
    }
  ]
  
  
  const skills = [
    {
      icon : <FaHtml5 className="skillIcon"/> ,
      fillStars : [true,true,true,true,false]
    },
    {
      icon : <DiCss3 className="skillIcon"/> ,
      fillStars : [true,true,true,false,false]
    },
    {
      icon : <SiJavascript className="skillIcon"/> ,
      fillStars : [true,true,true,true,false]
    },
    {
      icon : <FaReact className="skillIcon"/> ,
      fillStars : [true,true,false,false,false]
    },
    {
      icon : <FaNodeJs className="skillIcon"/> ,
      fillStars : [true,true,true,false,false]
    },
    {
      icon : <FaPython className="skillIcon"/> ,
      fillStars : [true,true,true,true,false]
    },
    {
      icon : <SiDjango className="skillIcon"/> ,
      fillStars : [true,true,true,false,false]
    },
    // {
    //   icon : <CgFigma className="skillIcon"/> ,
    //   fillStars : [true,true,true,false,false]
    // },
    {
      icon : <TbSql className="skillIcon"/> ,
      fillStars : [true,true,true,true,false]
    },
    {
      icon : <SiMongodb className="skillIcon"/> ,
      fillStars : [true,true,true,false,false]
    }
  ]
  
  
  const achievements = [
    {
      img : <img src={require("./assets/bitshack.jpg")} alt="No img" className="AchImg"/>,
      title : "Won RS 5000/- in BIT'S HACK",
      date : "FEB 2023",
      description : "Winner in BIT'S HACK an Inter-College Hackathon conducted by Bannari Amman Institute of Technology"
    },
    {
      img : <img src={require("./assets/srikrishna.jpg")} alt="No img" className="AchImg"/>,
      title : "Runner in KRISHNECS",
      date : "AUG 2022",
      description : "2nd place in KRISHNECS a National Level Hackathon conducted by Sri Krishna College of Engneering and Technology coimbatore"
    }
  ]

  const email = "vimalkumar6463@gmail.com"

  const phoneNo = "+91 9087154145"


export {educations} ;
export {projects} ;
export {skills} ;
export {achievements} ;
export {experience};
export {email};
export {phoneNo};
