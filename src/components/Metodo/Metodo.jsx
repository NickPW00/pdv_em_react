import React from 'react';
import './Metodo.css';
import { useNavigate } from 'react-router';

const Metodo = ({ onSelectMethod }) => {
  const navigate = useNavigate()

  const handleMethodClick = (method) => {
    onSelectMethod(method);
    return navigate("/carrinho")
  };

  return (
    <div className='method_overlay'>
      <div className='method_window'>
        <p className='method_title'>MÉTODO DE PAGAMENTO</p>
        <div className='method_payment' onClick={() => handleMethodClick('CRÉDITO')}>CRÉDITO</div>
        <div className='method_payment' onClick={() => handleMethodClick('DÉBITO')}>DÉBITO</div>
        <div className='method_payment' onClick={() => handleMethodClick('PIX')}>PIX</div>
      </div>
    </div>
  );
};

export default Metodo;
