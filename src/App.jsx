import './App.css'
import Carrinho from './components/Carrinho/Carrinho';
import Caixa from './components/Caixa/Caixa'
import OpenCart from './components/OpenCart/OpenCart';
import { Outlet } from 'react-router';


function App() {
  return (
    <div className='main'>
      <OpenCart/>
      <Outlet />
      {/* <Caixa/> */}
    </div>
  );
}

export default App;
