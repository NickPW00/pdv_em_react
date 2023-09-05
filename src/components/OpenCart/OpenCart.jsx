import React, { useState } from 'react';
import './OpenCart.css';
import Carrinho from '../Carrinho/Carrinho';
import { Link, useNavigate } from 'react-router-dom';

function OpenCart() {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  /*
  const handleVoltar = () => {
    setShowCart(!showCart)
    /* return navigate("/") 
  } 
  */

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
