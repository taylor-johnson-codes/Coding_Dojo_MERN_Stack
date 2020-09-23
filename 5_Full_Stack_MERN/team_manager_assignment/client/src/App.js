import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Router>
        <Main path="/" />
      </Router>
    </div>
  );
}

export default App;