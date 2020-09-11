import React, { useState } from 'react'
import { navigate } from '@reach/router';

const PageOne = () => {
    const [thing, setThing] = useState("");

    const submitHandler = e => {
        e.preventDefault();  // all forms should have this
        navigate(`/pagethree/${thing}`);
    }

    return (
        <div>
            <h2>This is the PageOne component</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={e => setThing(e.target.value)}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PageOne