import { useState, useEffect } from 'react'

const HEX_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const Hex = () => {
    const [backgroundColor, setBackgroundColor] = useState('#f1f5f8')

    const flipColor = () => {
        let hexColor = '#'

        for (let i=0; i < 6; i++) {
            hexColor += HEX_VALUES[Math.floor(Math.random() * HEX_VALUES.length)]
        }

        setBackgroundColor(hexColor)
    }

    useEffect(() => {
        document.body.style.background = backgroundColor
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

export default Hex;