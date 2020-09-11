import React from 'react';
import './App.css';

function App() {
  /*
  fetch("http://www.example.com")
    .then(response => {
      //do something
    }).catch(err => {
      console.log(err);
    })
  */

  return (
    <div>

    </div>
  );
}

export default App;


/* PROMISE 
A Promise is a pattern where the eventual response (and how long it will take to receive it) is not known.
Promises have 3 states
1) Pending - the outcome is not yet determined
2) Resolved - the outcome is completed successfully
3) Rejected - the outcome is completed with errors

An example Promise would look like the following...

const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
noMondays
    .then( res => console.log(res) )
    .catch( err => console.log(err) );

*/