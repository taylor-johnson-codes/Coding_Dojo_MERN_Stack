import React, {useState} from 'react'
import EventCard from './EventCard'

const Form = props => {
    const [event, setEvent] = useState({
        name: '',
        date: '',
        guests: 0,
        description: ''
    })

    const changeHandler = e => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            {/* taking info from state and passing it to EventCard */}
            <EventCard name={event.name} date={event.date} guests={event.guests} description={event.description}/>

            {/* Don't want to redirect form with an action because we don't want the page to reload */}
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={ e => changeHandler(e) }/>
                <br/>

                <label htmlFor="date">Date: </label>
                <input type="text" name="date" onChange={ e => changeHandler(e) }/>
                <br/>

                <label htmlFor="guests">Guests: </label>
                <input type="text" name="guests" onChange={ e => changeHandler(e) }/>
                <br/>

                <label htmlFor="description">Description: </label>
                <input type="text" name="description" onChange={ e => changeHandler(e) }/>
                <br/>
            </form>
        </div>
    )
}

export default Form