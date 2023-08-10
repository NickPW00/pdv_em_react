import './Caixa.css';
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
