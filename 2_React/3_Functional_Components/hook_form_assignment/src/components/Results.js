import React from 'react'

const Results = props => {

    const {firstName, lastName, email, password, confirmPassword} = props.data;  // var name 'data' coming from App.js

    return (
        <div>
            <h4>Results</h4>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default Results