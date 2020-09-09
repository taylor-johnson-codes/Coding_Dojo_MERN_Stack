// With ES7 React extension, can use rafce snippet
// rafce = react arrow function component with export

import React, { useState } from 'react'

// The whole thing below is a function so it doesn't have a constructor because constructors are for classes, not functions

const EventCard = props => {
    const {index, event, guestAdd} = props;
    const {name, date, guests, description} = event;

    return (
        <li>
            <ul>
                <li>Event Name: {name}</li>
                <li>Event Date: {date}</li>
                <li>Number of Guests: {guests}</li>
                <li>Event Description: {description}</li>
                <li><button onClick={() => guestAdd(index)}>Add Guest</button></li>
            </ul>
        </li>
    )
}

export default EventCard