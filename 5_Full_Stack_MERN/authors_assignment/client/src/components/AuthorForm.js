import React, { useState } from 'react';
import axios from "axios";
import { Link, navigate } from "@reach/router";

const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    
    // FRONT-END VALIDATIONS COMMENTED OUT
    // const [nameError, setNameError] = useState("");

    // const handleName = (e) => {
    //     setName(e.target.value);
    //     if (e.target.value.length < 1) {
    //         setNameError("Author's name is required!");
    //     } else if (e.target.value.length < 3) {
    //         setNameError("Name must be 3 characters or longer!");
    //     }
    // }
    
    const createAuthor = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/new", {name})
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Link to="/">Home</Link>

            <h4>Add a new author:</h4>
            <form onSubmit={createAuthor}>
                <div>
                    {
                        errors.name ?
                        <p style={{ color: 'red' }}>{errors.name.message}</p>
                        : ''
                    }
                    {/* {
                        nameError ?
                        <p style={{ color: 'red' }}>{nameError}</p>
                        : ''
                    } */}
                    <label htmlFor="name">Author's Name: </label>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                    {/* <input type="text" name="name" onChange={handleName} value={name}/> */}
                </div>
                <input type="submit" value="Submit Author" />
            </form>
        </div>
    )
}

export default AuthorForm