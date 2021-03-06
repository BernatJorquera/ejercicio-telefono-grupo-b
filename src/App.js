import { useState } from "react";
import Numero from "./componentes/Numero";
import Teclado from "./componentes/Teclado";
import Mensaje from "./componentes/Mensaje";
import BotonLlamarColgar from "./componentes/Botones";
let tiempoPresionado;
let colgarAutomaticamente;
let intervalPuntitos;

function App() {
  const numeroTeclado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [numero, setNumero] = useState("657295390");
  const [llamando, setLlamando] = useState(false);
  const [puntitos, setPuntitos] = useState("");
  const llamada = e => {
    e.preventDefault();
    if (e.target.name === "llamar" && numero.length === 9) {
      setLlamando(true);
      anyadePuntitos("empezar");
      colgarAutomaticamente = setTimeout(() => {
        anyadePuntitos("parar");
        setLlamando(false);
        setNumero("");
      }, 5000);
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
    if (e.type === "mouseup" && typeof tiempoPresionado !== "undefined") {
      clearTimeout(tiempoPresionado);
      return;
    }
    tiempoPresionado = setTimeout(() => setNumero(""), 750);
  };
  const anyadePuntitos = (accion) => {
    if (accion === "parar") {
      clearInterval(intervalPuntitos);
      setPuntitos("");
    } else if (accion === "empezar") {
      let counter = 0;
      intervalPuntitos = setInterval(() => {
        setPuntitos((counter % 4 === 0) ? puntitos + "" :
          ((counter % 4 === 1) ? puntitos + "." :
            ((counter % 4 === 2) ? puntitos + ".." : "...")));
        counter++;
      }, 400);
    };
  };
  return (
    <div className="contenedor">
      <Mensaje llamando={llamando} puntitos={puntitos} />
      <main className="telefono">
        <Teclado numeroTeclado={numeroTeclado}
          llamando={llamando}
          anyadeDigito={anyadeDigito}
          borraNumero={borraNumero}
          borraNumeroEntero={borraNumeroEntero}></Teclado>
        <div className="acciones">
          <Numero numero={numero}></Numero>
          <BotonLlamarColgar llamando={llamando} numero={numero} accion={llamada} />
        </div>
      </main>
    </div>
  );
};

export default App;
