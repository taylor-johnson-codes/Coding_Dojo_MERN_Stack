import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";

function App() {

  return (
    <div>
      <ProductForm />
      <hr />
      <ProductList />

      <Router>
        <ProductDetail path="/:id" />
        <UpdateProduct path="/update/:id" />
      </Router>
    </div>
  );
}

export default App;