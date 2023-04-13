import React from 'react';
import "../CSS/Components.css"
import ColorIcon from '../../Components/JS/ColorIcon';
export default function Components() {
    return (
        <div className='container'>
            <h1>Components</h1>
            <ColorIcon source="homepage/Pencil.svg" color="yellow" width={"86px"} height={"86px"}/>
        </div>
    )
}