import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div>
      <Router>
        <ProductForm path="/" />
      </Router>
    </div>
  );
}

export default App;