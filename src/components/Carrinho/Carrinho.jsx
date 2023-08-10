import './Carrinho.css'

function MenuCarrinho() {
  return (
    <div className='menu_cart'>
    <div className='menu_total'>//Aqui fica o total//</div>

    <div className='menu_confirm'>
    <button className='menu_confirm_metodo' >METODO</button> 
    <button className='menu_confirm_finalizar'>FINALIZAR</button>
    </div>
    </div>
  )
}





function Carrinho() {


  return (
    <div>

      <MenuCarrinho/>
    </div>
  );
}

export default App;
