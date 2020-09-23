import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, navigate } from "@reach/router";

const UpdatePlayer = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:8000/${props.id}`)
            .then(res => {
                setName(res.data.name);
                setPosition(res.data.position)
            })
            .catch(err => console.log(err));
    }, []);

    const updatePlayer = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/${props.id}`, {name, position})
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
            <div>
                <Link to="/">Manage Players</Link> | <Link to="/status/game/1">Manager Player Status</Link>
            </div>
            <br/>

            <div>
                <Link to="/">List</Link> | <Link to="/add">Add Player</Link>
            </div>

            <div>
                <h4>Add player:</h4>

                <form onSubmit={updatePlayer}>
                    <div>
                        {
                            errors.name ?
                            <p style={{ color: 'red' }}>{errors.name.message}</p>
                            : ''
                        }
                        <label htmlFor="name">Player's Name: </label>
                        <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div>
                        {
                            errors.position ?
                            <p style={{ color: 'red' }}>{errors.position.message}</p>
                            : ''
                        }
                        <label htmlFor="position">Preferred Position: </label>
                        <input type="text" name="position" onChange={(e) => setPosition(e.target.value)} value={position} />
                    </div>
                    <input type="submit" value="Update Player" />
                </form>

                <button onClick={() => navigate("/")}>Cancel</button>
            </div>
        </div>
    )
}

export default UpdatePlayer