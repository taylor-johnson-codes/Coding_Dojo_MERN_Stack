import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const ProductDetail = (props) => {
    const [product, setProduct] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/${props.id}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [props.id]);

    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default ProductDetail
