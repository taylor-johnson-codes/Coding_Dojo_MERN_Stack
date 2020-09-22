import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const AuthorList = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/")
            .then(res => {
                setAllAuthors(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const deleteAuthor = (paramFromDeleteBtn) => {
        axios.delete(`http://localhost:8000/edit/${paramFromDeleteBtn}`)
            .then(() => setAllAuthors(allAuthors.filter(author => author._id !== paramFromDeleteBtn)))
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <h1>Favorite Authors</h1>    
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
                                <td>    
                                    <button><Link to={`/update/${item._id}`}>Edit</Link></button> 
                                    ~ 
                                    <button onClick={() => deleteAuthor(item._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList
