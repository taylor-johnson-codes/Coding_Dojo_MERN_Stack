import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './components/Main';
import PlayerForm from './components/PlayerForm';

function App() {
  return (
    <div>
      <Router>
        <Main path="/" />
        <PlayerForm path="/add" />
      </Router>
    </div>
  );
}

export default App;