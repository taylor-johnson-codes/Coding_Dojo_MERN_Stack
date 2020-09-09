import React, { useState } from 'react'
import './App.css';
import EventCard from './components/EventCard';
import Form from './components/Form';

function App() {
  const [event, setEvent] = useState({
    name: '',
    date: '',
    guests: 0,
    description: ''
  });

  return (
    <div>
      <ul>
        {/* starting to type EventCard will give an auto import option to import the component above */}
        <EventCard
          name={"My Awesome Event"}
          date={"9/1/2020"}
          guests={2}
          description={"Having pizza!"}
        />
        <EventCard
          name={"Car Show"}
          date={"9/2/2020"}
          guests={10}
          description={"Hot rods!"}
        />
      </ul>

      <Form newEvent={event} setNewEvent={setEvent}/>
      {/* sending state to Form via props */}
    </div>
  );
}

export default App;