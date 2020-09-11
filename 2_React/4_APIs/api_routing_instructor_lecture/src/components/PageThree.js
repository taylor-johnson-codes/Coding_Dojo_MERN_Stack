import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router';

const PageThree = (props) => {
    // const [thingToShow, setThingToShow] = useState(props.thing);
    
    const {thing} = props;

    // checking to see if route parameter is a number or not
    useEffect(() => {
        if(isNaN(thing)){
            navigate('/');
        }
    }, [thing])

    return (
        <div>
            <h2>{thing}</h2>
        </div>
    )
}

export default PageThree