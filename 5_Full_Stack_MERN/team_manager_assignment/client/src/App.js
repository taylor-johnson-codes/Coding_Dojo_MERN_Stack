import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './components/Main';
import PlayerForm from './components/PlayerForm';
import UpdatePlayer from './components/UpdatePlayer';

function App() {
  return (
    <div>
      <Router>
        <Main path="/" />
        <PlayerForm path="/add" />
        <UpdatePlayer path="/:id" />
      </Router>
    </div>
  );
}

export default App;