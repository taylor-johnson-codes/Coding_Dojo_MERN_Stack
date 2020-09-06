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

export default MyNewComponent;