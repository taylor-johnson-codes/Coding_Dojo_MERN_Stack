import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import List from './components/List';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {}, [])

  const click = (e) => {
    console.log("CLICKED!");
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => setPokemon(response.data.results))
      .catch(error => console.log(error))
    setClicked(true);
  }

  return (
    <div>
      <button type="submit" onClick={click}>Fetch Pokemon</button>
      {
        clicked ?
        <List pokemon={pokemon} />
        :
        ""
      }
    </div>
  );
}

export default App;