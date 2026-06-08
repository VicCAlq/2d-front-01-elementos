/*
[ATIVIDADE DIVISÓRIA]

Crie e exporte por padrão um componente chamado "AtvDivisoria" que recebe um argumento "largura", cujo valor pode ser entre 10 e 90. O componente deve exibir uma <div> que ocupe 90% da largura da tela visível (use a propriedade "width" com o valor "90vw" para isso), e dentro desta <div> devem ter duas outras <div> exibidas lado a lado. A <div> da esquerda deve ocupar uma percentagem da <div> inicial, essa percentagem é determinada pelo argumento "largura". A <div> da direita deve ocupar a largura restante da <div> inicial. Exemplo:

argumento largura = 30
<div> inicial = 90% da largura da tela
<div> esquerda = 30% da largura da div inicial (30% de 90% da largura da tela)
<div> direita = 70% da largura da div inicial (70% de 90% da largura da  tela)
*/

const style={
    inicio:{
        width: "90vw",
        display: "flex",
        height: "100px",
        backgroundColor: "gray",
    }
}
function AtvDivisoria({ largura }) {
  return (
    <div style={style.inicio}>
      <div
        style={{width: `${largura}%`, height: "100px",
        backgroundColor: "green",}}>
        Esquerda
      </div>

      <div
        style={{width: `${100 - largura}%`,height: "100px",
        backgroundColor: "teal",}}>
        Direita
      </div>
    </div>
  );
}

export default AtvDivisoria;