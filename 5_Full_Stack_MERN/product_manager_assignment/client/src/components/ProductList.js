import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const AllProducts = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8000/")
            .then(res => {
                setAllProducts(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [allProducts]);

    return (
        <div>
        {
            loading ? 
            <p>Loading, please wait...</p>
            : 
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                {
                    allProducts.map((item, i) => (
                    <tr key={i}>
                        <td><Link to={`/${item._id}`}>{item.title}</Link></td>
                        <td>${item.price}</td>
                        <td>{item.description}</td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        }
        </div>
    );
};

export default AllProducts;
