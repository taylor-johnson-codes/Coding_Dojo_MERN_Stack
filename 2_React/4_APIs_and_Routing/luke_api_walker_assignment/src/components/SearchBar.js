import React, { useState } from 'react';
import { navigate } from '@reach/router';

const SearchBar = (props) => {
    const [search, setSearch] = useState("");
    const [id, setId] = useState("");

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const idHandler = (e) => {
        setId(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        navigate(`/${search}/${id}`);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label>Search for: </label>
                    <select value={search} onChange={searchHandler}>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                    </select>
                </div>
                <div>
                    <label>ID: </label>
                    {/* <input type="text" value={id} onChange={idHandler} /> */}
                    <select value={id} onChange={idHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default SearchBar