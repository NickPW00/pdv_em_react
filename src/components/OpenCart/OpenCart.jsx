import React, { useState } from 'react';
import './OpenCart.css';
import Carrinho from '../Carrinho/Carrinho';

function OpenCart() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div className='open_cart'>
      <button className='open_cart_btn' onClick={handleShowCart}>
        {showCart ? 'FECHAR CARRINHO' : 'ABRIR CARRINHO'}
      </button>
      {showCart && (
        <div className='cart_overlay'>
          <div className='cart_container'>
            <button className='close_cart_btn' onClick={handleCloseCart}>
              FECHAR CARRINHO
            </button>
            <Carrinho />
          </div>
        </div>
      )}
    </div>
  );
}

export default OpenCart;
