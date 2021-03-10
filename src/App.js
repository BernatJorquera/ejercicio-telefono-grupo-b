import { useState } from "react";

function App() {
  const [numero, setNumero] = useState("657295390");
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
  return (
    <div className="contenedor">
      <span className="mensaje">Llamando...</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            <li><button onClick={() => anyadeDigito("1")}>1</button></li>
            <li><button onClick={() => anyadeDigito("2")}>2</button></li>
            <li><button onClick={() => anyadeDigito("3")}>3</button></li>
            <li><button onClick={() => anyadeDigito("4")}>4</button></li>
            <li><button onClick={() => anyadeDigito("5")}>5</button></li>
            <li><button onClick={() => anyadeDigito("6")}>6</button></li>
            <li><button onClick={() => anyadeDigito("7")}>7</button></li>
            <li><button onClick={() => anyadeDigito("8")}>8</button></li>
            <li><button onClick={() => anyadeDigito("9")}>9</button></li>
            <li><button onClick={() => anyadeDigito("0")}>0</button></li>
            <li><button className="big"
              onClick={borraNumero}
              onMouseDown={borraNumeroEntero}
              onMouseUp={borraNumeroEntero}>borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">{numero}</span>
          <a href="llamar" className="llamar">Llamar</a>
          <a href="colgar" className="colgar activo">Colgar</a>
        </div>
      </main>
    </div>
  );
}

export default App;
