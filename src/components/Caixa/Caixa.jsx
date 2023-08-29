import './Caixa.css';
import React, { useState, useEffect } from 'react'
import produtosData from '../../data/data.json'

export const produtosAdicionados = []

/* Componente base para os botões. */
function Teclas({ numero, funcao, className }) {
  return (
    <button className={className} onClick={funcao}>{numero}</button>
  )
}

function InputsDiversos({ onClick, classInput, value, classDiv }) {
  return (
    <div
      className={classDiv}
      onClick={onClick}
    >
      <input className={className} type='text' value={value} disabled />
    </div>
  )
}

export default function EscreverCodigo() {
  const [codigo, setCodigo] = useState('');
  const [quant, setQuant] = useState('');
  const [produto, setProduto] = useState('');
  const [selecionado, setSelecionado] = useState(false);
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
      setProduto(buscProd);
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
      console.log(produtosAdicionados)
      setQuant('');
      setCodigo('');
    }
  }

  return (
    <div className='caixa'>
      <div className='inputbox'>
        <input class='caixa_resul' type='text' value={produto} disabled />
        {/* Inputs desabilitados para não serem acessados pelo teclado do computador. */}
        {/* Inputs envoltos em div para que assim as divs contenham a função que faça a conversão de onde será escrito. */}
        <InputsDiversos
          onClick={() => setSelecionado(false)}
          classDiv={"a"}
          className={`caixa__codigo_input ${selecionado ? '' : 'borda_grossa'}`}
          value={codigo}
        />
        <div className='caixa__quant'>
          <span>Quantidade</span>
          <InputsDiversos
            onClick={() => setSelecionado(true)}
            classDiv={"a"}
            classInput={`caixa__quant_input ${selecionado ? 'borda_grossa' : ''}`}
            value={quant}
          />
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
          funcao={handleConfirmarNumeros}
          numero={'Confirmar'}
        />
      </div>
    </div>
  )
}