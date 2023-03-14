import React from 'react';
import "../CSS/DropDown.css"
import programInfo from '../../data/programInfo';

export default function DropDown() {

    return (
        <div>
            <ul className="dropdown">
                {programInfo.map((programInfo, index) => (
                    <li key={index} className="menu-items">
                        <a href ={programInfo.url}>Grade {programInfo.grade}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};