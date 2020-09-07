import React from 'react';
import './App.css';
import EventCard from './components/EventCard';

function App() {
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
    </div>
  );
}

export default App;