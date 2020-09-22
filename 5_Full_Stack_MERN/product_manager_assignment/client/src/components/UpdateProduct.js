import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const ProductForm = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/${props.id}`)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch(err => console.log(err));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/${props.id}`, { title, price, description })
            .then((res) => {
                if (res.data.errors) {
                setErrors(res.data.errors);
                } else {
                navigate(`/${props.id}`);
                }
        })
        .catch((err) => console.log(err));
    };

    return (
        <div>
            <h3>Update Product</h3>
            <form onSubmit={submitHandler}>
                {
                    errors.title ?
                    <p style={{ color: "red" }}>{errors.title.message}</p>
                    : ""
                }
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                <br />

                {
                    errors.price ?
                    <p style={{ color: "red" }}>{errors.price.message}</p>
                    : ""
                }
                <label htmlFor="price">Price: $</label>
                <input type="price" name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
                <br />

                {
                    errors.description ?
                    <p style={{ color: "red" }}>{errors.description.message}</p>
                    : ""
                }
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                <br />

                <button type="submit">Submit Update</button>
            </form>
        </div>
    );
};

export default ProductForm;
