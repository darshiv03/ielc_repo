import React from 'react';
import "../CSS/TutorTemplate.css";

export default function TutorTemplate({img, name, grade}) {

    return (
        <div className= "card2">
            <img src = {img} alt="Logo" />
            <p className="p-medium">{name}</p>
            <p className="p-small-grey">Grade: {grade}</p>
        </div>
        
    )
}