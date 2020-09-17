import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

const AllData = (props) => {
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // making API request to get data from DB:
        axios.get("http://localhost:8000/api/test")
            .then(res => {
                setAllData(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {/* link will show form when clicked to create a new thing after that componment is created */}
            <Link to="/new">Add New Thing</Link>
            {
                loading ?
                <p>Loading, please wait...</p>
                :
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map((item, i) => 
                                <tr key={i}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default AllData