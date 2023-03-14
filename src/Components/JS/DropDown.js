import React from 'react';
import "../CSS/DropDown.css"
import programInfo from '../../data/programInfo';
import { useState } from 'react';

export default function DropDown({dropdown}) {

    return (
        <div>
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