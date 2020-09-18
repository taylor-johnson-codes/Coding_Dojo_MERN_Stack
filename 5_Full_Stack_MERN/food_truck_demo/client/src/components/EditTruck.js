import React, { useState, useEffect } from 'react'
import TruckForm from './TruckForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditTruck = (props) => {
    const [truck, setTruck] = useState({
        name: '',
        style: '',
        description: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/trucks/${props.id}')
            // .then(res => console.log(res))
            .then(res => {
                if(res.data == null){
                    navigate('/');
                }
                setTruck(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const submitHandler = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/trucks/${props.id}', truck)
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }

    const changeHandler = e => {
        setTruck({
            ...truck,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <h2>Edit Food Truck</h2>
            <form onSubmit={submitHandler}>
                <TruckForm truck={truck} changeHandler={changeHandler} errors={errors} action="edit" />
            </form>
        </div>
    )
}

export default EditTruck