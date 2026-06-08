import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvDivisoria from './components/AtvDivisoria';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <AtvDivisoria largura={20}/>
        <Divisoria>
          <Paragrafo conteudo="Sou um exemplo"/>
          <Botao/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
