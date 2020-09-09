import React, { useState } from 'react'
import './App.css';
import EventCard from './components/EventCard';
import Form from './components/Form';

function App() {
  const [allEvents, setAllEvents] = useState([]);

  // useState has a snippet: const [state, setstate] = useState(initialState)
  const [event, setEvent] = useState({
    name: '',
    date: '',
    guests: 0,
    description: ''
  });

  // to be able to call formSubmit function to interact with Form.js, the function needs to be passed in props
  const formSubmit = () => {
    // destructure allEvents and at end put the new event in the array
    setAllEvents([...allEvents, event]);
    // then clear event data from form
    setEvent({
      name: '',
      date: '',
      guests: 0,
      description: ''
    });
  }
    /* longer way of the destructuirng above:
    let events = allEvents;
    events.push(event);
    setAllEvents(events);
    */
  
  const guestAdd = (i) => {
    const events = allEvents;  // makes copy of allEvents from state 
    events[i].guests++;  // so we can pick a specific one and increment its guests
    setAllEvents(events);  // and set it back into state
  }

  return (
    <div>
      {/* map is an alternative to a for loop; .map can only called on iterative things likr arrays */}
      <ul>
        {
          allEvents.map((ev, i) => 
          <EventCard
            key={i}  // add this key any time using .map to avoid red warning in browser console (key is specific to .map)
            index={i}  // adding because key doesn't pass as prop and we need i
            event={ev}
            guestAdd={guestAdd}
            
            // name={ev.name}
            // date={ev.date}
            // guests={ev.guests}
            // description={ev.description}
          />
          )
          // .map takes two parameters: value and index
        }
      </ul>

        {/* starting to type Form will give an auto import option to import the component above */}
      <Form newEvent={event} setNewEvent={setEvent} formSubmit={formSubmit}/>
      {/* sending state to Form via props */}
    </div>
  );
}

export default App;