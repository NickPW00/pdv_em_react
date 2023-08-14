import Metodo from '../Metodo/Metodo';
import React, {useState} from 'react';
import produtosData from '../../data/data.json'
import produtosAdicionados from '../Caixa/Caixa';
import './Carrinho.css'


function MenuCarrinho() {
  //pro botao do metodo de pagmaneto
  const [mostrarMetodo, setMostrarMetodo] = useState(false);
  const [valorTotal, setValorTotal] = useState(0)
  const handleBotaoClick = () => {
    setMostrarMetodo(true);
  };

  return (
    <div className='menu_cart'>

    <div className='menu_total'>
      <div className='menu_total_rs'>TOTAL: R$ {valorTotal}</div>
      <div className='menu_total_resultado'>RESULTADO</div>
    </div>

    <div className='menu_confirm'>  
    {/* AQUI É ONDE VC CLICA EM METODO E ABRE O COMPONENTE METODO QUE SERÁ CRIADO */}
    <button className='menu_confirm_metodo' id='btn_cart' onClick={handleBotaoClick} >METODO</button> 
    {mostrarMetodo && <Metodo/>}

    {/* NESSE CASO SERÁ EM BREVECRIADO UM COMPONENTE PARA FINALIZAR A COMPRA, PROVAVELMENTE UM POPUP */}
    <button className='menu_confirm_finalizar' id='btn_cart' >FINALIZAR</button>
    </div>
    </div>
  )
}

function Carrinho() {


  return (
    <div className='container_cart'>
        {/* AQUI VAI FICAR O CONTAINER COM OS ITENS QUE FORAM SELECIONADOS NO "CAIXA" */}
        {/* E O MENU CARRINHO VAI FICAR NO FIM DO CONTAINER_CART */}
      <MenuCarrinho/>

    </div>
  );
}

export default Carrinho;
