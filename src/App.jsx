import './App.css'
import Carrinho from './components/Carrinho/Carrinho';
import Caixa from './components/Caixa/Caixa'
import OpenCart from './components/OpenCart/OpenCart';


function App() {
  return (
    <div className='main'>
      {/* <Carrinho/> */}
      <OpenCart/>
      <br />
      <br />
      <Caixa/>
    </div>
  );
}

export default App;
