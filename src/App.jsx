import './App.css';
import React, {useState} from 'react'

function EscreverCodigo() {
  const [codigo, setCodigo] = useState('')

  return (
    <div>
      <input type='text' disabled/>
      <input type='text' disabled/>
      <div>
        <span>Quantidade</span>
        <input />
      </div>
      <div>
        <button />
      </div>
    </div>
  )
}

function Carrinho() {
  return(
    <div>
      <img src='' />
      <span>Valor</span>
    </div>
  )
}

function App() {
  return (
    <div>
      Preparado para a construção do projeto.
    </div>
  );
}

export default App;
