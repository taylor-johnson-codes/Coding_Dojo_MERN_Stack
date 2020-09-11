import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import {Router, Link, navigate} from '@reach/router';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

function App() {
  // const [pokemonName, setPokemonName] = useState("");  // start the state of pokemonName as an empty string

  const [pokemon, setPokemon] = useState({}); // using whole pokemon object
  const [success, setSuccess] = useState(true);

  /*
  - useEffect() is a function that takes a callback; callback is the code I want to run given a certain situation
  - useEffect listens for a certain event, then re-renders
  - everytime the setPokemon function is called, the API request fires off again; use useEffect to prevent this
  */

  // USING AXIOS:
  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon/ditto")  // can do axios.post axios.delete etc.
    // returns an object as data
      .then(response => setPokemon(response.data))
      .catch(error => setSuccess(false))
  }, [])

  /*  NOT USING AXIOS: 
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto") // sending request, waiting for response 
    // fetch is for GET requests only; fetch response is full HTTP response
      .then((response) => response.json())  // once we get a response, do this
      //.then((response) => console.log(response))
      //.then((response) => console.log(response.name))
      .then((response) => { setPokemon(response) })
      //.catch(error => console.log(error))  // if there's an error in the response, do this
      //.catch(error => setPokemon({name: "ERROR OCCURRED!"}))
      .catch(error => setSuccess(false))
  }, [])  // leave second parameter (an array) of useEffect function empty if I want this to fire just the first time we get here
  */

  const changePlaces = () => {
    navigate('/pagetwo');
  }

  return (
    <div>
      {success ? (
        <h1>You got the data for: {pokemon.name}</h1>
      ) : (
        <h1>An unexpected error has occurred.</h1>
      )}

      {/* This reloads the page which we don't want: */}
      {/* <a href="/">Page One</a> | <a href="/pagetwo">Page Two</a> */}

        {/* Doesn't reload; maintains Single Page App */}
      <Link to="/">Page One</Link> | <Link to="/pagetwo">Page Two</Link>


      {/* import Router at top */}
      <Router>
        {/* this will show PageOne at the base route of localhost:3000 */}
        <PageOne path="/" />
        {/* this will show PageTwo at the route of localhost:3000/pagetwo */}
        <PageTwo path="/pagetwo" />
        {/* route parameters i.e. user_id, i.e. details page */}
        {/* colon automatically puts the parameter into props */}
        <PageThree path="pagethree/:thing"/>
      </Router>

      {/* showing ablility to navigate to another page from another function */}
      <button onClick={changePlaces}>Change Places</button>

    </div>
  );
}

export default App;