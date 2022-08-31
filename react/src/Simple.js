import { useState, useEffect } from 'react'

const COLORS = ["green", "red", "purple", "pink", "blue", "yellow", "white"];

const Simple = () => {
    const [backgroundColor, setBackgroundColor] = useState('white')

    const flipColor = () => {
        const randomIndex = Math.floor(Math.random() * COLORS.length)
        const randomColor = COLORS[randomIndex]

        setBackgroundColor(randomColor)
    }

    useEffect(() => {
        document.body.style.background = backgroundColor
        console.log(backgroundColor)
    }, [backgroundColor])

    return (
        <main>
            <div className='container'>
                <h2> Background Color: <span className='color'> {backgroundColor} </span></h2>
                <button className='btn btn-hero' id='btn' onClick={flipColor}> Click Me</button>
            </div>
        </main>
    )
}

export default Simple;