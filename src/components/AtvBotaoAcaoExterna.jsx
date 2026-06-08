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
export function Comando ({}) {
return(
  <div>
  <button onClick={() => alert("Que aura")}></button>
  </div>
)
}

export default function AtvBotaoAcaoExterna({Comando})  {
  return(
    (<div>
    <p>Clique Abaixo</p>
    <button style={estilo.botao} onClick={() => alert("Fui clicado!")}>
      <p style={estilo.texto}>Clique aqui</p>
    </button>
  </div>)
  )
}