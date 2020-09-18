import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const OneTruck = (props) => {
    const [truck, setTruck] = useState({
        name: '',
        style: '',
        description: '',
        reviews: [],
        avg: 0 
    });

    const [review, setReview] = useState({
        name: '',
        review: '',
        rating: 1
    });

    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get('http://localhost:8000/api/trucks/${props.id}')
        .then(res => {
            if(res.data == null){
                navigate('/');
            }
            let avg = 0;
            if (res.data.reviews.length != 0) {
                res.data.reviews.forEach(r => {
                    avg += r.rating;
                });
                avg /= res.data.reviews.length;
            }
            res.data.avg = avg;
            setTruck(res.data);
        })
        .catch(err => console.log(err));
    })

    const submitHandler = e => {
        e.preventDefault();
        console.log(review);
    }

    const changeHandler = e => {
        setTruck({
            ...review,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <div className="row col-sm-12">
                <div className="offset-sm-2 col-sm-10">
                    <h2>{truck.name}</h2>
                    <p>Style: {truck.style}</p>
                    <p>Description: {truck.description}</p>
                    <p>Average Rating: {truck.avg} stars</p>
                </div>
                <div className="col-sm-12" style={{overflow: 'auto'}}>
                    {
                        truck.reviews.map((item, i) =>
                            <div className="offset-sm-2 col-sm-8">
                                <p className="col-sm-3">{item.name}</p>
                                <div className="col-sm-9">
                                    <p>{item.review}</p>
                                    <p>Rating: {item.rating} stars</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col-sm-12">
                    <form className="row" onSubmit={submitHandler}>
                        <div className="col-sm-7">
                            <div className="form-group row">
                                <label htmlFor="name" className="col-sm-4">Name: </label>
                                <input type="text" name='name' onChange={changeHandler} className="col-sm-8 form-control" value={review.name}/>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="review" className="col-sm-4">Review: </label>
                                <input type="text" name='review' onChange={changeHandler} className="col-sm-8 form-control" value={review.review} />
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="form-group row">
                                <label htmlFor="rating" className="col-sm-4">Rating: </label>
                                <select name="rating" className="col-sm-6 offset-sm-1 form-control" onChange={changeHandler}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="form-group-row">
                                <button type="button" className="offset-sm-4 col-sm-4 btn btn-secondary" onClick={setReview({name: '', review: '', rating: 1})}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OneTruck