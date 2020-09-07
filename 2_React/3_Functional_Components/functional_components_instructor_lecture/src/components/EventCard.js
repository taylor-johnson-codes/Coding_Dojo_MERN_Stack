// With ES7 React extension, can use rafce snippet
// rafce = react arrow function component with export

import React, { useState } from 'react'

// The whole thing below is a function so it doesn't have a constructor because constructors are for classes, not functions

const EventCard = props => {
    // useState has a snippet: const [state, setstate] = useState(initialState)
    const [name, setName] = useState(props.name);  // don't really need this if you don't plan on changing the item's state (i.e. a person's first name doesn't usually change)
    const [date, setDate] = useState(props.date);
    const [guests, setGuests] = useState(props.guests);
    const [description, setDescription] = useState(props.description);
    // taken from props and entered into state so it can be changed; props is read-only

    return (
        <div>
            <li>
                <ul>
                    <li>Event Name: {name}</li>
                    <li>Event Date: {date}</li>
                    <li>Number of Guests: {guests}</li>
                    <li>Event Description: {description}</li>
                    <li><button onClick={ () => setGuests(guests+1) }>Add Guest</button></li>
                </ul>
            </li>
        </div>
    )
}

export default EventCard