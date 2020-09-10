import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  // const [pokemonName, setPokemonName] = useState("");  // start the state of pokemonName as an empty string

  const [pokemon, setPokemon] = useState({}); // using whole pokemon object

  /*
  - useEffect() is a function that takes a callback; callback is the code I want to run given a certain situation
  - useEffect listens for a certain event, then re-renders
  - everytime the setPokemon function is called, the API request fires off again; use useEffect to prevent this
  */

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto") // sending request, waiting for response
      .then((response) => response.json())  // once we get a response, do this
      //.then((response) => console.log(response))
      //.then((response) => console.log(response.name))
      .then((response) => { setPokemon(response) })
      //.catch(error => console.log(error))  // if there's an error in the response, do this
      .catch(error => setPokemon({name: "ERROR OCCURRED!"}))
  }, [])  // leave second parameter (an array) of useEffect function empty if I want this to fire just the first time we get here

  return (
    <div>
      <h1>You got the data for: {pokemon.name}</h1>
    </div>
  );
}

export default App;