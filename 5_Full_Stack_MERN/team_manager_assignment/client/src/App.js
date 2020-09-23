import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './components/Main';
import PlayerForm from './components/PlayerForm';
import UpdatePlayer from './components/UpdatePlayer';
import GameOne from './components/GameOne';
import GameTwo from './components/GameTwo';
import GameThree from './components/GameThree';

function App() {
  return (
    <div>
      <Router>
        <Main path="/" />
        <PlayerForm path="/add" />
        <UpdatePlayer path="/:id" />
        <GameOne path="/game/1" />
        <GameTwo path="/game/2" />
        <GameThree path="/game/3" />
      </Router>
    </div>
  );
}

export default App;