/* FORMS
There are two basic ways to deal with forms in React:
1. state: Track input values as a piece of your state, updating them on change events and rendering them back out to the UI. These are called controlled components.
2. refs: Attach a pointer to DOM nodes like inputs and textareas and reach out to inspect their values once our form is submitted. We call these uncontrolled components.
We'll favor the controlled component strategy because it allows React to continue to sit between us and the actual DOM.
*/

import React, { useState } from  'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setUsername("");  // set username back to an appropriate starting value
    };

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } value={ username }/>
                {/* value={ username } is for clearing the form inputs after the form has been submitted */}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;

/* SYNTHETIC EVENTS aka event listeners

onChange:
This event is run whenever the value in the input is changed. When we use it we need accept a parameter into our 
function, e. The e variable contains all sorts of nifty event information, where e.target is the "target" of the event, 
in other words the <input /> element, and e.target.value is the information currently typed into the input.

onSubmit:
This event runs when the user submits the form by clicking on the submit button. Like the onChange it will also need 
accept an e parameter that is also full of event information. This time, we want to prevent the default form behavior 
by using e.preventDefault(). The default form behavior is submitting the information to the route in the "action" 
which causes a page load. We want to handle this information ourselves.
*/