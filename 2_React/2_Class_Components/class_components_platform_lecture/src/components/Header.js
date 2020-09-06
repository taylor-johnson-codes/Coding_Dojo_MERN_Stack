import React, {Component} from 'react';

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

export default Header;