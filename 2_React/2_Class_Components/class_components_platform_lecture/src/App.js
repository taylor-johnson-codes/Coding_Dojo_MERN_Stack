import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';
import Header from './components/Header';
import MyNewChild from './components/MyNewChild';
import LightSwitch from './components/LightSwitch';

function App() {
  return (
    <>
      <div className="App">
        <MyNewComponent someText={"Hello World"}/>
        <MyNewComponent someText={"I am reusing this component."}/>
      </div>

      <div>
        {/* Valid ways to pass props: */}

        <SomeComponent someProp="test" someOtherProp={ 67 }/> 
        {/* Valid. We can send normal strings, but in numbers need curly braces */}

        <SomeComponent someProp={ "test" } someOtherProp={ 67 }/> 
        {/* Valid. A String is still a Javascript expression */}

        {/* <SomeComponent someProp="test" someOtherProp=67/>  
        Invalid. Numbers need curly braces */}
      </div>

      <div>
        {/* Compentns can have children: */}

        <MyNewComponent header={ "Header Prop" }>
          <p>This is a child</p>
          <p>This is another child</p>
          <p>This is even another child</p>
        </MyNewComponent> 
      </div>

      <div>
        {/* Synthetic Events (aka event listeners) */}

        {/* 
          - The event names are instead camelCased vs lowercase (i.e "onclick" becomes "onClick")
          - Returning false will not work with any event to prevent bubbling. You will need to manually 
          call event.stopPropagation() or event.preventDefault() as necessary.
          - Events cannot be called asynchronously because of how React "pools" the Synthetic events
        */}

        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>

        {/* common event listeners:
        onChange - an event that runs when a form input is changed
        onSubmit - an event that runs when a form is submitted
        onFocus - an event that is run when an element is given focus (clicked on or tabbed to)
        onBlur - an event that is run when an loses element focus (the user clicked away)
         */}
      </div>
    </>
  );
}

export default App;