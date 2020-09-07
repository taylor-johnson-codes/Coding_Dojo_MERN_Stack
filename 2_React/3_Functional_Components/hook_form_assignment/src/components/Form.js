import React from 'react'

const Form = (props) => {

    const {inputs, setInputs} = props;  // var names coming from App.js

    const onChangeFunc = (e) => {
        setInputs({
            ...inputs,  // spreading to bring in everything
            [e.target.name]: e.target.value  // then just change one specific thing
        });
    }

    return (
        <div>
            <form>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange={onChangeFunc}/>
                <br/>

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange={onChangeFunc}/>
                <br/>

                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={onChangeFunc}/>
                <br/>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={onChangeFunc}/>
                <br/>

                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={onChangeFunc}/>
                <br/>
            </form>
        </div>
    )
}

export default Form