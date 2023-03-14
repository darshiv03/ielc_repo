import React from 'react';
import "../CSS/Navbar.css"
import DropDown from './DropDown';
import { useState } from 'react';

export default function NavBar() {
  const [dropdown, setDropdown] = useState(false);

    return (
        <div>
          <button className='program-tester'
          type="button" aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}
          >
            Programs
          </button>
          <DropDown dropdown={dropdown}></DropDown>
        </div>
    )
}

