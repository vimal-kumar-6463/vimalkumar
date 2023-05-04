import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import EducationPage from "./components/EducationPage.jsx";
import NavBar from './components/NavBar.jsx';
import Profile from './components/Profile.jsx';
import Bio from './components/Bio.jsx';
import ProjectPage from "./components/ProjectPage.jsx";
import SkillPage from './components/SkillPage.jsx';
import AchPage from "./components/AchPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import {skills , achievements , projects , educations ,experience , email , phoneNo} from "../src/data.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <>
                <NavBar logo="LOGO" home="HOME" about="ABOUT" skills="SKILLS" projects="PROJECTS" achievements="ACHIEVEMENTS" />
                <Profile name="Vimal Kumar" jobProfile="Aspiring Full Stack Dev & Machine Learning Engineer"/>
                <Bio name="Vimal Kumar" jobProfile="Full Stack Dev & Machine Learning Engineer" bioData="I am Vimal Kumar , A 2nd Year B.Tech undergraduate student in the
                                                                                                         major of Computer Science and Engineering with specialization of Artificial 
                                                                                                         Intelligence & Machine Learning"/>
                <div className="gap" ></div>
                <EducationPage educations={educations}  experience={experience}/>
                <div className="gap" ></div>
                <SkillPage skills={skills}/>
                <div className="gap" ></div>
                <ProjectPage projects={projects}/>
                <div className="gap" ></div>
                <div className="gap" ></div>
                <AchPage Achs={achievements}/>
                <div className="gap" ></div>
                <ContactPage email={email} phoneNo={phoneNo}/>

</>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
