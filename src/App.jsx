import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';
import AtvDivisoria from './components/AtvDivisoria';
import AtvParagrafo from './components/AtvParagrafo';
import TesteExtra from './components/TesteExtra';


function App() {
  function mostrarMensagem() {
    alert("Botão clicado");
  }

const [saldo, setSaldo] = useState(0);


//atv extraaa
function ganharDinheiro() {
  setSaldo(saldo +100);
}

 function comprar(preco) {
if (saldo >=preco) {
  setSaldo(saldo - preco);
  alert("Compra feita patrão");
}
else {
  alert ("Saldo insuficiente, pegue seu pé de meia");
}
}

 
  return (
    <section id="center">
      <AtvParagrafo
        titulo="Meu saite"
        conteudo="Este é o conteúdo do parágrafo."
      />

      <AtvBotaoAcaoExterna comando={mostrarMensagem} />

      <AtvBotaoAcaoInterna />

      <AtvDivisoria largura={40} />
    

<h2 style={{ color: "green" }}>
  💰 Saldo: R$ {saldo}
</h2>

<button onClick = {ganharDinheiro}>Ganhar Dinheiro</button>

<TesteExtra nome="Notebook" 
preco={3500} 
aoComprar={comprar}
/>

    </section>
  );
}
export default App;