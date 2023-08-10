import './Carrinho.css'

function MenuCarrinho() {
  const [mostrarMetodo, setMostrarMetodo] = useState(false);

  const handleBotaoClick = () => {
    setMostrarMetodo(true);
  };



  return (
    <div className='menu_cart'>
    <div className='menu_total'>//Aqui fica o total//</div>
    <div className='menu_confirm'>
    <button className='menu_confirm_metodo' id='btn_cart' onClick={handleBotaoClick} >METODO</button> 
    {mostrarMetodo && <Metodo />}
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
