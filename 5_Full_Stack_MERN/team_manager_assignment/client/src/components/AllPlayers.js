import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const AllPlayers = (props) => {
    const [players, setPlayers] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => {
                setPlayers(res.data);
            })
            .catch(err => console.log(err));

    }, []);

    const deletePlayer = (paramFromDeleteBtn) => {
        axios.delete(`http://localhost:8000/${paramFromDeleteBtn}`)
            .then(() => setPlayers(players.filter(player => player._id !== paramFromDeleteBtn)))
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <div>
                <Link to="/">List</Link> | <Link to="/add">Add Player</Link>
            </div>
            <br/>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map((item, i) =>
                                <tr key={i}>
                                    <td><Link to={`/${item._id}`}>{item.name}</Link></td>
                                    <td>{item.position}</td>
                                    <td><button onClick={() => deletePlayer(item._id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllPlayers
