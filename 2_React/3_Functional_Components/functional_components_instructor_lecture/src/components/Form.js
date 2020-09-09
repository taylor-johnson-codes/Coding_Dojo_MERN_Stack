// With ES7 React extension, can use rafce snippet
// rafce = react arrow function component with export

import React, {useState} from 'react'
import EventCard from './EventCard'

const Form = props => {
    const {newEvent, setNewEvent, formSubmit} = props;
    // React props is packaged as a single object
    // state NOT being defined here, it's defined in App.js

    const [submitted, setSubmitted] = useState(false);  
    // How useState is defined in React: an array with 2 things: how to access state, method to update state
    // state IS being defined here

    const changeHandler = e => {
        setSubmitted(false);
        setNewEvent({
            ...newEvent,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();  // stops page from reloading
        formSubmit();  // will run the function in App.js
        setSubmitted(true);
    }

    return (
        <div>
            {/* Can't use conditional/if statements in React, use ternary operator instead */}
            {
                submitted ?
                    <p>Thank you for your submission!</p>  // if true
                    :
                    ''  // if false (can't have nothing after colon)
            }

            {/* taking info from state and passing it to EventCard */}
            {/* <EventCard name={event.name} date={event.date} guests={event.guests} description={event.description}/> */}

            {/* Don't want to redirect form with an action because we don't want the page to reload */}
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={changeHandler} value={newEvent.name}/>
                {/* value={} is for clearing the form data after submission */}
                <br/>

                <label htmlFor="date">Date: </label>
                <input type="text" name="date" onChange={changeHandler} value={newEvent.date}/>
                <br/>

                <label htmlFor="guests">Guests: </label>
                <input type="text" name="guests" onChange={changeHandler} value={newEvent.guests}/>
                <br/>

                <label htmlFor="description">Description: </label>
                <input type="text" name="description" onChange={changeHandler} value={newEvent.description}/>
                <br/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form