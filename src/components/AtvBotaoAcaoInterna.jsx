/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo", e um <button> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
*/

function AtvBotaoAcaoInterna() {
  // Criamos a função que exibe o alerta dentro do componente
  const lidarComClique = () => {
    alert('Fui clicado!');
  };

  return (
    <div>
      <p>Clique abaixo</p>
      {}
      <button onClick={lidarComClique}>Clique aqui</button>
    </div>
  );
}

export default AtvBotaoAcaoInterna;