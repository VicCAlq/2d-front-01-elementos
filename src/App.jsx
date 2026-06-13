import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';
import AtvDivisoria from './components/AtvDivisoria';
import AtvParagrafo from './components/AtvParagrafo';


function App() {
  function mostrarMensagem() {
    alert("Botão clicado");
  }

  return (
    <section id="center">
      <AtvParagrafo
        titulo="Meu saite"
        conteudo="Este é o conteúdo do parágrafo."
      />

      <AtvBotaoAcaoExterna comando={mostrarMensagem} />

      <AtvBotaoAcaoInterna />

      <AtvDivisoria largura={30} />
    </section>
  );
}
export default App;