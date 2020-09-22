import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const ProductForm = (props) => {
    // const {product, setProduct} = props;

    // const [product, setProduct] = useState({
    // title: "",
    // price: "",
    // description: "",
    // });

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState({});

  // const [errors, setErrors] = useState({
  //     title: '',
  //     price: '',
  //     description: ''
  // })

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/", {title, price, description})
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
        // setProduct({title: '', price: '', description: ''});
        // setErrors({title: '', price: '', description: ''});
    }

    // const changeHandler = (e) => {
    //     setProduct({
    //         ...product,
    //         [e.target.name]: e.target.value
    //     });
    // }

    return (
        <div>
            <h3>Product Manager</h3>
            {/* <Link to="/">Go Back to All Products</Link> */}
            <form onSubmit={submitHandler}>
                {
                    errors.title ?
                    <p style={{ color: 'red' }}>{errors.title.message}</p>
                    : ''
                }
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                <br />

                {
                    errors.price ?
                    <p style={{ color: 'red' }}>{errors.price.message}</p>
                    : ''
                }
                <label htmlFor="price">Price: $ </label>
                <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} value={price}/>
                <br />

                {
                    errors.description ?
                    <p style={{ color: 'red' }}>{errors.description.message}</p>
                    : ''
                }
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description}/>
                <br />

                <button type="submit">Create Product</button>
            </form>
        </div>
    )
}

export default ProductForm