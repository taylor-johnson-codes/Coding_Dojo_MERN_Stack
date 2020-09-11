// Cleaning up example

import React, { useEffect, useState } from 'react';

export default () => {
    const [time, setTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const int = setInterval(
            () => setTime(new Date().toLocaleString()),
            1000
        );

        return function clearInt() {
            clearInterval(int);
        }
    }, []);

    return (
        <div>Current Time: {time}</div>
    );
}

/*
Let's go through what's happening in the body of our useEffect callback. We create an int variable and assign it to 
the result of invoking the setInterval function. We pass setInterval two arguments: (1) an anonymous function which 
updates the time with the current time, and (2) the interval, which is 1000 milliseconds, or 1 second. We then return 
a function called clearInt (could also be an anonymous or even an arrow function) which clears the interval. If we 
didn't do this, our application would continue to run the setInterval callback at 1 second intervals until the user 
either did a hard refresh or left the app entirely.
*/