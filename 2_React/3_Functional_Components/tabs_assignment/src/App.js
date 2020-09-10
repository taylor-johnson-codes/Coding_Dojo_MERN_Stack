import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const allText = [
    "Tab 1 content is showing here.",
    "Tab 2 content is showing here.",
    "Tab 3 content is showing here."
  ];

  return(
    <div>
      <Tabs allText={allText}/>
    </div>
  );
}

export default App;