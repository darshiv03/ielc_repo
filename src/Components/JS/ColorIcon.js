import React from 'react';

export default function ColorIcon({source, width, height, color }) {
    // SOURCE: put src in public and put the name as source: Instagram.jpg
    // SIZE: digit + "px" OR "rem" (the inputted prop MUST have a suffix)
    // COLOR: can be a string or a hex code
    return (
        <>
            <div 
                style={{
                    width: `${width}`,
                    height: `${height}`,
                    backgroundColor: `${color}`,
                    WebkitMask: `url(/${source}) no-repeat center / contain`
                }}
            />
        </>
    )
}