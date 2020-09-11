import React from 'react'

const NumOrWord = (props) => {
    const type = isNaN(props.numOrWord) ? "word" : "number";

    return (
        <div>
            <h1>The {type} is: {props.numOrWord}</h1>
        </div>
    )
}

export default NumOrWord