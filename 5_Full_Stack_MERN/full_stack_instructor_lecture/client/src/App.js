import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import AllData from './components/AllData';
import NewThing from './components/NewThing';

function App() {
  return (
    <div>
      <Router>
        <AllData path="/all" />
        <NewThing path="/new" />
      </Router>
    </div>
  );
}

export default App;