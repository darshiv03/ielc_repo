import React from 'react';
import "../CSS/Footer.css"
import LogoIcon from "./LogoIcon.js";
import MailIcon from "./MailIcon.js";
import InstaIcon from "./InstaIcon.js";
import FacebookIcon from "./FacebookIcon.js";


export default function Footer() {

    return (
        <div class = "bod">
            
            <div class = "frame">
            <div class ="logo">
                {LogoIcon(50)}
            </div>
                <div class = "p1">
                    <p class = "a">Learn More</p>
                         <p>About us <br></br>
                        Register A Student<br></br>
                        Become a Tutor <br></br>
                        Donate</p>
                </div>
                
                <div class = "p2">
                    <p class = "a">Programs</p>
                    <p>Grade 1 <br></br>
                        Grade 2<br></br>
                        Grade 3 <br></br>
                        Grade 4 <br></br>
                        Grade 5 <br></br></p>
                </div>

                <div class ="icons">
                    {MailIcon(50)}
                    {InstaIcon(50)}
                    {FacebookIcon(50)}
                </div> 

                <div class = "footer">
                    <p class = "c">
                    Interactive Elementary Learning Center<br></br>
                    Made by #include at Davis ©2023 
                    </p>
                </div>

                
            </div>
        </div>
    )
}