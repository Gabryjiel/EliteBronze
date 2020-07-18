import React, { useEffect, useState } from 'react'

export default function CanvasLine({gapId, direction}) {

    const [size, setSize] = useState({})

    useEffect(() => {
        const parentElement = document.getElementById(gapId)
        setSize({
            width: parentElement.clientWidth,
            height: parentElement.clientHeight
        })
    }, [])
    
    return (
        <svg preserveAspectRatio="none" viewBox={`0 0 ${size.width} ${size.height}`}>
            {direction === "down" ? 
                <polyline points={`0,${size.height / 2} ${size.width / 2},${size.height / 2} ${size.width / 2},${size.height - 5} ${size.width},${size.height - 5}`}/>
                :
                <polyline points={`0,${size.height / 2} ${size.width / 2},${size.height / 2} ${size.width / 2},${size.height * 0 + 5} ${size.width},${size.height * 0 + 5}`}/>
            }
        </svg>
    )
}