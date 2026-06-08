import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoExterna';
import AtvDivisoria from './components/AtvBotaoAcaoExterna';
import AtvParagrafo from './components/AtvBotaoAcaoExterna';


function App() {
  const [count, setCount] = useState(0)

  function mostrarMensagem() {
    alert("Botão clicado")
  }

  return (
    <>
      <section id="center">
        <Divisoria>
          <Paragrafo conteudo="Sou um exemplo"/>
          <Botao/>
          <AtvBotaoAcaoExterna comando={mostrarMensagem}/>
        </Divisoria>
      </section>
    </>
  )
}

export default App