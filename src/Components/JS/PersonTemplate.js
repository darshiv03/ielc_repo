import React from 'react';

export default function PersonTemplate({img, name, position}) {

    return (
        <div>
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