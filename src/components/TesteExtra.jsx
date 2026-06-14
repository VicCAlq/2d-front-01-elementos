export default function Produto({ nome, preco, aoComprar }) {
  return (
    
    
    <div
      style={{
        border: "1px solid #69f83e",
        borderRadius: "50px",
        padding: "25px",
        width: "320px",
        backgroundColor: "#3d4550",
        color: "yellow",
        boxShadow: "0 4px 10px rgba(255, 252, 252, 0.3)",
        marginTop: "20px"
      }}
    >

        
      <h3 style={{ marginBottom: "5px" }}>
        {nome}
      </h3>

      <p style={{ marginBottom: "10px", color: "#fc2d2d" }}>
        R$ {preco}
      </p>

    
      <button
        onClick={() => aoComprar(preco)}
        style={{
          backgroundColor: "#00c853",
          border: "1px solid #ffffff",
          padding: "8px 12px",
          borderRadius: "7px",
          cursor: "pointer",
          color: "white",
          fontWeight: "bold"
        }}
      >
        Comprar
      </button>
    </div>
  );
}