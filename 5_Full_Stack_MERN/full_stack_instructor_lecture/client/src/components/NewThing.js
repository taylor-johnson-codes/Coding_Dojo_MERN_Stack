import React, { useState } from "react";
// don't need useEffect because when I first get to this page I don't need anything to happen right away
import axios from "axios";
import { Link, navigate } from "@reach/router";
// Link to route to another page; navigate is how to redirect within the single page app from another method

const NewThing = (props) => {
    const [thing, setThing] = useState({
        name: '',  // keys must match models.js naming
        email: ''
    })

    const submitHandler = e => {
        e.preventDefault();
    }

    const changeHandler = e => {
        setThing({
            ...thing,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <Link to="/all">Go Back to All Things</Link>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={changeHandler}/>
                <br/>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={changeHandler}/>
                <br/>
                <button type="submit">Add Thing</button>
            </form>
        </div>
    )
}

export default NewThing