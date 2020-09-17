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

    const [errors, setErrors] = useState({
        name: '',
        email: ''
    })

    const submitHandler = e => {
        e.preventDefault();
        // checking on backend post request response before deciding what to do
        // fire post request:
        axios.post("http://localhost:8000/api/test", thing)
            .then(res => {
                if(res.data.errors){
                    // console.log(res.data.errors);
                    setErrors(res.data.errors);
                }
                else{
                    navigate('/all');
                }
            })
            .catch(err => console.log(err));
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
                {
                    errors.name ?
                    <p>{errors.name.message}</p>
                    : ''
                    
                }
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={changeHandler}/>
                <br/>
                {
                    errors.email ?
                    <p>{errors.email.message}</p>
                    : ''
                    
                }
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={changeHandler}/>
                <br/>
                <button type="submit">Add Thing</button>
            </form>
        </div>
    )
}

export default NewThing