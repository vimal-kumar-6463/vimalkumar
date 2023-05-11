import React from "react";
import './SocialMedia.css';
import {BsLinkedin , BsGithub , BsInstagram , BsTwitter} from "react-icons/bs";
import {SiLeetcode} from "react-icons/si";


function SocialMedia (props) {

    return (
        <div className="SocialMediaContainer">
            <a href="https://www.linkedin.com/in/vimal-kumar-13b985225/" target="_blank" > <BsLinkedin className="LinkedinSO"/></a>
            <a href="https://github.com/vimal-kumar-6463" target="_blank" ><BsGithub className="GitHubSO"/></a>
            <a href="https://www.instagram.com/_vimal.kumar__/" target="_blank" ><BsInstagram className="InstagramSO" target="_blank" /></a>
            <a href="https://leetcode.com/VimalKumar6463/" target="_blank" ><SiLeetcode className="LeetcodeSO" target="_blank" /></a>
        </div>
    )
}


export default SocialMedia;