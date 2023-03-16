import React from 'react';

export default function LogoIcon({size}) {

    return (
        <img
            style={{
                width:`${size}`, 
                height:`${size}`
            }}
            src={"/IELCLOGO.png"}
        />
    )
}