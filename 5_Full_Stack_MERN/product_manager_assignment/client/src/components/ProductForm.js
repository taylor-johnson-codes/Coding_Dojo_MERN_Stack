import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const ProductForm = (props) => {
    const [product, setProduct] = useState({
        title: '', 
        price: '',
        description: ''
    })

    const [errors, setErrors] = useState({
        title: '',
        price: '',
        description: ''
    })

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/", product)
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    navigate('/all');
                }
            })
            .catch(err => console.log(err));
    }

    const changeHandler = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <h3>Product Manager</h3>
            {/* <Link to="/all">Go Back to All Products</Link> */}
            <form onSubmit={submitHandler}>
                {
                    errors.title ?
                        <p>{errors.title.message}</p>
                        : ''

                }
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" onChange={changeHandler} />
                <br />
                {
                    errors.price ?
                        <p>{errors.price.message}</p>
                        : ''

                }
                <label htmlFor="price">Price: $ </label>
                <input type="text" name="price" onChange={changeHandler} />
                <br />
                {
                    errors.description ?
                        <p>{errors.description.message}</p>
                        : ''

                }
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" onChange={changeHandler} />
                <br />
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default ProductForm