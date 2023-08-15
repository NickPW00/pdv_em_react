import React from 'react';
import './Metodo.css';

const Metodo = ({ onSelectMethod }) => {
  const handleMethodClick = (method) => {
    onSelectMethod(method);
  };

  return (
    <div className='method_overlay'>
      <div className='method_window'>
        <p>MÉTODO DE PAGAMENTO</p>
        <div className='method_payment' onClick={() => handleMethodClick('CRÉDITO')}>CRÉDITO</div>
        <div className='method_payment' onClick={() => handleMethodClick('DÉBITO')}>DÉBITO</div>
        <div className='method_payment' onClick={() => handleMethodClick('PIX')}>PIX</div>
      </div>
    </div>
  );
};

export default Metodo;
