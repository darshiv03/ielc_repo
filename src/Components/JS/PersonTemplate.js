import React from 'react';

export default function PersonTemplate({name, position}) {

    return (
        <div>
            <img src = {"/user.png"} alt="Logo" />
            <p className="p-medium">{name}</p>
            <p className="p-small-grey">{position}</p>
            <div className="description">
                <p className = "p-small">Leorem ipsum,</p>
                <p className = "p-small">Leorem ipsum,</p>
            </div>
        </div>
        
    )
}