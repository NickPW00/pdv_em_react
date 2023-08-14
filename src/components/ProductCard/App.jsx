import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css';
import productsData from './products.json';

const App = () => {
  const [products, setProducts] = useState(productsData); // Objeto que conterá os produtos.

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };
  // Apaga o id solicitado e renderiza novamente os outros

  return (
    <div className="app">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default App;

