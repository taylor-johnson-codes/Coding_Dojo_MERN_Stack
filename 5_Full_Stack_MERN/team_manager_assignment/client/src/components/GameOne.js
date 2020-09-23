import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const GameOne = (props) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => {
                setPlayers(res.data);
            })
            .catch(err => console.log(err));

    }, []);

    return (
        <div>
            <div>
                <Link to="/">Manage Players</Link> | <Link to="/status/game/1">Manager Player Status</Link>
            </div>
            <br/>

            <div>
                <h3>Player Status - Game 1</h3>
                <Link to="/game/1">Game 1</Link> | <Link to="/game/2">Game 2</Link> | <Link to="/game/3">Game 3</Link>
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
                                    <td>
                                        <button>Playing</button>
                                        {/* <button onClick={}>Playing</button> */}
                                        <button>Not Playing</button>
                                        {/* <button onClick={}>Not Playing</button> */}
                                        <button style={{ color: 'yellow' }}>Undecided</button>
                                        {/* <button style={{ color: 'yellow' }} onClick={}>Undecided</button> */}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GameOne
