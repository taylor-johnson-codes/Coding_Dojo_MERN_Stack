import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const GameTwo = (props) => {
    return (
        <div>
            <div>
                <Link to="/">Manage Players</Link> | <Link to="/game/1">Manager Player Status</Link>
            </div>
            <br/>

            <div>
                <h3>Player Status - Game 2</h3>
                <Link to="/game/1">Game 1</Link> | <Link to="/game/2">Game 2</Link> | <Link to="/game/3">Game 3</Link>
            </div>
            <br/>
        </div>
    )
}

export default GameTwo