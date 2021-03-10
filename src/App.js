import { useState } from "react";

function App() {
  const numeroTeclado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [numero, setNumero] = useState("657295390");
  const [llamando, setLlamando] = useState(false);
  let tiempoPresionado = "Futuro Timer";
  const anyadeDigito = (digito) => {
    if (numero.length < 9) {
      setNumero(numero + digito);
    }
  };
  const borraNumero = () => {
    setNumero(numero.slice(0, -1));
  };
  const borraNumeroEntero = (e) => {
    if (e.type === "mouseup" && typeof tiempoPresionado === "number") {
      clearTimeout(tiempoPresionado);
      return;
    }
    tiempoPresionado = setTimeout(() => setNumero(""), 750);
  };
  const llamar = (e) => {
    e.preventDefault();
    setLlamando(true);
  };
  const colgar = (e) => {
    e.preventDefault();
    setLlamando(false);
  };
  return (
    <div className="contenedor">
      <span className="mensaje">Llamando...</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            {
              numeroTeclado.map(numero =>
                <li><button disabled={llamando} onClick={() => anyadeDigito(numero)}>{numero}</button></li>
              )
            }
            <li><button disabled={llamando} className="big"
              onClick={borraNumero}
              onMouseDown={borraNumeroEntero}
              onMouseUp={borraNumeroEntero}>borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">{numero}</span>
          <a href="llamar" className={`llamar${(numero.length === 9 && !llamando) ? " activo" : ""}`} onClick={llamar}>Llamar</a>
          <a href="colgar" className={`colgar${llamando ? " activo" : ""}`} onClick={colgar}>Colgar</a>
        </div>
      </main>
    </div>
  );
}

export default App;
