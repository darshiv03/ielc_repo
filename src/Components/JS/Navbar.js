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
}

export default function NavBar() {
    const [active, setActive] = useState(false);

    return (
        <div className = "navbar-container">
            <ColorIcon source="navbar/colored-logo.svg" color="white" height="40px" width="156px"></ColorIcon>
            <div className='navbar-right'>
                <div className={`navbar-links ${active? 'active' : null}`}>
                    <Link style={linkStyling}><p className='navbar-link'>About Us</p></Link>
                    <DropDownMenu></DropDownMenu>
                    <Link style={linkStyling}><p className='navbar-link'>Register a Student</p></Link>
                    <Link style={linkStyling}><p className='navbar-link'>Become a Tutor</p></Link>
                    <Link style={linkStyling}><p className='navbar-link'>Contact Us</p></Link>
                </div>
                <div className={`navbar-register-button-div`}><Link><Button>Register</Button></Link></div>
                <div className={`sidebar-menu-button`} onClick={() => setActive(!active)}>
                    <ColorIcon 
                        source={`navbar/${!active? "hamburger.svg" : "cross.svg"}`} 
                        color="white" 
                        height="35px" 
                        width="35px">
                    </ColorIcon>
                </div>
            </div>
        </div>
    )
}


