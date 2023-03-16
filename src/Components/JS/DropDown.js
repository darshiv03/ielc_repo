import React from 'react';
import "../CSS/DropDown.css"
import programInfo from '../../data/programInfo';
import { useState } from 'react';

export default function DropDown() {
  const [dropdown, setDropdown] = useState(false);

    return (
        <div>
            <button className='programs'
          type="button" aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}
          >
            Programs
          </button>
            <ul className ={`dropdown ${dropdown ? "show" : ""}`}>
                {programInfo.map((programInfo, index) => (
                    <li key={index} className="menu-items">
                        <a href ={programInfo.url}>Grade {programInfo.grade}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};