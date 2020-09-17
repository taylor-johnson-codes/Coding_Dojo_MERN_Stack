import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <Router>
        <ProductForm path="/" />
      </Router>
        <hr />
      <Router>
        <ProductList path="/" />
      </Router>
    </div>
  );
}

export default App;