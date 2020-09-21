import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from '@reach/router'

const AuthorList = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
        // making API request to get data from DB:
        axios.get("http://localhost:8000/")
            .then(res => {
                setAllAuthors(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <Link to="/new">Add an author</Link>

            <h4>We have quotes by:</h4>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((item, i) =>
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td><Link to="/">Edit</Link> ~ <Link to="/">Delete</Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList
