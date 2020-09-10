import './App.css';
import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';

function App() {
  const [color, setColor] = useState('');
  const [allColors, setAllColors] = useState([]);

  const submitForm = () => {
    setAllColors([...allColors, color]);
    setColor('');
  }

  return (
    <div>
      <ColorForm color={color} setColor={setColor} submitForm={submitForm} />
      {
        allColors.map((col, i) =>
          <ColorDisplay key={i} color={col} />
        )
      }
    </div>
  );
}

export default App;