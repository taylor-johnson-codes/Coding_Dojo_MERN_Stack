import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const GameOne = (props) => {
    const [players, setPlayers] = useState([]);
    const [player, setPlayer] = useState({});
    const [gameOne, setGameOne] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => {
                setPlayers(res.data);
            })
            .catch(err => console.log(err));

    }, []);

    const clickHandlerPlaying = (id) => {
        e.preventDefault();
        axios.get(`http://localhost:8000/${id}`)
            .then(res => {
                setPlayer(res.data);
            })
            .catch(err => console.log(err));
        setGameOne("playing");
        axios.patch(`http://localhost:8000/${id}`, gameOne)
            .then(res => res.log(err))
            .catch(err => console.log(err));
        setGameOne("");
    };

    const clickHandlerNotPlaying = (id) => {
        e.preventDefault();
        axios.get(`http://localhost:8000/${id}`)
            .then(res => {
                setPlayer(res.data);
            })
            .catch(err => console.log(err));
    };

    const clickHandlerUndecided = (id) => {
        e.preventDefault();
        axios.get(`http://localhost:8000/${id}`)
            .then(res => {
                setPlayer(res.data);
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div>
                <Link to="/">Manage Players</Link> | <Link to="/game/1">Manager Player Status</Link>
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
                                            <button style={{ background: item.gameOne === "playing" ? 'green' : ''}} onClick={() => clickHandlerPlaying(item._id)}>Playing</button>
                                            <button style={{ background: item.gameOne === "not playing" ? 'red' : ''}} onClick={() => clickHandlerNotPlaying(item._id)}>Not Playing</button>
                                            <button style={{ background: item.gameOne === "undecided" ? 'yellow' : ''}} onClick={() => clickHandlerUndecided(item._id)}>Undecided</button>
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
