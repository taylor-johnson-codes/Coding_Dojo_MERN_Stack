import React, { useState } from 'react';
import axios from "axios";
import { Link, navigate } from "@reach/router";

const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    // const [errors, setErrors] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 1) {
            setNameError("Author's name is required!");
        } else if (e.target.value.length < 3) {
            setNameError("Name must be 3 characters or longer!");
        }
    }
    
    const createAuthor = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/new", name)
            // .then(res => {
            //     if (res.data.errors) {
            //         setErrors(res.data.errors);
            //     } else {
            //         navigate('/');
            //     }
            // })
            .then()
            .then(navigate("/"))
            .catch(err => console.log(err));
        setName("");
    };

    return (
        <div>
            <Link to="/">Home</Link>

            <h4>Add a new author:</h4>
            <form onSubmit={createAuthor}>
                <div>
                    {/* {
                        errors.name ?
                        <h3>{errors.name.message}</h3>
                        : ''
                    } */}
                    {
                        nameError ?
                        <p style={{ color: 'red' }}>{nameError}</p>
                        : ''
                    }
                    <label htmlFor="name"> Author's Name: </label>
                    <input type="text" name="name" onChange={handleName} value={name}/>
                </div>
                <input type="submit" value="Submit Author" />
            </form>
        </div>
    )
}

export default AuthorForm