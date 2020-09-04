// Component names need to be uppercase
// Props, short for properties, is an empty object that is passed to every React component by default.

import React, {Component} from 'react';

class MyNewComponent extends Component{
    render(){
        return(  // JSX follows return
            <div>
                <p>We are in MyNewComponent!</p>
                <p>{this.props.someText}</p>
            </div>
        );
    }
}

export default MyNewComponent;  // put at end of file

class Header extends React.Component {
    render() {
        return (
            <div>
                {/* By inheriting from React.Component all we need is the "this" keyword in front of props. */}
                <h1>My name is { this.props.firstName } { this.props.lastName }</h1>
            </div>
        );
    }
}

// We could also destructure our class props this way:
class Header extends React.Component {
    render() {
        const { firstName, lastName } = this.props;
        // Destructuring - Dividing each property-value pair into a separate variable that can be called without this.props
        return (
            <div>
                {/* Destructuring allows us to use them like variables. This is just a small amount of syntactical sugar. */}
                <h1>My name is {firstName}  {lastName}</h1>
            </div>
        );
    }
}

// Valid ways to pass down props:

<SomeComponent someProp="test" someOtherProp={ 67 }/> 
// Valid. We can send normal strings, but in numbers need curly braces

<SomeComponent someProp={ "test" } someOtherProp={ 67 }/> 
// Valid. A String is still a Javascript expression

// <SomeComponent someProp="test" someOtherProp=67/> 
// Invalid. Numbers need curly braces