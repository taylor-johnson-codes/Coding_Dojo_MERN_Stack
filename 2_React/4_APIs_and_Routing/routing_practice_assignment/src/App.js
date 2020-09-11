import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import Welcome from './components/Welcome';
import Number from './components/NumOrWord';
import WordColor from './components/WordColor';

function App() {
  return (
    <div>
      <Router>
        <Welcome path="/home" />
        <Number path="/:numOrWord" />
        <WordColor path="/:numOrWord/:textColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;