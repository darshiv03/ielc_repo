import React from 'react';
import "../CSS/InstaIcon.css"

export default function InstaIcon({ size, color }) {
    // SIZE: digit + "px" OR "rem" (the inputted prop MUST have a suffix)
    // COLOR: can be a string or a hex code

    return (
        <div style={{
            width: `${size}`,
            height: `${size}`,
            backgroundColor: `${color}` 
        }}
        class="logo2"/>
    )
}