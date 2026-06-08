import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna'
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna'
import AtvParagrafo from './components/AtvParagrafo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <AtvBotaoAcaoExterna/>
        <Divisoria>
          <AtvParagrafo/>
          <AtvBotaoAcaoInterna/>
          <Paragrafo conteudo="Sou um exemplo"/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
