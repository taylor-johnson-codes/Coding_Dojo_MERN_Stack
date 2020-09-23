import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'
import AllPlayers from './AllPlayers'

const Main = (props) => {
    return (
        <div>
            <div>
                <Link to="/">Manage Players</Link> | <Link to="/game/1">Manager Player Status</Link>
            </div>
            <br/>

            <div>
                <AllPlayers />
            </div>
        </div>
    )
}

export default Main