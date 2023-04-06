import React from 'react';
import "../CSS/Header.css"


export default function Header({ backgroundImage, txt, weeks, hours}){

    return (
        <div className='main_container' style = {{backgroundImage : `url(${backgroundImage})`}}>

            <h1>{txt}</h1>
            <div className = "weeks_hours">
                <p>{weeks}</p>
                <p>{hours}</p>
            </div>
            
        
        </div>
    )
}