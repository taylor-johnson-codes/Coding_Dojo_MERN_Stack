import React from 'react'

const Form = (props) => {
    const {inputs, setInputs} = props;

    const onChangeFunc = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {  };
    }

    return (
        <div>
            <form onsubmit={ createUser }>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange={onChangeFunc} value={firstName}/>
                {
                    firstName.length < 2 ? 
                    <p style={{color: 'red'}}>Must be at least 2 characters</p> : ''
                }
                <br/>

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange={onChangeFunc} value={lastName}/>
                {
                    lastName.length < 2 ? 
                    <p style={{color: 'red'}}>Must be at least 2 characters</p> : ''
                }
                <br/>

                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={onChangeFunc} value={email}/>
                {
                    email.length < 5 ? 
                    <p style={{color: 'red'}}>Must be at least 5 characters</p> : ''
                }
                <br/>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={onChangeFunc} value={password}/>
                {
                    password.length < 8 ? 
                    <p style={{color: 'red'}}>Must be at least 8 characters</p> : ''
                }
                <br/>

                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={onChangeFunc} value={event.confirmPassword}/>
                {
                    password != confirmPassword ?
                    <p style={{color: 'red'}}>Passwords don't match</p> : ''
                }
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form