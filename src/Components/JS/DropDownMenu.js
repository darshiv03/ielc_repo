import React from 'react';
import "../CSS/DropDownMenu.css"
import programInfo from '../../data/programInfo';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorIcon from './ColorIcon';

export default function DropDownMenu({state}) {
  const [dropdown, setDropdown] = useState(false);
  const closeMenu = () => {
    setDropdown(false);
    state(false);
  }
    return (
        <div className="ddmenucontainer" style={{height: "fit-content", width: "100%", position: "relative"}}>
            <button className='programs'
              type="button" aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "16px"}}>
                  Programs
                  <ColorIcon source={dropdown? 'navbar/up-arrow.svg' : 'navbar/down-arrow.svg'} height={"9px"} width={"15px"} color={"var(--creme-white)"}/>
                </div>
            </button>
            <ul className ={`dropdown-menu ${dropdown ? "show" : ""}`}>
                {programInfo.map((programInfo, index) => (
                    <li key={index} className="menu-items">
                        <Link 
                          onClick={closeMenu} 
                          to={`/program/${programInfo.grade}`}
                          style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%"}}>
                          Grade {programInfo.grade}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};