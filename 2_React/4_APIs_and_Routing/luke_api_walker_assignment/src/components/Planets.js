import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const Planets = (props) => {
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response => setPlanet(response.data))
            .catch(error => console.log(error))
    }, [props.id]);

    return (
        <div>
            {/* <SearchBar/> */}
            <h3>{planet.name}</h3>
            <p>Population: {planet.population} beings</p>
            <p>Surface Water: {planet.surface_water}%</p>
            <p>Diameter: {planet.diameter} kilometers</p>
            <p>Climate: {planet.climate}</p>
        </div>
    )
}

export default Planets