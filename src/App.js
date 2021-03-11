import { useEffect } from "react";
import { useState } from "react";

function App() {
  const numeroTeclado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [numero, setNumero] = useState("657295390");
  const [llamando, setLlamando] = useState(false);
  const [puntitos, setPuntitos] = useState("");
  let [intervalPuntitos, setIntervalPuntitos] = useState(null);
  let tiempoPresionado = "Futuro Timer";
  let [colgarAutomaticamente, setColgarAutomaticamente] = useState(null);
  const llamada = e => {
    e.preventDefault();
    if (e.target.name === "llamar") {
      setLlamando(true);
      anyadePuntitos("empezar");
      setColgarAutomaticamente(setTimeout(() => {
        anyadePuntitos("parar");
        setLlamando(false);
        setNumero("");
      }, 3000));
    } else if (e.target.name === "colgar") {
      anyadePuntitos("parar");
      setLlamando(false);
      setNumero("");
      clearTimeout(colgarAutomaticamente);
    }
  };
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
  const anyadePuntitos = (accion) => {
    if (accion === "parar") {
      console.log("voy a parar");
      console.log(intervalPuntitos);
      clearInterval(intervalPuntitos);
    } else if (accion === "empezar") {
      let counter = 0;
      setIntervalPuntitos(
        setInterval(() => {
          console.log(counter);
          setPuntitos((counter % 4 === 0) ? puntitos + "" :
            ((counter % 4 === 1) ? puntitos + "." :
              ((counter % 4 === 2) ? puntitos + ".." : "...")));
          counter++;
        }, 400));
    };
  };
  return (
    <div className="contenedor">
      <span className={`mensaje${!llamando ? " off" : ""}`}>Llamando{puntitos}</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            {
              numeroTeclado.map(numero =>
                <li key={numero}><button disabled={llamando} onClick={() => anyadeDigito(numero)}>{numero}</button></li>
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
          <a href="llamar" name="llamar" className={`llamar${(numero.length === 9 && !llamando) ? " activo" : " off"}`} onClick={llamada}>Llamar</a>
          <a href="colgar" name="colgar" className={`colgar${llamando ? " activo" : " off"}`} onClick={llamada}>Colgar</a>
        </div>
      </main>
    </div>
  );
};

export default App;
