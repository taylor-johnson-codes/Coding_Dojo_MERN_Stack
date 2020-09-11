// React Router and Reach Router are 3rd party libraries; we're using Reach Router
// install in terminal: npm install @reach/router

// a <Link> component will not refresh the page. It will simply change the url and change the DOM.

// use navigate to redirect a user to another page

import React from 'react';
import './App.css';
import { Router, Link, navigate } from "@reach/router";
import DetailDogComponent from './components/DetailDogComponent';

function App() {
  /*
  fetch("http://www.example.com")
    .then(response => {
      //do something
    }).catch(err => {
      console.log(err);
    })
  */

  const onClickHandler = e => {
    naviagte('/');
  }

  return (
    <div>
      <Router>
        <LoginComponent path="/login" />
        <DashboardComponent path="/dashboard" />
        {/* These tell React that when we go to the path /login, we want to update the DOM so that it shows the LoginComponent within the <Router> component wrapper. */}
        <ListOfDogsComponent path="/dogs" />
        <DetailDogComponent path="/dogs/:id" />
      </Router>

      <Link to="/">Main Page</Link>
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