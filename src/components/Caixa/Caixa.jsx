import './Caixa.css';
import React, {useState, useEffect} from 'react'
import produtosData from '../../data/data.json'

/* Componente base para os botões. */
function Teclas({ numero, funcao, className }) {
  return(
    <button className={className} onClick={funcao}>{numero}</button>
  )
}

function InputsDiversos({onClick , className, value}) {
  return (
    <div onClick={onClick}>
      <input className={className} type='text' value={value} disabled/>
    </div>
  )
}

export default function EscreverCodigo() {
  const [codigo, setCodigo] = useState('');
  const [quant, setQuant] = useState('');
  const [produto, setProduto] = useState('');
  const [selecionado, setSelecionado] = useState(true);
  const numeros = [];

  useEffect(() => {
    const produtoEncontrado = produtosData.find(produto => produto.codigo === codigo);
    console.log("Estou aqui")
    if (produtoEncontrado) {
      setProduto(produtoEncontrado.nome); // Defina qual propriedade do produto deseja exibir
    } else {
      setProduto('Produto não encontrado');
    }
  }, [codigo])

  /* Um FOR para criar os numeros que quer nas Teclas, para mais tarde, fazer um map */
  for(let i = 9; i >= 0; i--){
    numeros.push(`${i}`)
  }

  /* Funções para alternar qual o input que será preenchido pelo usuario */
  function handleDigitarNumeros(item) {
    selecionado ? setQuant(quant + item) : setCodigo(codigo + item)
  }

  function handleApagarNumeros() {
    selecionado ? setQuant('') : setCodigo('')
  }

  function handleConfirmarNumeros() {
    setQuant('');setCodigo('')
  }

  return (
    <div className='caixa'>
      <input type='text' value={produto} disabled/>
      {/* Inputs desabilitados para não serem acessados pelo teclado do computador. */}
      {/* Inputs envoltos em div para que assim as divs contenham a função que faça a conversão de onde será escrito. */}
      <InputsDiversos 
        className={`caixa__codigo_input ${selecionado ? '' : 'borda_grossa'}`}
        onClick={() => setSelecionado(false)}
        value={codigo}
      />
      <div className='caixa__quant'>
        <span>Quantidade</span>
        <InputsDiversos 
          onClick={() => setSelecionado(true)}
          className={`caixa__quant_input ${selecionado ? 'borda_grossa' : ''}`}
          value={quant}
        />
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
          funcao={handleConfirmarNumeros}
          numero={'Confirmar'}
        />
      </div>
    </div>
  )
}
