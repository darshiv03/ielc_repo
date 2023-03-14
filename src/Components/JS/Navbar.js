import React from 'react';
import "../CSS/Navbar.css"
import DropDown from './DropDown';

export default function NavBar() {

    return (
        <div>
          <div className='program-tester'>Programs
          <DropDown></DropDown>
          </div>
        </div>
    )
}

