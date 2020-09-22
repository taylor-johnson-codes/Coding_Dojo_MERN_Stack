import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div>
      <Router>
        <AuthorList path="/" />
        <AuthorForm path="/new" />
        <UpdateAuthor path="/update/:id" />
      </Router>
    </div>
  );
}

export default App;
