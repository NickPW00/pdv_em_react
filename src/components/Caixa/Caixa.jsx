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
  const [posfixo, setPosfixo] = useState('');
  const numeros = [];

  const prodNaoEncontrado = 'Produto não encontrado...'
  const buscProd = 'Busque seu produto'
  const prodAdicionado = 'Produto adicionado ao Carrinho!'

  useEffect(() => {
    const produtoEncontrado = produtosData.find(produto => produto.codigo === codigo);
    if (produtoEncontrado) {
      setProduto(produtoEncontrado.nome); // Defina qual propriedade do produto deseja exibir
      setPosfixo(codigo.slice(-2) === '01' ? 'g' : 'un')
    } else if (!produtoEncontrado && codigo !== '') {
      setProduto(prodNaoEncontrado);
      setPosfixo('')
    } else {
      if(timerAdic) {
        setProduto(prodAdicionado)
        setTimeout(() => {setProduto(buscProd)}, 2000)
        setTimerAdic(false)
      } else setProduto(buscProd);
    }
  }, [codigo])

  /* Um FOR para criar os numeros que quer nas Teclas, para mais tarde, fazer um map */
  for (let i = 0; i <= 9; i++) {
    if (i === 0) {
      continue; // Pula a iteração se i for igual a 0.
    }
    numeros.push(`${i}`);
  }
  numeros.push('0'); 

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
      const precoTotal = codigo.slice(-2) === '01' ? (produtoEncontrado.preco * quant) / 100 : produtoEncontrado.preco * quant;
      produtosAdicionados.push(
        {
          id: produtoEncontrado.id,
          nome: produtoEncontrado.nome,
          preco: produtoEncontrado.preco,
          precoTotal: precoTotal,
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
          <span style={{fontSize: 22}}>Quantidade</span>
          <InputsDiversos
            onClick={() => setSelecionado(true)}
            className={`caixa__quant_value ${selecionado ? 'borda_grossa' : ''}`}
            value={quant + ' ' + posfixo}
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