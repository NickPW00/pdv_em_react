import React, {useState} from 'react';

import Carrinho from '../Carrinho/Carrinho';

function OpenCart() {
  const [showCart, setshowCart] = useState(false);
  const handleShowCart = () => {
    setshowCart(true);
  };


  return (
  <div className='open_cart'>
    <button className='open_cart_btn' onClick={handleShowCart}>
    {showCart && <Carrinho/>}
    </button>
  
  </div>
  )
}

export default OpenCart;
