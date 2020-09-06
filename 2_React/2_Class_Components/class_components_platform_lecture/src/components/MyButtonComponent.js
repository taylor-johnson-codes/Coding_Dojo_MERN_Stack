import React, { Component } from 'react';
import styles from './MyButtonComponent.module.css';

class MyButton extends Component {
    render() {
        return <button className={ styles.btn }>{ props.children }</button>;
    }
}

export default MyButton;

/*
Note that the name of the CSS file needs to end in "module.css" for this to work. Importing the styles gives us an object with all the different classes as key names. A small drawback of CSS Modules is that class names cannot be hyphenated, so by convention, camel casing is used. Two big advantages of CSS Modules are that (1) you can use media queries in them as usual, and (2) they are completely encapsulated at the component level. If you have another component using a different "myButton" class, there is no conflict between them, as the class names are given unique hashes at build time to keep them isolated.
*/


/*
Styled Components is a so-called CSS in JS library, meaning that we actually define our styles using JavaScript. To use Styled Components in your project, run the following in the terminal: npm install styled-components. Here's how we might create a box with some dynamic class properties.

import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
    border: 1px solid lightgray;
    background: ${props => props.bgColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
`;

export default StyledBox;


src/components/SomeOtherComponent.js:
import React from 'react';
import StyledBox from './StyledBox';

const SomeOtherComponent = () => (
    <div>
        <StyledBox bgColor="blue"/>
        <StyledBox bgColor="red" height="200px"/>
    </div>
)

export default SomeOtherComponent;
*/