import React from 'react'

const WordColor = (props) => {
    return (
        <div>
            <h1 style={{ color: props.textColor, backgroundColor: props.bgColor }}>The number/word is: {props.numOrWord}</h1>
        </div>
    )
}

export default WordColor