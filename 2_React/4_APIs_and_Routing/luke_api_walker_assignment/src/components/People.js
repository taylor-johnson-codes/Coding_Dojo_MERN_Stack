import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const People = (props) => {
    const [person, setPerson] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.id}`)
            .then(response => setPerson(response.data))
            .catch(error => console.log(error))
    }, [props.id]);

    return (
        <div>
            {/* <SearchBar/> */}
            <h3>{person.name}</h3>
            <p>Gender: {person.gender}</p>
            <p>Birth Year: {person.birth_year}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Eye Color: {person.eye_color}</p>
        </div>
    )
}

export default People