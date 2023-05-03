import React from 'react';
import {useState ,useEffect} from "react";
import {Link , NavLink} from "react-router-dom";
import './NavBar.css';
import {GiMonkey} from "react-icons/gi";
import Menu from "../assets/menu.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';


function NavBar(props) {
  
  const [menuDrop , setMenuDrop] = useState(false);
  const [isActivated , setIsActivated] = useState(false);
  const [isClosed , setIsClosed] = useState(true);

  function handleMenu(){
    setIsActivated(!isActivated);
    setIsClosed(!isClosed);
  }

  return (
    <div className="App" id="home" >
      <header className="App-header">
      <nav class="nav-bar">
    <GiMonkey className="logo" />
    {isClosed?<GiHamburgerMenu className="menu" onClick={handleMenu} />:<MdClose className="menu" onClick={handleMenu} />}
    <ul class={(isActivated)?"nav-bar-nav activated":"nav-bar-nav"}>
        <li className="nav-item"><a href="#home" className="Nav-anchors">{props.home}</a></li>
        <li className="nav-item"><a href="#about" className="Nav-anchors">{props.about}</a></li>
        <li className="nav-item"><a href="#skills" className="Nav-anchors">{props.skills}</a></li>
        <li className="nav-item"><a href="#blog" className="Nav-anchors">{props.blog}</a></li>
    </ul>
    </nav>
      </header>
      
    </div>
  );
}

export default NavBar;
