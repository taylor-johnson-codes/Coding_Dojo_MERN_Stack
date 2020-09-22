import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, navigate } from "@reach/router";

const UpdateAuthor = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:8000/edit/${props.id}`)
            .then(res => setName(res.data.name))
            .catch(err => console.log(err));
    }, []);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/edit/${props.id}`, {name})
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate('/');
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <Link to="/">Home</Link>

            <h4>Update this author:</h4>
            <form onSubmit={updateAuthor}>
                <div>
                    {
                        errors.name ?
                        <p style={{ color: 'red' }}>{errors.name.message}</p>
                        : ''
                    }
                    <label htmlFor="name">Author's Name: </label>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <input type="submit" value="Update Author" />
            </form>

            <button onClick={() => navigate("/")}>Cancel</button>
        </div>
    )
}

export default UpdateAuthor