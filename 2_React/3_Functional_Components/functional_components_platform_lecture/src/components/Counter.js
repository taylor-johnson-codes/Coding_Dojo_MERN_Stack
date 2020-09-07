/* HOOKS
With hooks, we can define and set the state of a functional component.
A hook, generally speaking, is just a function, either built-in or custom, 
that allows you to "hook" in or use a certain piece of functionality. 

By calling the useState method, we have just defined two variables: state and setState.
We can access the current state via state and then change the state via setState. 
*/

/*
import React, { useState } from 'react';

const Counter = props => {
    const [state, setState] = useState({
        clickCount: 0
    });

    const handleClick = () => {
        setState({
            clickCount: state.clickCount + 1
        });
    }

    return (
        <div>
            { state.clickCount }
            <button onClick={ handleClick }>Click Me</button>
        </div>
    );
}

export default Counter;
*/


/*
NOTE: When invoking useState, we do not need to pass in an object. We can just pass in a 
primitive value and then update it accordingly. You will more commonly see useState implemented 
as in the following example:
*/

import React, { useState } from 'react';

const Counter = props => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            { count }
            <button onClick={ handleClick }>Click Me</button>
        </div>
    );
}

export default Counter;