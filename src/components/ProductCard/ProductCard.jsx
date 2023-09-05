import React, { useState } from 'react';
import "./ProductCard.css"

function ProductCard({ product, onDelete }) {
  const un = verificarFormaUnidadeOuKg

  function verificarFormaUnidadeOuKg() {
    let ultimosDoisNumeros = product.codigo.slice(-2);
    if( ultimosDoisNumeros === '01'){
      return (true)
    } else if (ultimosDoisNumeros === '00'){
      return (false)
    }
  }

  return (
    <div className="card">
      <div className="product-name">{product.nome}</div>
      <div className="delete-button" onClick={() => onDelete(product.id)}>🗑️</div>
      <div className="info">
        <div className="quantity">Quantidade: {product.quant} {un ? 'g' : 'un'}</div>
        <div className="price-per-kg">Preço por {un ? 'kg' : 'un'} R${product.preco}</div>
      </div>
      <div className="price">Preço: R${product.precoTotal.toFixed(2)}</div>
    </div>
  );
};

export default ProductCard;