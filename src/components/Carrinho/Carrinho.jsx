import Metodo from '../Metodo/Metodo';
import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import produtosData from '../../data/data.json'
import { produtosAdicionados } from '../Caixa/Caixa';
import './Carrinho.css'
import { useNavigate } from 'react-router-dom';

let chaveAtivacao = []

function MenuCarrinho() {
  //pro botao do metodo de pagmaneto
  const navigate = useNavigate()
  const [mostrarMetodo, setMostrarMetodo] = useState(false);
  const [valorTotal, setValorTotal] = useState(0);
  const handleBotaoClick = () => {
    setMostrarMetodo(true);
    return navigate("/carrinho/metodo")
  };

  useEffect(() => {
    let soma = 0;
    for (let i = 0; i < produtosAdicionados.length; i++) {
      soma += produtosAdicionados[i].precoTotal;
    }
    setValorTotal(soma.toFixed(2));
  }, [produtosAdicionados, chaveAtivacao]);

  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setMostrarMetodo(false);
  };

  return (
    <div className="menu_cart">
      <div className="menu_total">
        <p className="menu_total_rs">TOTAL: R$ {valorTotal}</p>
      </div>
      <div className="menu_confirm">
        <button className='menu_confirm_metodo' id='btn_cart' onClick={handleBotaoClick}>
        {selectedMethod ? `${selectedMethod}` : 'METODO'}
        </button>
     
        {mostrarMetodo && <Metodo onSelectMethod={handleMethodSelect} />}
        <button className="menu_confirm_finalizar" id="btn_cart">
          FINALIZAR
        </button>
      </div>
    </div>
  );
}

function Carrinho() {
  const [elementos, setElementos] = useState(produtosAdicionados);
  const [lista, setLista] = useState("");

  const removerElemento = (index) => {
    const novosElementos = [...elementos];
    novosElementos.splice(index, 1);
    produtosAdicionados.splice(index, 1)
    setElementos(novosElementos);
    chaveAtivacao = [...novosElementos]
  };

  const limparLista = () => {
    setElementos([]);
  };

  function novoMap() {
    return (
      elementos.map((produto, index) => (
        <ProductCard
          key={produto.id}
          product={produto}
          onDelete={() => removerElemento(index)}
        />
      ))
    );
  }

  useEffect(() => {
    setLista(novoMap());
  }, [elementos]);

  return (
    <div className='container_cart'>
      {lista}
      <MenuCarrinho />
      {/* <button onClick={limparLista}>Limpar Carrinho</button> */}
    </div>
  );
}

export default Carrinho;
