/*
[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna" que recebe como 
argumento uma função chamada "comando". Este componente deve exibir uma <div> com dois 
elementos: um <p> com o texto "Clique abaixo", e um <button> com o texto "Clique aqui" 
que ao ser pressionado executa a função recebida no argumento "comando".
*/


this "AtvBotaoAcaoExterna" function comando;
<div>
<p>
  texto : "clique abaixo"
</p>

<button>
tex:"clique aqui"

</button>

  if button == precionado esecute function comando;
</div>



import root from '../styles/main';

const AtvBotaoAcaoExterna = {
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
function comando (params)  <div>

  <P>
<template> clique abaixo </template>

    </P>
{
<div>
"Clique aqui"
</div>
 
}
export default function Botao({})  {
  return(<div>
    <button style={estilo.botao} onClick={() => console.log("Pressionado")}>
      <p style={estilo.texto}>Pode clicar!</p>
    </button>
  </div>)
}
