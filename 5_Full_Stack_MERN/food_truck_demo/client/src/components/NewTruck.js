import React, {useState} from 'react'
import TruckForm from './TruckForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const NewTruck = (props) => {
    const [truck, setTruck] = useState({
        name: '',
        style: '',
        description: ''
    });

    const [errors, setErrors] = useState({});

    const submitHandler = e => {
        e.preventDefault();
        // console.log(truck);
        axios.post('http://localhost:8000/api/trucks/', truck)
            // .then(data => res.json(data))
            // .catch(err => res.json(err));
            // .then(data => console.log(res.data))
            .then(res => {
                if(res.data.errors){
                    // console.log(res.data.errors);
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
            <h2>New Food Truck</h2>
            <form onSubmit={submitHandler}>
                <TruckForm truck={truck} changeHandler={changeHandler} errors={errors} action="createTruck"/>
            </form>
        </div>
    )
}

export default NewTruck