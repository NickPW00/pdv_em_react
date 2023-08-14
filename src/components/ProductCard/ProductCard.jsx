import React from 'react';
import './App.css';

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="card">
      <div className="product-name">{product.nome}</div>
      <div className="delete-button" onClick={() => onDelete(product.id)}>🗑️</div>
      <div className="info">
        <div className="quantity">Quantidade: {product.quantityGrams}g</div>
        <div className="price-per-kg">Preço por kg: R${product.pricePerKg.toFixed(2)}</div>
      </div>
      
      <div className="price">Preço: R${product.preco.toFixed(2)}</div>
    </div>
  );
};

export default ProductCard;