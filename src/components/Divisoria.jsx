import root from '../styles/main';

const estilo = {
  div: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    padding: root.spacings.paddingG,
    backgroundColor: root.colors.foreground,
    gap: root.spacings.gap,
  },
}

export default function Divisoria(
  {children}/*Argumento especial 
  todo o conjunto de assuntos que está dentro da abertura e fechamento desse componente */ 
)  {
  return(<div style={estilo.div}>
    {children}
  </div>)
}
