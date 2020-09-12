import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import People from './components/People';
import Planets from './components/Planets';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <Router>
        <SearchBar path="/" />
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;