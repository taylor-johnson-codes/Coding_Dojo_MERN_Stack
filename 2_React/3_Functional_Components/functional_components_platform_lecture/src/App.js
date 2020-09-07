import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div>
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
      {/* Note: we can pass down a string with or without curly braces. */}

    </div>
  );
}

export default App;