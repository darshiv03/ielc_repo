import React from 'react';
import "../CSS/TeamTemplate.css";

export default function TeamTemplate({img, name, position}) {

    return (
        <div className= "card">
            <img src = {img} alt="Logo" />
            <p className="p-medium">{name}</p>
            <p className="p-small-grey">{position}</p>
            <div className="description">
                <p className = "p-small">Harsheen is a third year student who founded IELC to provide students a collaborative environment to learn critical reading comprehension and grammar skills that will be used by students throughout their educational journey. In her free time, Harsheen loves spending time with her family and baking with friends.</p>
            </div>
        </div>
        
    )
}