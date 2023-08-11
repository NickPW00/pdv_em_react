import './Caixa.css';
import React, {useState} from 'react'

/* Componente base para os botões. */
function Teclas({ numero, funcao, className }) {
  return(
    <button className={className} onClick={funcao}>{numero}</button>
  )
}

export default function EscreverCodigo() {
  const [codigo, setCodigo] = useState('')
  const [quant, setQuant] = useState('')
  const [selecionado, setSelecionado] = useState(true)
  const numeros = []

  /* Um FOR para criar os numeros que quer nas Teclas, para mais tarde, fazer um map */
  for(let i = 9; i >= 0; i--){
    numeros.push(`${i}`)
  }

  /* Funções para alternar qual o input que será preenchido pelo usuario */
  function handleDigitarNumeros(item) {
    selecionado ? setQuant(quant + item) : setCodigo(codigo + item)
  }

  function handleApagarNumeros(item) {
    selecionado ? setQuant('') : setCodigo('')
  }

  return (
    <div className='caixa'>
      <input type='text' disabled/>
      {/* Inputs desabilitados para não serem acessados pelo teclado do computador. */}
      {/* Inputs envoltos em div para que assim as divs contenham a função que faça a conversão de onde será escrito. */}
      <div onClick={() => setSelecionado(false)}>
        <input type='text' value={codigo}  disabled/>
      </div>
      <div className='caixa__quant'>
        <span>Quantidade</span>
        <div onClick={() => setSelecionado(true)}>
          <input type='text' value={quant} disabled/>
        </div>
      </div>
      <div className='teclado'>
      {/* Map para criar as teclas com numero. */}
        {
          numeros
            .map(item => {
                return (
                  <Teclas 
                    className={'teclas'}
                    funcao={() => handleDigitarNumeros(item)}
                    numero={item}
                  />
                )
              }
            )
        }
        <Teclas 
          className={'teclas__apagar'}
          funcao={handleApagarNumeros}
          numero={'Apagar'}
        />
        <Teclas 
          className={'teclas__confirmar'}
          funcao={handleApagarNumeros}
          numero={'Confirmar'}
        />
      </div>
    </div>
  )
}
