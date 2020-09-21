import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';

function App() {
  return (
    <div>
      <h1>Favorite Authors</h1>
      <Router>
        <AuthorList path="/" />
        <AuthorForm path="/new" />
      </Router>
    </div>
  );
}

export default App;
