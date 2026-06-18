import { useState } from 'react'
import './App.css'
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';
import AtvDivisoria from './components/AtvDivisoria';
import AtvParagrafo from './components/AtvParagrafo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <AtvDivisoria largura={50}/>
        <AtvParagrafo titulo= "titulo" conteudo="Sou um exemplo"/>
        <AtvBotaoAcaoExterna comando={() => console.log("Pressionado")}/>
        <AtvBotaoAcaoInterna />
      </section>
    </>
  )
}

export default App
