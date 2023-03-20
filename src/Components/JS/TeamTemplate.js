import React from 'react';
import "../CSS/TeamTemplate.css";

export default function TeamTemplate({img, name, position}) {

    return (
        <div className= "card">
            <img src = {img} alt="Logo" />
            <p className="p-medium">{name}</p>
            <p className="p-small-grey">{position}</p>
            <div className="description">
                <p className = "p-small">Leorem ipsum,</p>
                <p className = "p-small">Leorem ipsum,</p>
            </div>
        </div>
        
    )
}