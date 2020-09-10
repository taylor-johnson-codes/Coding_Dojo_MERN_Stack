import React from 'react';

const ColorDisplay = (props) => {
    const {color} = props;

    return (
        <div style={{ 
            background: color, 
            display: 'inline-block',
            height: '150px', 
            width: '150px', 
            marginRight: '5px' }}
        ></div>
    )
}

export default ColorDisplay;