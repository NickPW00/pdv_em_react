import React from 'react';
import './App.css';

function ProductCard({ product, onDelete }) {
  return (
    <div className="card">
      <div className="product-name">{product.nome}</div>
      <div className="delete-button" onClick={() => onDelete(product.id)}>🗑️</div>
      <div className="info">
        <div className="quantity">Quantidade: {product.quant}g</div>
        <div className="price-per-kg">Preço por kg: R${product.preco}</div>
      </div>
      <div className="price">Preço: R${product.precoTotal.toFixed(2)}</div>
    </div>
  );
};

export default ProductCard;