import React from 'react';
import "../CSS/Footer.css"
import ColorIcon from './ColorIcon';
import MailIcon from "./MailIcon.js";
import InstaIcon from "./InstaIcon.js";
import FacebookIcon from "./FacebookIcon.js";
import {Link} from 'react-router-dom';

export default function Footer() {

    return (
        <div class = "bod">
            <ColorIcon source="IELCLOGO.png" color="var(--textWhite)" width={"86px"} height={"55px"}/>
            <div className='learn-more-container'>
                <p className = "a">Learn More</p>
                <Link to="/about-us">About us</Link> 
                <Link to ="/register">Register A Student</Link>
                <Link to = "/">Become a Tutor</Link>
                <Link to = "/">Donate</Link>
            </div>
            
            <div className = "program-container">
                <p className = "a">Programs</p>
                <Link to="/program/1"> Grade 1</Link>
                <Link to="/program/2"> Grade 2</Link>
                <Link to="/program/3"> Grade 3</Link>
                <Link to="/program/4"> Grade 4</Link>
                <Link to="/program/5"> Grade 5</Link>
            </div>

            <div class ="icons">
                <a>{<MailIcon size={"2.3rem"} color={"var(--textWhite)"}/>}</a>
                <a>{<InstaIcon size={"2.3rem"} color={"var(--textWhite)"}/>}</a>
                <a>{<FacebookIcon size={"2.3rem"} color={"var(--textWhite)"}/>}</a>
            </div> 

            <div class = "footer">
                <p class = "c">
                Interactive Elementary Learning Center<br></br>
                Made by #include at Davis ©2023 
                </p>
            </div>       
        </div>
    )
}