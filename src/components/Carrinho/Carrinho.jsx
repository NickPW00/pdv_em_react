import './Carrinho.css'

function MenuCarrinho() {
  return (
    <div className='menu_cart'>
    <div className='menu_total'>//Aqui fica o total//</div>

    <div className='menu_confirm'>
    <button className='menu_confirm_metodo' id='btn_cart' >METODO</button> 
    <button className='menu_confirm_finalizar' id='btn_cart' >FINALIZAR</button>
    </div>
    </div>
  )
}

function Carrinho() {


  return (
    <div className='container_cart'>

      <MenuCarrinho/>
    </div>
  );
}

export default Carrinho;
