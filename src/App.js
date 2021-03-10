import { useState } from "react";

function App() {
  const [numero, setNumero] = useState("657295390");
  const [llamando, setLlamando] = useState(false);
  const [puntitos, setPuntitos] = useState("");
  const [paraPuntitos, setParaPuntitos] = useState(false);
  let tiempoPresionado = "Futuro Timer";
  let intervalPuntitos = "Futuro Interval";
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
    anyadePuntitos("empezar");
  };
  const colgar = (e) => {
    e.preventDefault();
    setParaPuntitos(true);
    /* anyadePuntitos("parar"); */
    setLlamando(false);
  };
  const anyadePuntitos = (accion) => {
    /* if (accion === "parar" && typeof intervalPuntitos === "number") {
      console.log("voy a parar");
      clearInterval(intervalPuntitos);
      return;
    } */
    let counter = 0;
    intervalPuntitos = setInterval(() => {
      if (paraPuntitos) {
        clearInterval(intervalPuntitos);
      }
      setPuntitos((counter % 4 === 0) ? puntitos + "" :
        ((counter % 4 === 1) ? puntitos + "." :
          ((counter % 4 === 2) ? puntitos + ".." : "...")));
      counter++;
    }, 400);
  };
  return (
    <div className="contenedor">
      <span className="mensaje" hidden={!llamando}>Llamando{puntitos}</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            <li><button disabled={llamando} onClick={() => anyadeDigito("1")}>1</button></li>
            <li><button disabled={llamando} onClick={() => anyadeDigito("2")}>2</button></li>
            <li><button disabled={llamando} onClick={() => anyadeDigito("3")}>3</button></li>
            <li><button disabled={llamando} onClick={() => anyadeDigito("4")}>4</button></li>
            <li><button disabled={llamando} onClick={() => anyadeDigito("5")}>5</button></li>
            <li><button disabled={llamando} onClick={() => anyadeDigito("6")}>6</button></li>
            <li><button disabled={llamando} onClick={() => anyadeDigito("7")}>7</button></li>
            <li><button disabled={llamando} onClick={() => anyadeDigito("8")}>8</button></li>
            <li><button disabled={llamando} onClick={() => anyadeDigito("9")}>9</button></li>
            <li><button disabled={llamando} onClick={() => anyadeDigito("0")}>0</button></li>
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
