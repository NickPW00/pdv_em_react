import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css';
import productsData from './products.json';

const App = () => {
  const [products, setProducts] = useState(productsData); //json

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="app">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default App;

