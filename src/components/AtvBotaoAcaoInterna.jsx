/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo", e um <button> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
*/
/*
[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna" que recebe como argumento uma função chamada "comando". Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo", e um <button> com o texto "Clique aqui" que ao ser pressionado executa a função recebida no argumento "comando".
*/
export default function AtvBotaoAcaoExterna({ comando }) {
  return (
    <div>
      <p>Clique abaixo</p>
      <button onClick={comando}>Clique aqui</button>
    </div>
  );
