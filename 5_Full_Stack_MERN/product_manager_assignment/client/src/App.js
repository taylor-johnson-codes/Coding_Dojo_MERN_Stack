import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {

  return (
    <div>
        <ProductForm />
        <hr />
        <ProductList />

      <Router>
        <ProductDetail path="/:id" />
      </Router>
    </div>
  );
}

export default App;