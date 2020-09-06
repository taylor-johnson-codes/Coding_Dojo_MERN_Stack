/*
So far, our React Components have been displaying information, much of which has be given to them through props. As we make more complicated React apps some of the components we write will need to be able to store their own information. The way Components in React are able to hold onto their own information is inside of a variable we will be calling state. 
*/

import React, { Component } from 'react';

class LightSwitch extends Component {
    // The constructor lets us create an attribute for LightSwitch called state.
    // State is something we have to declare as an object, one that will be immutable to us. Inside of the this.state object we can include a key to store whether the switch is "On" or "Off."  
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }

    flipSwitch = () => {
        if( this.state.position === "On" ) {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }
    }

    render() {
        return (
            <fieldset>
                <p>The light is currently { this.state.position }</p>
                <button onClick={ this.flipSwitch }>Flip Switch</button>
            </fieldset>
        );
    }
}

export default LightSwitch;