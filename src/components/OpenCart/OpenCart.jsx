import React, { useState } from 'react';
import './OpenCart.css';
import { Link } from 'react-router-dom';

function OpenCart() {
  const [showCart, setShowCart] = useState(true);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className='open_cart'>
      {
        showCart ? 
        <Link onClick={handleShowCart} className='open_cart_btn' to="/carrinho">ABRIR CARRINHO</Link> :
        <Link onClick={handleShowCart} className='open_cart_btn' to="/">FECHAR CARRINHO</Link>
      }
    </div>
  );
}

export default OpenCart;
