import './Caixa.css';
import React, {useState} from 'react'

function Teclas({ numero, funcao, className }) {
  return(
    <button className={className} onClick={funcao}>{numero}</button>
  )
}

export default function EscreverCodigo() {
  const [codigo, setCodigo] = useState('')

  const numeros = []
  for(let i = 9; i >= 0; i--){
    numeros.push(`${i}`)
  }

  return (
    <div>
      <input type='text' disabled/>
      <input type='text' value={codigo} disabled/>
      <div>
        <span>Quantidade</span>
        <input />
      </div>
      <div className="teclado">
        {
          numeros
            .map(item => {
                return (
                  <Teclas 
                    className={"teclas"}
                    funcao={() => setCodigo(codigo + item)}
                    numero={item}
                  />
                )
              }
            )
        }
        <Teclas 
          className={'teclas__apagar'}
          funcao={() => setCodigo("")}
          numero={"Apagar "}
        />
        <Teclas 
          className={'teclas__confirmar'}
          funcao={() => setCodigo("")}
          numero={"Confirmar"}
        />
      </div>
    </div>
  )
}
