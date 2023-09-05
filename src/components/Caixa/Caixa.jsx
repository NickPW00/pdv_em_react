import './Caixa.css';
import React, { useState, useEffect } from 'react'
import produtosData from '../../data/data.json'

export const produtosAdicionados = []

function Teclas({ numero, funcao, className }) {
  return (
    <button className={className} onClick={funcao}>{numero}</button>
  )
}

function InputsDiversos({ onClick, value, className }) {
  return (
    <div
      className={className}
      onClick={onClick}>
        {value}
    </div>
  )
}

export default function EscreverCodigo() {
  const [codigo, setCodigo] = useState('');
  const [quant, setQuant] = useState('');
  const [produto, setProduto] = useState('');
  const [selecionado, setSelecionado] = useState(false);
  const [timerAdic, setTimerAdic] = useState(false);
  const numeros = [];

  const prodNaoEncontrado = 'Produto não encontrado...'
  const buscProd = 'Busque seu produto'
  const prodAdicionado = 'Produto adicionado ao Carrinho!'

  useEffect(() => {
    const produtoEncontrado = produtosData.find(produto => produto.codigo === codigo);
    if (produtoEncontrado) {
      setProduto(produtoEncontrado.nome); // Defina qual propriedade do produto deseja exibir
    } else if (!produtoEncontrado && codigo !== '') {
      setProduto(prodNaoEncontrado);
    } else {
      if(timerAdic) {
        setProduto(prodAdicionado)
        setTimeout(() => {setProduto(buscProd)}, 2000)
        setTimerAdic(false)
      } else setProduto(buscProd);
    }
  }, [codigo])

  /* Um FOR para criar os numeros que quer nas Teclas, para mais tarde, fazer um map */
  for (let i = 9; i >= 0; i--) {
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
    if (produto !== prodNaoEncontrado && quant !== '') {
      const produtoEncontrado = produtosData.find(produto => produto.codigo === codigo);
      produtosAdicionados.push(
        {
          id: produtoEncontrado.id,
          nome: produtoEncontrado.nome,
          preco: produtoEncontrado.preco,
          precoTotal: produtoEncontrado.preco * quant,
          imagemuri: produtoEncontrado.imagemuri,
          codigo: codigo,
          quant: quant
        }
      )
      setTimerAdic(true)
      setQuant('');
      setCodigo('');
    }
  }

  return (
    <div className='caixa'>
      <div className='inputbox'>
        <input class='caixa_resul' type='text' value={produto} disabled />
        <InputsDiversos
          onClick={() => setSelecionado(false)}
          className={`caixa__codigo_value ${selecionado ? '' : 'borda_grossa'}`}
          value={codigo}
        />
        <div className='caixa__quant'>
          <span>Quantidade</span>
          <InputsDiversos
            onClick={() => setSelecionado(true)}
            className={`caixa__quant_value ${selecionado ? 'borda_grossa' : ''}`}
            value={quant}
          />
        </div>
      </div>
      <div className='teclado'>
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