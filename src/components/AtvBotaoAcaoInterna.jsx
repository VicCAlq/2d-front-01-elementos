/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo", e um <button> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
*/
import root from '../styles/main';

const estilo = {
  botao: {
    borderRadius: "5px",
    padding: root.spacings.paddingM,
    backgroundColor: root.colors.primaria,
  },
  texto: {
    color: root.colors.texto,
    fontSize: "16px",
  }
}

export default function Botao({})  {
  return(<div>
    <p>Clique Abaixo</p>
    <button style={estilo.botao} onClick={() => alert("Fui clicado!")}>
      <p style={estilo.texto}>Clique aqui</p>
    </button>
  </div>)
}
