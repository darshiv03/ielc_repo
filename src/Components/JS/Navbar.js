import React, { useState } from 'react';
import "../CSS/Navbar.css"
import { Link } from 'react-router-dom';

import ColorIcon from './ColorIcon';
import DropDownMenu from './DropDownMenu';
import Button from './Button'

const linkStyling = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    height: "100%",
}

export default function NavBar() {
    const [active, setActive] = useState(false);
    const closeMenu = () => {
        setActive(false);
      }
    return (
        <div className = "navbar-container">
            <ColorIcon source="navbar/colored-logo.svg" color="white" height="40px" width="156px"></ColorIcon>
            <div className='navbar-right'>
                <div className={`navbar-links ${active? 'active' : null}`}>
                    <div><Link onClick={closeMenu} to="/about-us" style={linkStyling}><p className='navbar-link'>About Us</p></Link></div>
                    <div className='drop-down-menu-outer-div'><DropDownMenu state={setActive}></DropDownMenu></div>
                    <div><Link onClick={closeMenu} to="/register" style={linkStyling}><p className='navbar-link'>Register a Student</p></Link></div>
                    <div><Link onClick={closeMenu} to="/volunteer" style={linkStyling}><p className='navbar-link'>Become a Tutor</p></Link></div>
                    <div><Link onClick={closeMenu} to="/contact-us" style={linkStyling}><p className='navbar-link'>Contact Us</p></Link></div>
                </div>
                <div className={`navbar-register-button-div`}><Link><Button fontWeight="500">Register</Button></Link></div>
                <div className={`sidebar-menu-button`} onClick={() => setActive(!active)}>
                    <div style={{height: "35px", width: "35px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    { active? 
                        <ColorIcon 
                            source={"navbar/cross.svg"}
                            color="white" 
                            height="30px" 
                            width="30px">
                        </ColorIcon> : 
                        <ColorIcon 
                            source={"navbar/hamburger.svg"} 
                            color="white" 
                            height="35px" 
                            width="35px">
                        </ColorIcon>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}


